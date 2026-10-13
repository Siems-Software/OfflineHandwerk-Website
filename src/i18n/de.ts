type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? readonly Widen<U>[]
        : T extends object
          ? { [K in keyof T]: Widen<T[K]> }
          : T;

export const de = {
  language: 'Deutsch',
  metaTitle: 'OfflineHandwerk – Dein Handwerk. Deine Preise. Deine Daten.',
  metaDescription:
    'Kalkulationen für deinen Handwerksbetrieb. Lokal gespeicherte Daten, klare Preise und PDFs für deine Kunden. Ohne Werbung und ohne Tracking deiner Arbeit.',
  skip: 'Zum Inhalt',
  navLabel: 'Hauptnavigation',
  navConcept: 'Konzept',
  navFeatures: 'Funktionen',
  navPlans: 'Pakete',
  navDownload: 'Zur App',
  switchLabel: 'Sprache: Deutsch – zu Englisch wechseln',
  heroEyebrow: 'Für deinen nächsten Auftrag',
  heroTitle: 'Dein Handwerk.',
  heroAccent: 'Deine Preise.',
  heroEnd: 'Deine Daten.',
  heroBody:
    'Kalkuliere Arbeit und Material. Erstelle ein PDF für deine Kunden. Und behalte deine Betriebsdaten dort, wo sie hingehören: bei dir.',
  screenshotAlt:
    'OfflineHandwerk: Startansicht mit Stammdaten, Kalkulationen und Einstellungen in der dunklen Ansicht',
  screenshotSecondAlt:
    'Kalkulationsübersicht in OfflineHandwerk mit dem integrierten Beispiel Bad modernisieren für Musterkunde',
  conceptEyebrow: 'Local First',
  conceptTitle: 'Dein Betrieb. Nicht unsere Datenbank.',
  conceptBody:
    'Kalkulationen, Kunden, Betriebsdaten und dein Logo bleiben lokal auf deinem Gerät. Wir erhalten diese Inhalte nicht und speichern sie nicht auf unseren Servern.',
  conceptItems: [
    {
      title: 'Lokal arbeiten',
      body: 'Deine erfassten Inhalte liegen in der lokalen Datenbank der Anwendung. Deine Arbeit wird nicht an OfflineHandwerk übertragen.',
    },
    {
      title: 'Ohne Werbung',
      body: 'Keine Werbebanner, keine Analyse deiner Arbeit, keine Nutzungsprofile. Du konzentrierst dich auf deinen Auftrag.',
    },
    {
      title: 'Du behältst die Verantwortung',
      body: 'Geht das Gerät verloren oder werden die lokalen App-Daten gelöscht, können wir sie nicht wiederherstellen. Sichere deine Daten und verwahre Exporte selbst.',
    },
  ],
  featuresEyebrow: 'Vom Auftrag zum PDF',
  featuresTitle: 'Weniger Umwege. Mehr Überblick.',
  featureSteps: [
    {
      title: 'Bausteine bereithalten',
      body: 'Pflege Kunden, Mitarbeiter, Materialien und Leistungen. Hinterlege deine Preise, Steuersätze und Zuschläge.',
    },
    {
      title: 'Sauber kalkulieren',
      body: 'Stelle Arbeitszeit und Material für deinen Auftrag zusammen. Behalte Netto, Steuer und Gesamtsumme im Blick.',
    },
    {
      title: 'Ergebnis weitergeben',
      body: 'Sieh dir das Kunden-PDF an. Mit Premium exportierst du ohne Wasserzeichen und teilst, sendest oder druckst die Datei über die Funktionen deines Geräts.',
    },
  ],
  plansEyebrow: 'Free & Premium',
  plansTitle: 'Starte klein. Erweitere, wenn es passt.',
  plansBody:
    'Free zum Einstieg. Premium für den täglichen Einsatz. Deine Inhalte bleiben bei jedem Paket lokal.',
  freeName: 'Free',
  premiumName: 'Premium',
  freePrice: 'Kostenlos',
  freeDescription: 'Die Grundlagen zum Kennenlernen.',
  premiumDescription:
    'Premium für deine Kalkulationen und PDFs, plus Backup und Wiederherstellung.',
  premiumMonthly: '9,99 € / Monat',
  premiumYearly: '109,99 € / Jahr (1 Monat gratis)',
  tableCaption: 'Funktionen und Grenzen der mobilen App im Vergleich',
  tableFeature: 'Funktion',
  included: 'Enthalten',
  notIncluded: 'Nicht enthalten',
  unlimited: 'Unbegrenzt',
  limited: 'Bis zu {count}',
  features: {
    calculations: 'Gespeicherte Kalkulationen',
    customers: 'Kunden',
    employees: 'Mitarbeiter',
    materials: 'Materialien',
    services: 'Leistungen',
    taxes: 'Steuersätze',
    surcharges: 'Zuschläge',
    canPreviewPdf: 'Kunden-PDF ansehen',
    canExportWithoutWatermark: 'PDF ohne Wasserzeichen exportieren',
    canUseLogo: 'Eigenes Logo im PDF',
    canUseTemplates: 'Positionsvorlagen',
    canCreateInternalPdf: 'Internes PDF',
    canSendOfficeEmail: 'PDF ans Büro senden',
    canBackupRestore: 'Backup & Wiederherstellung',
  },
  footnoteUnlimited: '*1 ∞ = Unbegrenzt',
  footnoteBackup:
    '*2 Ohne die Backup-Funktion kannst du keine vollständige lokale Datenbanksicherung in der App erstellen. Ein PDF-Export ersetzt kein Backup deiner Datenbank.',
  downloadEyebrow: 'Android & iOS',
  downloadTitle: 'Dein nächster Auftrag wartet.',
  downloadBody:
    'Die Store-Veröffentlichung wird vorbereitet. Sobald die App verfügbar ist, findest du hier die direkten Download-Links.',
  googlePlay: 'Google Play',
  appStore: 'App Store',
  storePending: 'Noch nicht verfügbar · Platzhalter',
  downloadNote: 'Keine aktiven Store-Links und keine QR-Codes mit Platzhalter-Zielen.',
  footerClaim: 'Hier zählt dein Handwerk, deine Preise und deine Daten.',
  footerLegal: 'Rechtliches',
  privacy: 'Datenschutz',
  imprint: 'Impressum',
  contact: 'Kontakt',
  footerBefore: 'Mit ❤️ in',
  footerAfter: 'hergestellt',
  footerFlag: 'Deutschland',
  notFoundTitle: 'Diese Seite gibt es nicht.',
  notFoundBody: 'Wähle die deutsche oder englische Produktseite.',
} as const;

export type Dictionary = Widen<typeof de>;
