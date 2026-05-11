# 🏗️ MOKALO.HR - ARHITEKTONSKA PRAVILA I STATUS PROJEKTA

**Datum:** 07.05.2026.
**Dokument kreirao:** Voditelj projekta / Senior Konzultant
**Status sustava:** 🟢 STABILNO (Rollback na v2.9.0 - Commit: `de4716a`)

---

## 1. 🛑 INCIDENT I NAUČENA LEKCIJA (07.05.2026.)
Pokušaj implementacije korisničkog sučelja ("ePodrum") unutar Astro frontenda uzrokovao je pad sustava, sudaranje routinga i pucanje stranica. 

**Zaključak:** Narušen je osnovni princip *Headless* arhitekture. Guranje CMS logike u frontend stvara "špageti" kod i tehnički dug. Situacija je riješena `git reset --hard` komandom i povratkom na stabilnu verziju.

---

## 2. 📜 ZLATNA PRAVILA ARHITEKTURE (Za sve trenutne i buduće developere)
Svi developeri na projektu **MORAJU** se strogo pridržavati sljedećih pravila. Svako odstupanje zahtijeva prethodno odobrenje voditelja projekta.

### PRAVILO #1: Strogo razdvajanje (Separation of Concerns)
* **ASTRO (Frontend):** Služi ISKLJUČIVO za čitanje podataka (SSR) i brzi prikaz. Nema administratorskih panela, nema `login` ruta, nema `middleware` blokada za admine.
* **PAYLOAD (Backend/CMS):** Služi ISKLJUČIVO za unos, izmjenu i upravljanje podacima. 

### PRAVILO #2: Zaštita QR Kodova (Prioritet P0)
* Isprintane etikete s QR kodovima već su na bocama.
* Polje `slug` u Payload CMS-u **NE SMIJE** se mijenjati za postojeća vina. Bilo kakvo brisanje ili modifikacija `slug` polja u bazi trajno uništava fizičke etikete na tržištu.
* `slug` mora biti postavljen na `readOnly` u konfiguraciji.

### PRAVILO #3: Jednostavnost za naručitelja ("ePodrum")
* Korisnički otpor prema unosu podataka rješava se **unutar Payloada**, a ne izradom novih aplikacija.
* Koristiti ugrađene Payload funkcionalnosti (`tabs`, `groups`, `condition`, `sidebar`) kako bi se sakrila nepotrebna polja i sučelje učinilo maksimalno jednostavnim za Borisa.

---

## 3. 📝 ZADACI ZA SUTRA (Novi Sprint)

Kada nastavimo s radom, ovo su jedini dozvoljeni koraci. Nema dodavanja novih "featurea" dok ovo nije 100% gotovo.

### A. Payload CMS (Fokus na UX)
1.  **ePodrum Tab:** U `src/collections/Vina.ts` kreirati PRVI tab pod nazivom "ePodrum (Brzi unos)".
2.  **Sadržaj Taba:** Unutar tog taba Boris smije vidjeti SAMO 3 polja:
    * `naziv` (Tekst)
    * `godiste` (Select: 2024, 2025, 2026)
    * `objavljeno` (Checkbox, smješten u sidebar za mobilni pristup)
3.  **Skrivanje viška:** Slike, laboratorijske analize i meta-tagovi moraju biti premješteni u drugi tab ("Stručna Analiza") koji Boris ne mora otvarati.
4.  **Svijetla tema:** U `payload.config.ts` postaviti temu na `light` (ili dodati custom CSS) kako bi Borisu sučelje bilo jasno vidljivo vani na suncu.

### B. Frontend i Podaci
1.  Vratiti `trailingSlash: 'never'` u `astro.config.mjs` (obrisano rollbackom).
2.  Pokrenuti `npm run seed:wines` na produkciji kako bi se unijela nova vina (NU Pošip, Basina, MONA).
3.  Uploadati stvarne fotografije boca kroz Payload CMS.

---
*Ovaj dokument služi kao obvezujuća arhitektonska specifikacija za projekt Olea Digitalis / Mokalo.hr e-etikete.*
