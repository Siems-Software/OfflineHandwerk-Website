// Privacy pages remain drafts. Render their notice and updated outside accordions.
// The imprint is the final provider notice and supplies its own updated date.
// German is authoritative; English is provided for information.
// A paragraph may contain [label](tel:+digits). The builder escapes the label and href.
export const legal = {
  de: {
    notice:
      'Entwurf – nicht rechtlich freigegeben. Die nach Art. 13 DSGVO erforderlichen Angaben zu Empfängern, Rechtsgrundlagen, internationalen Übermittlungen und Löschfristen sind noch nicht vollständig bestätigt. Diese Informationen sind noch keine vollständige Datenschutzerklärung. Maßgeblich ist die deutsche Fassung; die englische Fassung ist eine Übersetzung dieses Entwurfs.',
    updated: 'Stand: 11. Oktober 2026 · Entwurf, rechtliche Freigabe ausstehend',
    app: {
      title: 'Datenschutz in der App',
      intro:
        'Diese Informationen betreffen die lokale OfflineHandwerk-App auf Android und iOS. Angaben zu Käufen und RevenueCat gelten nur bei aktiver mobiler Store-Anbindung. Die separate Marketing-Website und eine gegebenenfalls separat betriebene Web-App sind nicht mit der mobilen App gleichzusetzen. Dieser Text bleibt bis zur Klärung der offenen Punkte ein Entwurf.',
      sections: [
        {
          title: 'Verantwortlicher und Kontakt',
          paragraphs: [
            'Jan Siems, Hintergasse 28, 67308 Bubenheim, Deutschland. E-Mail: info@offlinehandwerk.de.',
            'Diese Kontaktangaben gelten für personenbezogene Daten, die wir tatsächlich verarbeiten, etwa Support-Nachrichten. Sie benennen keinen bestätigten Datenschutzbeauftragten.',
          ],
        },
        {
          title: 'Deine Arbeitsdaten bleiben lokal',
          paragraphs: [
            'Kalkulationen, Kunden- und Betriebsdaten, Kontaktdaten, Positionen, interne Notizen, Mitarbeiter- und Katalogeinträge, Firmenprofil, Logo und Einstellungen liegen in der lokalen SQLite-Datenbank auf deinem Gerät. Wir erheben diese App-Inhalte nicht, übertragen sie nicht an unsere Server und speichern sie dort nicht. Es gibt keine Anmeldung bei uns und keine Synchronisierung dieser Inhalte über unsere Server.',
            'Dein Betrieb verantwortet die rechtmäßige Verarbeitung der eingegebenen Kunden- und Mitarbeiterdaten, einschließlich Rechtsgrundlage, Informationspflichten, Zugriffsrechten und Aufbewahrung. Nur für diese lokalen Datensätze sind wir mangels Zugriff weder Verantwortlicher noch Auftragsverarbeiter. Das gilt nicht für Nachrichten, die du uns sendest, oder für die Verarbeitung von Kauf- und Lizenzdaten.',
          ],
        },
        {
          title: 'Kein Nutzungs-Tracking und kein Premium-Login',
          paragraphs: [
            'Die lokale App enthält keine Analyse- oder Crash-Reporting-Dienste. Wir verfolgen deine Kalkulationen und Arbeitsschritte nicht und erstellen keine Nutzungs- oder Werbeprofile. Es gibt keinen E-Mail-Login, keinen Login-Zähler und keine E-Mail-zu-Lizenz-Zuordnung auf einem Server von OfflineHandwerk.',
            'Technisch notwendige Lizenzprüfungen bei mobilen Store-Käufen sind keine Anmeldung. Sie können auch bei Free-Nutzern und ohne aktives Abonnement stattfinden.',
          ],
        },
        {
          title: 'Mobile Käufe und Lizenzprüfung',
          paragraphs: [
            'Bei Käufen über Apple App Store oder Google Play verarbeiten Apple oder Google Kauf- und Transaktionsdaten für die Store-Abwicklung nach ihren eigenen Datenschutzbestimmungen. Der Entwurf beschreibt sie hierfür als eigenständige Verantwortliche; die konkreten Anbieter und geltenden Bedingungen sind vor Veröffentlichung zu bestätigen.',
            'Die mobile Store-Anbindung initialisiert RevenueCat ohne eigene App-Nutzerkennung und ohne E-Mail-Attribut. RevenueCat erzeugt eine App User ID und erhält Kauf-, Transaktions- und Berechtigungsdaten sowie erforderliche technische Daten, um gekaufte Funktionen freizuschalten und Käufe wiederherzustellen. Diese Kennung ist pseudonym, nicht garantiert anonym. Die App übermittelt weder eine E-Mail-Adresse noch Kalkulations-, Kunden- oder Betriebsinhalte an RevenueCat.',
            'Die notwendige Bereitstellung gekaufter Funktionen ist der Zweck der Lizenzprüfung. Soweit die Verarbeitung dafür zur Vertragserfüllung erforderlich ist, ist Art. 6 Abs. 1 lit. b DSGVO vorgesehen. Diese Grundlage deckt nicht automatisch andere SDK-Zwecke, Infrastruktur-Logs oder Marketing ab. Ohne erforderliche Kauf- und Lizenzprüfung können gekaufte Funktionen nicht freigeschaltet werden. Eine lokale App ohne Store-Anbindung nutzt diese Kaufverarbeitung nicht.',
          ],
        },
        {
          title: 'RevenueCat, Empfänger und internationale Übermittlungen',
          paragraphs: [
            'Der Entwurf benennt RevenueCat, Inc., USA, als Auftragsverarbeiter für Lizenzdaten gemäß dessen veröffentlichtem Data Processing Addendum (DPA). Das DPA sieht EU-Standardvertragsklauseln für einschlägige Drittlandübermittlungen vor. Daten können in den USA verarbeitet werden. Ob diese Vereinbarung einschließlich der Transferbedingungen für unser Konto wirksam gilt, welche Unterauftragsverarbeiter beteiligt sind und welche weiteren Schutzmaßnahmen erforderlich sind, ist noch zu bestätigen.',
            'Eine Zertifizierung nach dem EU-US Data Privacy Framework wird nicht behauptet. Informationen zu den tatsächlich geltenden Garantien und eine Kopie kannst du über info@offlinehandwerk.de anfragen. Die endgültige Beschreibung von Empfängern, Datenkategorien, Speicherorten und Übermittlungen setzt die Prüfung der produktiven Store- und SDK-Konfiguration voraus.',
          ],
        },
        {
          title: 'PDFs, Teilen und Sicherungen',
          paragraphs: [
            'PDFs werden lokal erstellt. Wenn du Teilen, Drucken oder E-Mail wählst, erhält die von dir ausgewählte App, der Mail-Anbieter oder Drucker die Datei. Wir leiten diese Dateien nicht über unsere Server weiter und speichern sie dort nicht. Für die ausgewählten Ziele gelten deren eigene Datenschutz- und Aufbewahrungsregeln.',
            'Exportierte Sicherungsdateien liegen am gewählten Ziel; die JSON-Sicherung der App ist unverschlüsselt und sollte geschützt aufbewahrt werden. Betriebssystem-Sicherungen können nach deinen Geräteeinstellungen App-Daten an einen Backup-Anbieter übertragen. Local First bedeutet daher nicht, dass von dir veranlasste Exporte oder Systemsicherungen niemals das Gerät verlassen.',
          ],
        },
        {
          title: 'Support per E-Mail',
          paragraphs: [
            'Die Funktion zum Melden eines Problems öffnet einen E-Mail-Entwurf an info@offlinehandwerk.de mit App-Version, Build, Betriebssystem, Gerätemodell, Tarif und deiner Beschreibung. Die App sendet nicht automatisch und hängt keine Kalkulations- oder Kundendaten und keine Store-Kennungen an. Du prüfst und sendest die Nachricht selbst. Bitte füge keine unnötigen Kunden-, Mitarbeiter- oder sonstigen vertraulichen Daten hinzu.',
            'Wenn du die E-Mail sendest, erhalten wir deine Absenderadresse, den Nachrichteninhalt und gegebenenfalls von dir beigefügte Dateien, um dein Anliegen zu bearbeiten. Vorgesehen ist Art. 6 Abs. 1 lit. b DSGVO für erforderliche vertragsbezogene Anfragen, sonst Art. 6 Abs. 1 lit. f DSGVO mit dem berechtigten Interesse, Anfragen zu beantworten und Fehler zu beheben. Das Senden einer E-Mail ist nicht automatisch eine datenschutzrechtliche Einwilligung.',
            'Mail-Anbieter, dessen Rolle, Speicherorte, mögliche internationale Übermittlungen, die konkrete Löschfrist nach Abschluss des Anliegens und gesetzliche Aufbewahrungsausnahmen sind noch nicht bestätigt. Support ist freiwillig; ohne erreichbare Kontaktadresse können wir dir nicht antworten.',
          ],
        },
        {
          title: 'Speicherung und Löschung',
          paragraphs: [
            'Lokale Datensätze bleiben bestehen, bis du sie löschst oder die App zurücksetzt. Archivieren ist kein Löschen. Bei normaler Deinstallation wird die lokale App-Datenbank entfernt; Betriebssystem-Sicherungen können Kopien enthalten. Wir können deine lokale Datenbank weder aus der Ferne abrufen oder löschen noch verlorene lokale Inhalte wiederherstellen.',
            'Exportierte PDFs und Sicherungen musst du am jeweiligen Ziel separat löschen. Das Zurücksetzen der App löscht weder diese Kopien noch Support-Mails oder Kaufdaten bei Apple, Google und RevenueCat. Store-Anbieter bestimmen die Aufbewahrung ihrer eigenen Transaktionsdaten.',
            'Für Lizenzprüfungen werden Kauf- und Berechtigungsdaten benötigt, solange gekaufte Funktionen bereitgestellt und Käufe wiederhergestellt werden. Das ersetzt keine konkrete Löschregel. Die RevenueCat-Löschkriterien, Support-Löschfrist und einschlägigen gesetzlichen Aufbewahrungspflichten sind vor Veröffentlichung zu ergänzen. Frühere, gegebenenfalls vorhandene Daten aus einem ehemaligen serverbasierten Service müssen gesondert geprüft werden; die Entfernung dieser Funktion beweist keine Löschung alter Serverdaten.',
          ],
        },
        {
          title: 'Deine Rechte und erforderliche Angaben',
          paragraphs: [
            'Soweit wir personenbezogene Daten verarbeiten, bestehen unter den jeweiligen gesetzlichen Voraussetzungen Rechte auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18) und Datenübertragbarkeit (Art. 20). Einer Verarbeitung auf Grundlage berechtigter Interessen nach Art. 6 Abs. 1 lit. f kannst du unter den Voraussetzungen von Art. 21 widersprechen. Eine erteilte Einwilligung kannst du nach Art. 7 Abs. 3 mit Wirkung für die Zukunft widerrufen.',
            'Du kannst dich nach Art. 77 DSGVO bei einer Datenschutzaufsichtsbehörde beschweren, beispielsweise beim Landesbeauftragten für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz. Für Anfragen an uns: info@offlinehandwerk.de. Rechte bezüglich lokaler Kunden- und Mitarbeiterdaten sind gegenüber dem verantwortlichen Betrieb geltend zu machen; wir haben keinen Zugriff auf diese Datenbank.',
            'Die lokale Nutzung verlangt keine Registrierung oder Übermittlung deiner Arbeitsdaten an uns. Die lokale App bietet keine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22 DSGVO. Die rechtliche Bewertung notwendiger Gerätespeicherung und SDK-Zugriffe nach § 25 TDDDG bleibt gesondert zu prüfen; Local First allein begründet keine Ausnahme von der Einwilligungspflicht.',
          ],
        },
      ],
    },
    website: {
      title: 'Datenschutz auf dieser Website',
      intro:
        'Diese Informationen betreffen ausschließlich die statische OfflineHandwerk-Marketing-Website auf GitHub Pages. Sie ist keine Web-App zur Verwaltung deiner Kalkulationen und enthält keine lokale App-Datenbank. Die App hat eigene Datenschutzinformationen. Angaben zum Hosting und Support bleiben bis zur Bestätigung der offenen Punkte ein Entwurf.',
      sections: [
        {
          title: 'Verantwortlicher',
          paragraphs: [
            'Jan Siems, Hintergasse 28, 67308 Bubenheim, Deutschland. E-Mail: info@offlinehandwerk.de. Dieser Kontakt ist keine Benennung eines bestätigten Datenschutzbeauftragten.',
          ],
        },
        {
          title: 'Statische Inhalte, keine Analyse und keine Werbeprofile',
          paragraphs: [
            'Die Website ist als statische Informationsseite ohne Anmeldung, Kontaktformular oder Newsletter konzipiert. Sie verwendet keine Cookies, kein localStorage, keine Analyse- oder Tracking-Dienste und keine extern eingebundenen Schriftarten, CDNs oder Medien. Dateien werden über das Website-Hosting ausgeliefert; der Aufruf übermittelt trotzdem technisch erforderliche Verbindungsdaten an den Hosting-Anbieter.',
            'Es werden keine Kalkulations-, Kunden- oder Betriebsdaten über diese Website erfasst. Die Website erstellt keine Nutzungs- oder Werbeprofile und bietet keine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22 DSGVO. Die tatsächliche produktive Auslieferung muss vor Veröffentlichung auf diese Eigenschaften geprüft werden.',
          ],
        },
        {
          title: 'Hosting durch GitHub Pages',
          paragraphs: [
            'GitHub Pages stellt die Website bereit. Beim Abruf erhält die Hosting-Infrastruktur insbesondere deine IP-Adresse und die angefragte Ressource, um Dateien auszuliefern. GitHub weist darauf hin, IP-Adressen von Besuchern von GitHub-Pages-Websites für Sicherheitszwecke zu protokollieren. Kein Tracking auf unserer Seite bedeutet daher nicht, dass beim Hosting keine personenbezogenen Daten verarbeitet werden.',
            'Der vorgesehene Zweck ist die sichere und zuverlässige Bereitstellung der Website. Als Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO vorgesehen, mit dem berechtigten Interesse am sicheren Betrieb und der Bereitstellung unserer Informationen. Die Interessenabwägung und die Abgrenzung einer eigenständigen Verarbeitung durch GitHub müssen vor Veröffentlichung geprüft werden.',
            'GitHub ist als Hosting-Empfänger benannt. Die konkrete vertragliche Anbieteridentität und Anschrift, die datenschutzrechtliche Rolle, eine gegebenenfalls erforderliche Vereinbarung, tatsächliche Logfelder, Speicherorte, Löschfristen und internationale Übermittlungen einschließlich geltender Garantien sind noch zu bestätigen. Dieser Entwurf nennt dafür weder eine erfundene Löschfrist noch eine ungeprüfte Transfergrundlage. Für Auskünfte und nach Bestätigung verfügbare Garantien kannst du info@offlinehandwerk.de kontaktieren.',
          ],
        },
        {
          title: 'Cookies und Zugriff auf dein Gerät',
          paragraphs: [
            'Die Marketing-Website setzt selbst keine Cookies und speichert keine Einstellungen oder App-Daten in localStorage oder einer lokalen Datenbank. Ein Einwilligungsbanner für Tracking wird deshalb nicht eingesetzt. Das ist keine Aussage über andere Seiten, die du über einen Link öffnest.',
            'Vor Veröffentlichung ist zu prüfen, dass Hosting, ausgelieferte Skripte und Ressourcen keine zusätzlichen Speicher- oder Zugriffsvorgänge auslösen. Falls solche Vorgänge hinzukommen, sind § 25 TDDDG und eine gegebenenfalls notwendige Einwilligung unabhängig von der DSGVO-Rechtsgrundlage zu bewerten.',
          ],
        },
        {
          title: 'Kontakt per E-Mail',
          paragraphs: [
            'Ein E-Mail-Link öffnet deine E-Mail-Anwendung und sendet nicht automatisch eine Nachricht. Wenn du uns an info@offlinehandwerk.de schreibst, erhalten wir deine Absenderadresse, den Inhalt und gegebenenfalls von dir angehängte Dateien zur Bearbeitung deiner Anfrage. Die Website hängt keine App-, Geräte-, Kunden- oder Kalkulationsdaten an.',
            'Für erforderliche vertragsbezogene Anfragen ist Art. 6 Abs. 1 lit. b DSGVO vorgesehen; für sonstige Anfragen Art. 6 Abs. 1 lit. f mit dem berechtigten Interesse an ihrer Beantwortung. Die Bewertung der Rechtsgrundlage, Mail-Anbieter und Rolle, Speicherorte, Transfergarantien, Löschfrist nach Erledigung und gesetzliche Aufbewahrungsausnahmen sind noch zu bestätigen. Kontaktaufnahme ist freiwillig; ohne erreichbare Kontaktadresse können wir nicht antworten.',
          ],
        },
        {
          title: 'Speicherdauer und externe Links',
          paragraphs: [
            'Für GitHub-Pages-Sicherheitslogs ist in diesem Entwurf keine bestätigte Löschfrist verfügbar. Auch die konkrete Aufbewahrungsregel für E-Mail-Anfragen ist noch offen. Eine fehlende Datenbank auf dieser Website beseitigt diese Verarbeitung nicht.',
            'Externe Links, etwa zu App-Stores, laden auf dieser Website keine Inhalte des Zielanbieters. Wenn du den Link öffnest, erhält die Zielseite Verbindungsdaten und verarbeitet sie nach ihren eigenen Regeln. Eine Weiterleitung zu einem Store ist kein Kauf auf dieser Website; RevenueCat wird hier nicht eingebunden.',
          ],
        },
        {
          title: 'Deine Datenschutzrechte',
          paragraphs: [
            'Soweit wir personenbezogene Daten verarbeiten, kannst du unter den gesetzlichen Voraussetzungen Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18) und Datenübertragbarkeit (Art. 20) verlangen. Insbesondere kannst du einer Verarbeitung auf Grundlage berechtigter Interessen nach Art. 6 Abs. 1 lit. f unter den Voraussetzungen von Art. 21 widersprechen. Eine erteilte Einwilligung kannst du nach Art. 7 Abs. 3 jederzeit für die Zukunft widerrufen. Kontakt: info@offlinehandwerk.de.',
            'Nach Art. 77 DSGVO kannst du dich bei einer Datenschutzaufsichtsbehörde beschweren, beispielsweise beim Landesbeauftragten für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz. Der Abruf der Website erfordert technische Verbindungsdaten; ohne diese kann die Hosting-Infrastruktur die Dateien nicht ausliefern. Eine Registrierung oder die Angabe von Arbeitsdaten ist nicht erforderlich.',
          ],
        },
      ],
    },
    imprint: {
      title: 'Impressum',
      intro: 'Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)',
      updated: 'Stand: Oktober 2026',
      sections: [
        {
          title: 'Anbieter',
          paragraphs: ['Jan Siems, Hintergasse 28, 67308 Bubenheim, Deutschland'],
        },
        {
          title: 'Kontakt',
          paragraphs: [
            'Telefon: [+49 176 84328001](tel:+4917684328001)',
            'E-Mail: info@offlinehandwerk.de',
          ],
        },
        {
          title: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV',
          paragraphs: ['Jan Siems, Anschrift wie oben'],
        },
        {
          title: 'Verbraucherstreitbeilegung',
          paragraphs: [
            'Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
          ],
        },
      ],
    },
  },
  en: {
    notice:
      'Draft – not legally approved. The information required by Art. 13 GDPR about recipients, legal bases, international transfers and deletion periods has not yet been fully confirmed. These details do not yet constitute a complete privacy notice. The German version is authoritative; the English version is a translation of this draft.',
    updated: 'Last updated: 11 October 2026 · Draft, pending legal approval',
    app: {
      title: 'App privacy',
      intro:
        'These details concern the local OfflineHandwerk app on Android and iOS. Purchase and RevenueCat information applies only when the mobile store integration is active. The separate marketing website and any separately operated web app must not be confused with the mobile app. This text remains a draft until the outstanding matters are resolved.',
      sections: [
        {
          title: 'Controller and contact',
          paragraphs: [
            'Jan Siems, Hintergasse 28, 67308 Bubenheim, Germany. Email: info@offlinehandwerk.de.',
            'These contact details concern personal data that we actually process, such as support messages. They do not identify a confirmed data protection officer.',
          ],
        },
        {
          title: 'Your work data stays local',
          paragraphs: [
            'Calculations, customer and business data, contact details, line items, internal notes, employee and catalog records, business profile, logo and settings are stored in the local SQLite database on your device. We do not collect these app contents, transfer them to our servers or store them there. There is no sign-in with us and no synchronization of these contents through our servers.',
            'Your business is responsible for the lawful processing of the customer and employee data you enter, including its legal basis, information duties, access rights and retention. Only for those local records, which we cannot access, are we neither the controller nor a processor. This does not apply to messages you send us or to the processing of purchase and license data.',
          ],
        },
        {
          title: 'No usage tracking or Premium sign-in',
          paragraphs: [
            'The local app contains no analytics or crash-reporting services. We do not track your calculations or work steps and do not create usage or advertising profiles. There is no email sign-in, no sign-in counter and no email-to-license mapping on an OfflineHandwerk server.',
            'Technically necessary license checks for mobile store purchases are not sign-ins. They may also take place for Free users and without an active subscription.',
          ],
        },
        {
          title: 'Mobile purchases and license verification',
          paragraphs: [
            'For purchases through Apple App Store or Google Play, Apple or Google process purchase and transaction data for store transactions under their own privacy policies. The draft describes them as independent controllers for that purpose; the specific providers and applicable terms must be confirmed before publication.',
            'The mobile store integration initializes RevenueCat without a custom app user ID and without an email attribute. RevenueCat generates an App User ID and receives purchase, transaction and entitlement data and necessary technical data to unlock purchased features and restore purchases. This identifier is pseudonymous, not guaranteed to be anonymous. The app sends neither an email address nor calculation, customer or business contents to RevenueCat.',
            'The purpose of license verification is the necessary provision of purchased features. Insofar as this processing is necessary to perform the contract, the proposed legal basis is Art. 6(1)(b) GDPR. This basis does not automatically cover other SDK purposes, infrastructure logs or marketing. Purchased features cannot be unlocked without the required purchase and license verification. A local app without the store integration does not use this purchase processing.',
          ],
        },
        {
          title: 'RevenueCat, recipients and international transfers',
          paragraphs: [
            'The draft identifies RevenueCat, Inc., USA, as a processor for license data under its published Data Processing Addendum (DPA). The DPA provides EU Standard Contractual Clauses for relevant international transfers. Data may be processed in the United States. Whether this agreement and its transfer terms effectively apply to our account, which subprocessors are involved and which additional safeguards are necessary still need confirmation.',
            'This notice does not claim certification under the EU-US Data Privacy Framework. You can request information about the safeguards that actually apply and a copy at info@offlinehandwerk.de. The final description of recipients, data categories, storage locations and transfers requires a review of the production store and SDK configuration.',
          ],
        },
        {
          title: 'PDFs, sharing and backups',
          paragraphs: [
            'PDFs are created locally. When you choose Share, Print or email, the app, mail provider or printer you select receives the file. We do not relay these files through our servers or store them there. The selected destinations have their own privacy and retention rules.',
            "Exported backup files are stored at your chosen destination; the app's JSON backup is unencrypted and should be kept secure. Operating-system backups may transfer app data to a backup provider according to your device settings. Local First therefore does not mean that exports you initiate or system backups can never leave your device.",
          ],
        },
        {
          title: 'Support by email',
          paragraphs: [
            'The problem-reporting feature opens an email draft to info@offlinehandwerk.de with app version, build, operating system, device model, plan and your description. The app does not send it automatically or attach calculation or customer records or store identifiers. You review and send the message yourself. Please do not add unnecessary customer, employee or other confidential data.',
            'If you send the email, we receive your sender address, message and any files you attach to handle your request. The proposed legal basis is Art. 6(1)(b) GDPR for necessary contract-related requests, otherwise Art. 6(1)(f) GDPR with the legitimate interest in answering requests and fixing faults. Sending an email is not automatically consent under data protection law.',
            'The mailbox provider, its role, storage locations, possible international transfers, the concrete deletion period after resolution and statutory retention exceptions have not yet been confirmed. Support is optional; without a reachable contact address we cannot reply.',
          ],
        },
        {
          title: 'Storage and deletion',
          paragraphs: [
            'Local records remain until you delete them or reset the app. Archiving is not deletion. Normal uninstallation removes the local app database; operating-system backups may contain copies. We cannot remotely retrieve or delete your local database or recover lost local contents.',
            'You must delete exported PDFs and backups separately at their destinations. Resetting the app deletes neither those copies nor support emails or purchase data held by Apple, Google and RevenueCat. Store providers determine retention of their own transaction records.',
            'License checks require purchase and entitlement data while purchased features are provided and purchases can be restored. This does not replace a concrete deletion rule. RevenueCat deletion criteria, support retention and applicable statutory retention obligations must be added before publication. Any historical records from a former server-based Service must be assessed separately; removing that feature does not prove that old server records were deleted.',
          ],
        },
        {
          title: 'Your rights and required information',
          paragraphs: [
            'Where we process personal data, you have rights, subject to their statutory conditions, to access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction (Art. 18) and portability (Art. 20). Under the conditions of Art. 21, you may object to processing based on legitimate interests under Art. 6(1)(f). You may withdraw consent you have given under Art. 7(3) with future effect.',
            'Under Art. 77 GDPR, you may complain to a data protection supervisory authority, for example the State Commissioner for Data Protection and Freedom of Information Rhineland-Palatinate. For requests to us: info@offlinehandwerk.de. Requests concerning local customer and employee data must be directed to the responsible business; we cannot access that database.',
            'Local use requires no registration or transmission of your work data to us. The local app does not provide automated decision-making, including profiling, within the meaning of Art. 22 GDPR. The legal assessment of necessary device storage and SDK access under section 25 TDDDG remains a separate requirement; Local First alone does not establish an exemption from consent.',
          ],
        },
      ],
    },
    website: {
      title: 'Website privacy',
      intro:
        'These details concern only the static OfflineHandwerk marketing website on GitHub Pages. It is not a web app for managing your calculations and contains no local app database. The app has its own privacy information. Hosting and support information remains a draft until the outstanding matters are confirmed.',
      sections: [
        {
          title: 'Controller',
          paragraphs: [
            'Jan Siems, Hintergasse 28, 67308 Bubenheim, Germany. Email: info@offlinehandwerk.de. This contact does not identify a confirmed data protection officer.',
          ],
        },
        {
          title: 'Static content, no analytics or advertising profiles',
          paragraphs: [
            'The website is designed as a static information site without sign-in, a contact form or a newsletter. It uses no cookies, localStorage, analytics or tracking services, and no externally embedded fonts, CDNs or media. Files are delivered through the website hosting; visiting still sends technically necessary connection data to the hosting provider.',
            'No calculation, customer or business data is collected through this website. The website creates no usage or advertising profiles and provides no automated decision-making, including profiling, within the meaning of Art. 22 GDPR. The actual production delivery must be checked for these properties before publication.',
          ],
        },
        {
          title: 'Hosting through GitHub Pages',
          paragraphs: [
            "GitHub Pages hosts the website. When you visit, the hosting infrastructure receives, in particular, your IP address and the requested resource to deliver files. GitHub states that it logs visitors' IP addresses on GitHub Pages websites for security purposes. No tracking on our website therefore does not mean that hosting involves no personal data processing.",
            'The intended purpose is the secure and reliable provision of the website. The proposed legal basis is Art. 6(1)(f) GDPR, with the legitimate interest in secure operation and providing our information. The balancing assessment and the distinction from any processing by GitHub as an independent controller must be reviewed before publication.',
            'GitHub is identified as a hosting recipient. The specific contracting provider identity and address, data protection role, any required agreement, actual log fields, storage locations, deletion periods and international transfers with applicable safeguards still need confirmation. This draft supplies neither an invented deletion period nor an unverified transfer basis. You can contact info@offlinehandwerk.de for information and safeguards available once confirmed.',
          ],
        },
        {
          title: 'Cookies and access to your device',
          paragraphs: [
            'The marketing website itself sets no cookies and stores no preferences or app data in localStorage or a local database. A tracking consent banner is therefore not used. This does not describe other websites you open through a link.',
            'Before publication, verify that hosting, delivered scripts and resources do not introduce additional storage or access operations. If such operations are added, section 25 TDDDG and any required consent must be assessed independently of the GDPR legal basis.',
          ],
        },
        {
          title: 'Contact by email',
          paragraphs: [
            'An email link opens your email application and does not automatically send a message. If you write to info@offlinehandwerk.de, we receive your sender address, message and any files you attach to handle your request. The website attaches no app, device, customer or calculation data.',
            'The proposed legal basis is Art. 6(1)(b) GDPR for necessary contract-related requests, otherwise Art. 6(1)(f) with the legitimate interest in answering requests. The legal-basis assessment, mailbox provider and role, storage locations, transfer safeguards, deletion period after resolution and statutory retention exceptions still need confirmation. Contact is optional; without a reachable contact address we cannot reply.',
          ],
        },
        {
          title: 'Retention and external links',
          paragraphs: [
            'This draft has no confirmed deletion period for GitHub Pages security logs. The concrete retention rule for email requests also remains outstanding. The absence of a database on this website does not remove these processing activities.',
            "External links, for example to app stores, do not load the destination provider's content on this website. Opening a link sends connection data to the destination, which processes it under its own rules. Following a store link is not a purchase on this website; RevenueCat is not integrated here.",
          ],
        },
        {
          title: 'Your privacy rights',
          paragraphs: [
            'Where we process personal data, you may request access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction (Art. 18) and portability (Art. 20), subject to statutory conditions. In particular, under the conditions of Art. 21, you may object to processing based on legitimate interests under Art. 6(1)(f). You may withdraw consent you have given at any time under Art. 7(3) with future effect. Contact: info@offlinehandwerk.de.',
            'Under Art. 77 GDPR, you may complain to a data protection supervisory authority, for example the State Commissioner for Data Protection and Freedom of Information Rhineland-Palatinate. Visiting the website requires technical connection data; without it, the hosting infrastructure cannot deliver the files. Registration or providing work data is not required.',
          ],
        },
      ],
    },
    imprint: {
      title: 'Legal notice',
      intro:
        'Information pursuant to section 5 of the German Digital Services Act (Digitale-Dienste-Gesetz, DDG)',
      updated: 'As of: October 2026',
      sections: [
        {
          title: 'Provider',
          paragraphs: ['Jan Siems, Hintergasse 28, 67308 Bubenheim, Germany'],
        },
        {
          title: 'Contact',
          paragraphs: [
            'Phone: [+49 176 84328001](tel:+4917684328001)',
            'Email: info@offlinehandwerk.de',
          ],
        },
        {
          title: 'Responsible for content under section 18 (2) MStV',
          paragraphs: ['Jan Siems, address as above'],
        },
        {
          title: 'Consumer dispute resolution',
          paragraphs: [
            'I am not willing and not obliged to participate in dispute resolution proceedings before a consumer conciliation body.',
          ],
        },
      ],
    },
  },
};
