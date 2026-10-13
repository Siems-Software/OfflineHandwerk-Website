import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { languages } from '../config.mjs';

export const parseLegalBody = (body) =>
  body
    .trim()
    .split(/^## /m)
    .filter(Boolean)
    .map((chunk) => {
      const breakAt = chunk.indexOf('\n');
      const heading = (breakAt === -1 ? chunk : chunk.slice(0, breakAt)).trim();
      const rest = breakAt === -1 ? '' : chunk.slice(breakAt + 1).trim();
      const idMatch = /^(.*) \{#([A-Za-z0-9-]+)\}$/.exec(heading);
      const title = idMatch ? idMatch[1] : heading;
      const paragraphs = rest
        ? rest
            .split(/\n{2,}/)
            .map((paragraph) => paragraph.trim())
            .filter(Boolean)
        : [];
      return idMatch ? { id: idMatch[2], title, paragraphs } : { title, paragraphs };
    });

export const parseLegalDocument = (source) => {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/.exec(source);
  if (!match) throw new Error('Legal markdown is missing frontmatter');
  const data = {};
  for (const line of match[1].split('\n')) {
    if (!line.trim()) continue;
    const field = /^([A-Za-z]+): (.*)$/.exec(line);
    if (!field) throw new Error(`Invalid legal frontmatter: ${line}`);
    data[field[1]] = JSON.parse(field[2]);
  }
  for (const key of ['title', 'updated']) {
    if (typeof data[key] !== 'string' || data[key].trim() === '')
      throw new Error(`Missing legal ${key}`);
  }
  if (data.intro != null && (typeof data.intro !== 'string' || data.intro.trim() === ''))
    throw new Error('Missing legal intro');
  return {
    title: data.title,
    ...(typeof data.intro === 'string' ? { intro: data.intro } : {}),
    updated: data.updated,
    sections: parseLegalBody(match[2]),
  };
};

export const loadLegal = async () => {
  const documents = {};
  for (const lang of languages) {
    documents[lang] = {};
    for (const kind of ['privacy', 'imprint']) {
      const source = await readFile(
        resolve(process.cwd(), 'src/content/legal', lang, `${kind}.md`),
        'utf8',
      );
      documents[lang][kind] = parseLegalDocument(source);
    }
  }
  return documents;
};
