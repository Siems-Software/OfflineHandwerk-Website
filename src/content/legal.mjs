// German is authoritative; English is provided for information.
// A paragraph may contain [label](tel:+digits). The builder escapes the label and href.
export const legal = {
  de: {
    app: {
      title: 'Datenschutz in der App',
      intro:
        'Diese Informationen gelten für die OfflineHandwerk-App auf Android und iOS. Die Marketing-Website hat eine eigene Datenschutzerklärung. Angaben zu Käufen gelten nur, wenn die mobile Store-Anbindung aktiv ist.',
      updated: 'Stand: Oktober 2026',
      sections: [
        {
          title: 'Verantwortlicher',
          paragraphs: [
            'Jan Siems, Hintergasse 28, 67308 Bubenheim, Deutschland. Telefon: [+49 176 84328001](tel:+4917684328001). E-Mail: info@offlinehandwerk.de.',
            'Ein Datenschutzbeauftragter ist nicht erforderlich.',
          ],
        },
        {
          title: 'Welche Daten verarbeitet werden',
          paragraphs: [
            'Kalkulationen, Kunden- und Betriebsdaten, Kontaktdaten, Positionen, interne Notizen, Mitarbeiter- und Katalogeinträge, Firmenprofil, Logo und Einstellungen liegen in der lokalen SQLite-Datenbank auf deinem Gerät. Wir erheben diese Inhalte nicht, übertragen sie nicht an unsere Server und speichern sie dort nicht. Es gibt keine Anmeldung bei uns und keine Synchronisierung dieser Inhalte über unsere Server.',
            'Dein Betrieb verantwortet die rechtmäßige Verarbeitung der eingegebenen Kunden- und Mitarbeiterdaten, einschließlich Rechtsgrundlage, Informationspflichten, Zugriffsrechten und Aufbewahrung. Auf diese lokalen Datensätze haben wir keinen Zugriff. Für sie sind wir weder Verantwortlicher noch Auftragsverarbeiter. Das gilt nicht für Nachrichten, die du uns sendest, und nicht für Kauf- und Lizenzdaten.',
            'Wenn du ein Bild als Betriebslogo auswählst, verwendet die App nur das Foto, das du in der Mediathek auswählst, und speichert es lokal für deine PDFs. Kamera und Mikrofon sind in der App-Konfiguration nicht freigegeben. Eine Sicherung importierst du nur, indem du selbst eine Datei auswählst.',
            'Die App enthält kein Analyse- und kein Crash-Reporting-SDK. Wir verfolgen deine Kalkulationen und Arbeitsschritte nicht und erstellen keine Nutzungs- oder Werbeprofile. Es gibt keine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22 DSGVO.',
          ],
        },
        {
          title: 'Käufe und Lizenzprüfung',
          paragraphs: [
            'Die mobile Store-Anbindung initialisiert RevenueCat nur mit einem API-Schlüssel, ohne eigene App-Nutzerkennung und ohne E-Mail-Attribut. RevenueCat erzeugt eine App User ID. Diese Kennung ist pseudonym, nicht garantiert anonym. RevenueCat erhält Kauf-, Transaktions- und Berechtigungsdaten sowie die technischen Daten, die das SDK für Freischaltung und Wiederherstellung benötigt. Die App übermittelt weder eine E-Mail-Adresse noch Kalkulations-, Kunden- oder Betriebsinhalte an RevenueCat. Den zuletzt bekannten Tarif speichert die Store-Anbindung lokal auf dem Gerät.',
            'Käufe laufen über den Apple App Store oder Google Play. Apple oder Google verarbeiten die Kauf- und Transaktionsdaten nach ihren eigenen Datenschutzhinweisen. Die Prüfung kann auch bei Free-Nutzern und ohne aktives Abonnement stattfinden. Sie ist keine Anmeldung. Es gibt keinen E-Mail-Login, keinen Login-Zähler und keine E-Mail-zu-Lizenz-Zuordnung auf einem Server von OfflineHandwerk.',
            'Zweck der Lizenzprüfung ist die Bereitstellung gekaufter Funktionen. Soweit diese Verarbeitung dafür erforderlich ist, ist Rechtsgrundlage Art. 6 Abs. 1 lit. b DSGVO. Ohne diese Prüfung können gekaufte Funktionen nicht freigeschaltet werden. Eine App ohne Store-Anbindung nutzt diese Verarbeitung nicht. Art. 6 Abs. 1 lit. b DSGVO deckt keine Werbeprofile ab; solche Profile erstellen wir nicht.',
          ],
        },
        {
          title: 'Empfänger und Übermittlungen in Drittländer',
          paragraphs: [
            'Bei aktiver Store-Anbindung sind Empfänger der Kaufdaten Apple oder Google und Empfänger der Lizenzdaten RevenueCat, Inc. in den USA. Lizenzdaten können in den USA verarbeitet werden. Für diese Übermittlung sehen die veröffentlichten Vertragsbedingungen von RevenueCat EU-Standardvertragsklauseln vor.',
            'Wenn du Teilen, Drucken oder E-Mail wählst, erhält die von dir ausgewählte App, der Mail-Anbieter oder Drucker die lokal erzeugte PDF. Wir leiten diese Datei nicht über unsere Server. Eine E-Mail an dein Büro oder an eine Kundenadresse hängt die PDF in der von dir gestarteten Mail an diese Adresse.',
          ],
        },
        {
          title: 'Support per E-Mail',
          paragraphs: [
            'Die Funktion zum Melden eines Problems öffnet dein E-Mail-Programm mit einer Nachricht an info@offlinehandwerk.de. Die Nachricht enthält App-Version, Build, Betriebssystem, Gerätemodell, Tarif und deine Beschreibung. Die App sendet sie nicht selbst und hängt keine Kalkulations- oder Kundendaten und keine Store-Kennungen an. Du prüfst und sendest die Nachricht selbst.',
            'Wenn du die E-Mail sendest, erhalten wir deine Absenderadresse, den Inhalt und Dateien, die du selbst anhängst, um dein Anliegen zu bearbeiten. Für erforderliche vertragsbezogene Anfragen ist Rechtsgrundlage Art. 6 Abs. 1 lit. b DSGVO, sonst Art. 6 Abs. 1 lit. f DSGVO mit dem berechtigten Interesse, Anfragen zu beantworten und Fehler zu beheben. Das Senden einer E-Mail ist keine Einwilligung. Support ist freiwillig. Ohne erreichbare Kontaktadresse können wir nicht antworten.',
          ],
        },
        {
          title: 'Speicherdauer',
          paragraphs: [
            'Lokale Datensätze bleiben, bis du sie löschst oder die App zurücksetzt. Das Zurücksetzen löscht die lokale Datenbank. Archivieren ist kein Löschen. Bei einer normalen Deinstallation wird die lokale Datenbank entfernt. Betriebssystem-Sicherungen können Kopien behalten. Wir können die lokale Datenbank weder aus der Ferne abrufen oder löschen noch verlorene lokale Inhalte wiederherstellen.',
            'PDFs und JSON-Sicherungen entstehen lokal. Die JSON-Sicherung ist unverschlüsselt und bleibt auf dem Gerät, bis du im Teilen-Dialog ein Ziel wählst. Die App lädt Sicherungen nicht hoch. Exportierte Dateien bleiben am gewählten Ziel, bis du sie dort löschst. Das Zurücksetzen der App löscht diese Kopien nicht und löscht auch keine Support-Mails und keine Kaufdaten bei Apple, Google oder RevenueCat.',
            'Kauf- und Berechtigungsdaten werden benötigt, solange gekaufte Funktionen bereitgestellt und Käufe wiederhergestellt werden. Apple, Google und RevenueCat bestimmen die Aufbewahrung der Transaktionsdaten, die sie selbst speichern. Support-Nachrichten speichern wir, solange wir sie zur Bearbeitung der Anfrage brauchen, und darüber hinaus nur, wenn eine gesetzliche Aufbewahrungspflicht das verlangt.',
          ],
        },
        {
          title: 'Deine Rechte',
          paragraphs: [
            'Soweit wir personenbezogene Daten verarbeiten, hast du unter den gesetzlichen Voraussetzungen das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18) und Datenübertragbarkeit (Art. 20). Einer Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO kannst du unter den Voraussetzungen von Art. 21 DSGVO widersprechen. Eine Einwilligung kannst du nach Art. 7 Abs. 3 DSGVO mit Wirkung für die Zukunft widerrufen.',
            'Du kannst dich nach Art. 77 DSGVO beschweren. Zuständig ist: Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz. Anfragen an uns richtest du an info@offlinehandwerk.de oder an die oben genannte Telefonnummer.',
            'Die lokale Nutzung verlangt keine Registrierung und keine Übermittlung deiner Arbeitsdaten an uns. Für eine Antwort im Support brauchen wir eine erreichbare Absenderadresse. Gekaufte Funktionen lassen sich ohne die Lizenzprüfung nicht freischalten.',
          ],
        },
      ],
    },
    website: {
      title: 'Datenschutz auf dieser Website',
      intro:
        'Diese Informationen gelten nur für die statische Marketing-Website von OfflineHandwerk. Sie ist keine App und speichert keine Kalkulationsdaten. Die App hat eine eigene Datenschutzerklärung.',
      updated: 'Stand: Oktober 2026',
      sections: [
        {
          title: 'Verantwortlicher',
          paragraphs: [
            'Jan Siems, Hintergasse 28, 67308 Bubenheim, Deutschland. Telefon: [+49 176 84328001](tel:+4917684328001). E-Mail: info@offlinehandwerk.de.',
            'Ein Datenschutzbeauftragter ist nicht erforderlich.',
          ],
        },
        {
          title: 'Welche Daten verarbeitet werden',
          paragraphs: [
            'Die Website ist eine statische Informationsseite ohne Anmeldung, Kontaktformular und Newsletter. Sie setzt keine Cookies, speichert nichts in localStorage und enthält keine Analyse- oder Tracking-Dienste, keine externen Schriftarten, keine CDNs und keine eingebetteten Medien. Es werden keine Kalkulations-, Kunden- oder Betriebsdaten erfasst. Die Website erstellt keine Nutzungs- oder Werbeprofile und trifft keine automatisierte Entscheidung einschließlich Profiling im Sinne von Art. 22 DSGVO.',
            'Beim Abruf erhält das Hosting die technisch erforderlichen Verbindungsdaten, insbesondere deine IP-Adresse und die angeforderte Seite, um die Dateien auszuliefern. GitHub Pages speichert Server-Logs einschließlich der IP-Adresse für die Sicherheit der Website.',
          ],
        },
        {
          title: 'Rechtsgrundlagen',
          paragraphs: [
            'Die Bereitstellung der Website stützt sich auf Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse ist der sichere und zuverlässige Betrieb dieser Informationsseite. Die Verbindungsdaten sind erforderlich, damit die Dateien ausgeliefert werden können. Eine Registrierung ist nicht erforderlich.',
            'Wenn du uns an info@offlinehandwerk.de schreibst, öffnet der E-Mail-Link nur dein E-Mail-Programm und sendet nichts von selbst. Die Website hängt keine App-, Geräte-, Kunden- oder Kalkulationsdaten an. Schickst du die Nachricht, erhalten wir deine Absenderadresse, den Inhalt und Dateien, die du anhängst, um die Anfrage zu beantworten. Für erforderliche vertragsbezogene Anfragen gilt Art. 6 Abs. 1 lit. b DSGVO, sonst Art. 6 Abs. 1 lit. f DSGVO mit dem berechtigten Interesse an der Antwort. Das Senden ist keine Einwilligung. Ohne erreichbare Absenderadresse können wir nicht antworten.',
          ],
        },
        {
          title: 'Empfänger und Übermittlung in ein Drittland',
          paragraphs: [
            'Die Website wird über GitHub Pages von GitHub, Inc. bereitgestellt. GitHub, Inc. ist Empfänger der Server-Logs, einschließlich der IP-Adressen, und verarbeitet sie für Auslieferung und Sicherheit.',
            'Dabei kann eine Übermittlung in die USA stattfinden. Diese Übermittlung stützt sich auf das EU-US Data Privacy Framework.',
            'Auf dieser Website ist RevenueCat nicht eingebunden. Inhalte anderer Anbieter werden hier nicht geladen. Wenn du einen externen Link öffnest, gelten die Regeln der Zielseite.',
          ],
        },
        {
          title: 'Speicherdauer',
          paragraphs: [
            'Wir betreiben auf dieser Website keine Besucherdatenbank. Die Server-Logs, einschließlich der IP-Adressen, speichert GitHub, Inc. für Betrieb und Sicherheit von GitHub Pages.',
            'Support-Nachrichten speichern wir, solange wir sie zur Bearbeitung der Anfrage brauchen, und darüber hinaus nur, wenn eine gesetzliche Aufbewahrungspflicht das verlangt.',
          ],
        },
        {
          title: 'Deine Rechte',
          paragraphs: [
            'Soweit wir personenbezogene Daten verarbeiten, hast du unter den gesetzlichen Voraussetzungen das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18) und Datenübertragbarkeit (Art. 20). Einer Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO kannst du unter den Voraussetzungen von Art. 21 DSGVO widersprechen. Eine Einwilligung kannst du nach Art. 7 Abs. 3 DSGVO mit Wirkung für die Zukunft widerrufen.',
            'Du kannst dich nach Art. 77 DSGVO beschweren. Zuständig ist: Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz. Anfragen an uns richtest du an info@offlinehandwerk.de oder an die oben genannte Telefonnummer.',
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
    app: {
      title: 'App privacy',
      intro:
        'These details apply to the OfflineHandwerk app on Android and iOS. The marketing website has its own privacy notice. Purchase details apply only when the mobile store integration is active.',
      updated: 'As of: October 2026',
      sections: [
        {
          title: 'Controller',
          paragraphs: [
            'Jan Siems, Hintergasse 28, 67308 Bubenheim, Germany. Phone: [+49 176 84328001](tel:+4917684328001). Email: info@offlinehandwerk.de.',
            'A data protection officer is not required.',
          ],
        },
        {
          title: 'What data is processed',
          paragraphs: [
            'Calculations, customer and business data, contact details, line items, internal notes, employee and catalog records, business profile, logo and settings are stored in the local SQLite database on your device. We do not collect these contents, transfer them to our servers or store them there. There is no sign-in with us and no synchronization of these contents through our servers.',
            'Your business is responsible for the lawful processing of the customer and employee data you enter, including its legal basis, information duties, access rights and retention. We cannot access those local records. For them, we are neither the controller nor a processor. This does not apply to messages you send us or to purchase and license data.',
            'When you choose an image as your business logo, the app uses only the photo you select from your library and stores it locally for your PDFs. Camera and microphone access are not enabled in the app configuration. You import a backup only by selecting a file yourself.',
            'The app contains no analytics or crash-reporting SDK. We do not track your calculations or work steps and do not create usage or advertising profiles. There is no automated decision-making, including profiling, within the meaning of Art. 22 GDPR.',
          ],
        },
        {
          title: 'Purchases and license verification',
          paragraphs: [
            'The mobile store integration initializes RevenueCat with an API key only, without a custom app user ID and without an email attribute. RevenueCat generates an App User ID. This identifier is pseudonymous, not guaranteed to be anonymous. RevenueCat receives purchase, transaction and entitlement data and the technical data the SDK needs to unlock and restore purchases. The app sends neither an email address nor calculation, customer or business contents to RevenueCat. The store integration stores the last known plan locally on the device.',
            'Purchases run through the Apple App Store or Google Play. Apple or Google process the purchase and transaction data under their own privacy notices. The check can also run for Free users and without an active subscription. It is not a sign-in. There is no email sign-in, no sign-in counter and no email-to-license mapping on an OfflineHandwerk server.',
            'The purpose of license verification is to provide purchased features. Where this processing is necessary for that purpose, the legal basis is Art. 6(1)(b) GDPR. Purchased features cannot be unlocked without this check. An app without the store integration does not use this processing. Art. 6(1)(b) GDPR does not cover advertising profiles; we do not create such profiles.',
          ],
        },
        {
          title: 'Recipients and transfers to third countries',
          paragraphs: [
            'When the store integration is active, Apple or Google receive the purchase data and RevenueCat, Inc. in the United States receives the license data. License data may be processed in the United States. The published RevenueCat terms provide EU Standard Contractual Clauses for this transfer.',
            'When you choose Share, Print or email, the app, mail provider or printer you select receives the locally created PDF. We do not relay this file through our servers. An email to your office or to a customer address attaches the PDF, in the mail you start, to that address.',
          ],
        },
        {
          title: 'Support by email',
          paragraphs: [
            'The problem-reporting feature opens your email app with a message to info@offlinehandwerk.de. The message contains the app version, build, operating system, device model, plan and your description. The app does not send it itself and does not attach calculation or customer data or store identifiers. You review and send the message yourself.',
            'If you send the email, we receive your sender address, the message and files you attach yourself, so that we can handle your request. The legal basis is Art. 6(1)(b) GDPR for necessary contract-related requests, otherwise Art. 6(1)(f) GDPR with the legitimate interest in answering requests and fixing faults. Sending an email is not consent. Support is optional. Without a reachable contact address we cannot reply.',
          ],
        },
        {
          title: 'Storage period',
          paragraphs: [
            'Local records remain until you delete them or reset the app. Resetting deletes the local database. Archiving is not deletion. Normal uninstallation removes the local database. Operating-system backups may keep copies. We cannot remotely retrieve or delete the local database or recover lost local contents.',
            'PDFs and JSON backups are created locally. The JSON backup is unencrypted and stays on the device until you choose a destination in the share dialog. The app does not upload backups. Exported files remain at the chosen destination until you delete them there. Resetting the app does not delete those copies, support emails, or purchase data held by Apple, Google or RevenueCat.',
            'Purchase and entitlement data are needed while purchased features are provided and purchases can be restored. Apple, Google and RevenueCat determine retention of the transaction data they store themselves. We keep support messages for as long as we need them to handle the request, and longer only where a statutory retention duty requires it.',
          ],
        },
        {
          title: 'Your rights',
          paragraphs: [
            'Where we process personal data, you have, subject to the statutory conditions, the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction (Art. 18) and portability (Art. 20). You may object, under the conditions of Art. 21 GDPR, to processing based on Art. 6(1)(f) GDPR. You may withdraw consent under Art. 7(3) GDPR with effect for the future.',
            'You may lodge a complaint under Art. 77 GDPR. The competent authority is: Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz. Send requests to us at info@offlinehandwerk.de or to the phone number above.',
            'Local use requires no registration and no transmission of your work data to us. A reply to support requires a reachable sender address. Purchased features cannot be unlocked without the license check.',
          ],
        },
      ],
    },
    website: {
      title: 'Website privacy',
      intro:
        'These details apply only to the static OfflineHandwerk marketing website. It is not the app and does not store calculation data. The app has its own privacy notice.',
      updated: 'As of: October 2026',
      sections: [
        {
          title: 'Controller',
          paragraphs: [
            'Jan Siems, Hintergasse 28, 67308 Bubenheim, Germany. Phone: [+49 176 84328001](tel:+4917684328001). Email: info@offlinehandwerk.de.',
            'A data protection officer is not required.',
          ],
        },
        {
          title: 'What data is processed',
          paragraphs: [
            'The website is a static information page without sign-in, a contact form or a newsletter. It sets no cookies, stores nothing in localStorage, and includes no analytics or tracking services, no external fonts, no CDNs and no embedded media. It collects no calculation, customer or business data. The website creates no usage or advertising profiles and makes no automated decision, including profiling, within the meaning of Art. 22 GDPR.',
            'When you visit, the hosting receives the connection data required to deliver the files, in particular your IP address and the requested page. GitHub Pages stores server logs, including the IP address, for the security of the website.',
          ],
        },
        {
          title: 'Legal bases',
          paragraphs: [
            'Providing the website is based on Art. 6(1)(f) GDPR. The legitimate interest is the secure and reliable operation of this information page. The connection data are required so the files can be delivered. Registration is not required.',
            'If you write to info@offlinehandwerk.de, the email link only opens your email app and does not send anything by itself. The website attaches no app, device, customer or calculation data. If you send the message, we receive your sender address, the contents and files you attach, in order to answer the request. Art. 6(1)(b) GDPR applies to necessary contract-related requests, otherwise Art. 6(1)(f) GDPR with the legitimate interest in replying. Sending is not consent. Without a reachable sender address we cannot reply.',
          ],
        },
        {
          title: 'Recipients and transfer to a third country',
          paragraphs: [
            'The website is provided through GitHub Pages by GitHub, Inc. GitHub, Inc. is the recipient of the server logs, including IP addresses, and processes them for delivery and security.',
            'This can involve a transfer to the United States. That transfer relies on the EU-US Data Privacy Framework.',
            'RevenueCat is not integrated on this website. Content from other providers is not loaded here. If you open an external link, the destination rules apply.',
          ],
        },
        {
          title: 'Storage period',
          paragraphs: [
            'We do not operate a visitor database on this website. GitHub, Inc. stores the server logs, including IP addresses, for the operation and security of GitHub Pages.',
            'We keep support messages for as long as we need them to handle the request, and longer only where a statutory retention duty requires it.',
          ],
        },
        {
          title: 'Your rights',
          paragraphs: [
            'Where we process personal data, you have, subject to the statutory conditions, the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction (Art. 18) and portability (Art. 20). You may object, under the conditions of Art. 21 GDPR, to processing based on Art. 6(1)(f) GDPR. You may withdraw consent under Art. 7(3) GDPR with effect for the future.',
            'You may lodge a complaint under Art. 77 GDPR. The competent authority is: Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz. Send requests to us at info@offlinehandwerk.de or to the phone number above.',
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
