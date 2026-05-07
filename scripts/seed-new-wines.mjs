/**
 * Bulk Seed Script - 6 Novih Vina
 *
 * Pokreće se: npm run seed:wines
 * Zahtijeva: CMS_ADMIN_EMAIL i CMS_ADMIN_PASSWORD env varijable
 *
 * CMS_URL se može postaviti preko env var (default: https://cms.mokalo.hr)
 *
 * Vina su published, featured=false (ne gužvaju naslovnicu).
 */

const CMS_URL = process.env.CMS_URL || "https://cms.mokalo.hr";
const ADMIN_EMAIL = process.env.CMS_ADMIN_EMAIL || "";
const ADMIN_PASSWORD = process.env.CMS_ADMIN_PASSWORD || "";

const novaVina = [
  {
    hr: {
      naziv: "NU Pošip",
      category_title: "Elegantno bijelo",
      sort: "Pošip",
      karakter: "Svježe i aromatično bijelo vino s mediteranskim karakterom. Čista elegancija Korčule.",
      technicals: "Kontrolirana fermentacija u inoxu, odležavanje na finom talogu.",
      serving: { type: "Elegantno bijelo", temp: "10 - 12°C", glass: "Klasična vinska čaša" },
      pairings: [
        { icon: "fish", desc: "Škampi na buzaru, riblji carpaccio, lagane paste s morskim plodovima." }
      ],
      nutricija: { energija: "290 kJ / 69 kcal", ugljikohidrati: 0.8, seceri: 0.2 },
      analiza: { alkohol: 12.5, suhi_ekstrakt: 20.1, reducirajuci_seceri: 3.2, ukupna_kiselost: 5.1, ukupni_so2: 38 },
      ingredients: "Grožđe, Sulfiti",
      allergens: "Sulfiti",
    },
    en: {
      naziv: "NU Pošip",
      category_title: "Elegant White",
      sort: "Pošip",
      karakter: "Fresh and aromatic white wine with Mediterranean character. Pure elegance of Korčula.",
      technicals: "Controlled fermentation in stainless steel, aged on fine lees.",
      serving: { type: "Elegant White", temp: "10 - 12°C", glass: "Classic wine glass" },
      pairings: [
        { icon: "fish", desc: "Scampi buzara, fish carpaccio, light seafood pasta." }
      ],
      nutricija: { energija: "290 kJ / 69 kcal", ugljikohidrati: 0.8, seceri: 0.2 },
      analiza: { alkohol: 12.5, suhi_ekstrakt: 20.1, reducirajuci_seceri: 3.2, ukupna_kiselost: 5.1, ukupni_so2: 38 },
      ingredients: "Grapes, Sulfites",
      allergens: "Sulfites",
    },
    slug: "nu-posip",
    year: 2025,
    aromas: { hr: ["Bijelo cvijeće", "agrumi", "kadulja", "mineralnost"], en: ["White flowers", "citrus", "sage", "minerality"] },
    profile: { fruitiness: 65, acidity: 80, floral: 75, spices: 30, tannins: 10 },
    visual_theme: { theme_type: "Rukatac-Blue" },
  },
  {
    hr: {
      naziv: "NU Plavac Mali",
      category_title: "Uravnoteženo crno",
      sort: "Plavac Mali",
      karakter: "Moderni izričaj plavca malog - pristupačan, voćan, s mekim taninima.",
      technicals: "Kratka maceracija, fermentacija na kontroliranoj temperaturi, odležavanje u inoxu.",
      serving: { type: "Uravnoteženo crno", temp: "16 - 18°C", glass: "Standardna vinska čaša" },
      pairings: [
        { icon: "meat", desc: "Roštilj, pizza s pršutom, tjestenina s mesnim umacima." }
      ],
      nutricija: { energija: "340 kJ / 81 kcal", ugljikohidrati: 1.0, seceri: 0.4 },
      analiza: { alkohol: 13.5, suhi_ekstrakt: 26.3, reducirajuci_seceri: 2.8, ukupna_kiselost: 5.0, ukupni_so2: 35 },
      ingredients: "Grožđe, Sulfiti",
      allergens: "Sulfiti",
    },
    en: {
      naziv: "NU Plavac Mali",
      category_title: "Balanced Red",
      sort: "Plavac Mali",
      karakter: "Modern expression of Plavac Mali - approachable, fruity, with soft tannins.",
      technicals: "Short maceration, temperature-controlled fermentation, stainless steel aging.",
      serving: { type: "Balanced Red", temp: "16 - 18°C", glass: "Standard wine glass" },
      pairings: [
        { icon: "meat", desc: "Grilled meats, pizza with prosciutto, pasta with meat sauces." }
      ],
      nutricija: { energija: "340 kJ / 81 kcal", ugljikohidrati: 1.0, seceri: 0.4 },
      analiza: { alkohol: 13.5, suhi_ekstrakt: 26.3, reducirajuci_seceri: 2.8, ukupna_kiselost: 5.0, ukupni_so2: 35 },
      ingredients: "Grapes, Sulfites",
      allergens: "Sulfites",
    },
    slug: "nu-plavac-mali",
    year: 2025,
    aromas: { hr: ["Crna višnja", "mediteransko bilje", "borovina", "vanilija"], en: ["Black cherry", "Mediterranean herbs", "pine", "vanilla"] },
    profile: { fruitiness: 75, acidity: 60, floral: 35, spices: 50, tannins: 55 },
    visual_theme: { theme_type: "Marica-Red" },
  },
  {
    hr: {
      naziv: "Basina Rukatac",
      category_title: "Struktuirano bijelo",
      sort: "Rukatac (Maraština)",
      karakter: "Autentični rukatac s Pelješca - kompleksan, s karakterom teroara i tradicije.",
      technicals: "Selekcija grožđa s najboljih položaja, spontana fermentacija, odležavanje u inoxu.",
      serving: { type: "Struktuirano bijelo", temp: "10 - 12°C", glass: "Šira vinska čaša" },
      pairings: [
        { icon: "fish", desc: "Brudet, rižoto s rakovima, kozice na gradele." }
      ],
      nutricija: { energija: "300 kJ / 72 kcal", ugljikohidrati: 0.9, seceri: 0.3 },
      analiza: { alkohol: 12.8, suhi_ekstrakt: 21.5, reducirajuci_seceri: 3.5, ukupna_kiselost: 4.9, ukupni_so2: 40 },
      ingredients: "Grožđe, Sulfiti",
      allergens: "Sulfiti",
    },
    en: {
      naziv: "Basina Rukatac",
      category_title: "Structured White",
      sort: "Rukatac (Maraština)",
      karakter: "Authentic Rukatac from Pelješac - complex, with terroir character and tradition.",
      technicals: "Grape selection from best positions, spontaneous fermentation, stainless steel aging.",
      serving: { type: "Structured White", temp: "10 - 12°C", glass: "Wide wine glass" },
      pairings: [
        { icon: "fish", desc: "Fish stew (brudet), crab risotto, grilled prawns." }
      ],
      nutricija: { energija: "300 kJ / 72 kcal", ugljikohidrati: 0.9, seceri: 0.3 },
      analiza: { alkohol: 12.8, suhi_ekstrakt: 21.5, reducirajuci_seceri: 3.5, ukupna_kiselost: 4.9, ukupni_so2: 40 },
      ingredients: "Grapes, Sulfites",
      allergens: "Sulfites",
    },
    slug: "basina-rukatac",
    year: 2025,
    aromas: { hr: ["Narančin cvijet", "bijelo voće", "badem", "kamen"], en: ["Orange blossom", "white fruit", "almond", "stone"] },
    profile: { fruitiness: 60, acidity: 75, floral: 85, spices: 25, tannins: 15 },
    visual_theme: { theme_type: "Rukatac-Blue" },
  },
  {
    hr: {
      naziv: "Basina Plavac",
      category_title: "Premium crno",
      sort: "Plavac Mali",
      karakter: "Dubok i kompleksan plavac s karakterom pelješkog krša. Vino za strpljive ljubitelje.",
      technicals: "Duga maceracija, fermentacija u otvorenim bacama, odležavanje u hrastovim bačvama.",
      serving: { type: "Premium crno", temp: "16 - 18°C", glass: "Velika bordoska čaša" },
      pairings: [
        { icon: "pot", desc: "Dalmatinska pašticada, janjetina s ražnja, zreli sirevi." }
      ],
      nutricija: { energija: "355 kJ / 85 kcal", ugljikohidrati: 1.1, seceri: 0.5 },
      analiza: { alkohol: 14.2, suhi_ekstrakt: 28.7, reducirajuci_seceri: 2.5, ukupna_kiselost: 5.2, ukupni_so2: 42 },
      ingredients: "Grožđe, Sulfiti",
      allergens: "Sulfiti",
    },
    en: {
      naziv: "Basina Plavac",
      category_title: "Premium Red",
      sort: "Plavac Mali",
      karakter: "Deep and complex Plavac with the character of Pelješac limestone. A wine for patient connoisseurs.",
      technicals: "Long maceration, open vat fermentation, aging in oak barrels.",
      serving: { type: "Premium Red", temp: "16 - 18°C", glass: "Large Bordeaux glass" },
      pairings: [
        { icon: "pot", desc: "Dalmatian pašticada, roast lamb, aged cheeses." }
      ],
      nutricija: { energija: "355 kJ / 85 kcal", ugljikohidrati: 1.1, seceri: 0.5 },
      analiza: { alkohol: 14.2, suhi_ekstrakt: 28.7, reducirajuci_seceri: 2.5, ukupna_kiselost: 5.2, ukupni_so2: 42 },
      ingredients: "Grapes, Sulfites",
      allergens: "Sulfites",
    },
    slug: "basina-plavac",
    year: 2025,
    aromas: { hr: ["Suhe šljive", "tamna čokolada", "duhan", "hrast"], en: ["Dried plums", "dark chocolate", "tobacco", "oak"] },
    profile: { fruitiness: 70, acidity: 65, floral: 30, spices: 70, tannins: 80 },
    visual_theme: { theme_type: "Marica-Red" },
  },
  {
    hr: {
      naziv: "MONA Rosé",
      category_title: "Svježi rosé",
      sort: "Plavac Mali (rosé)",
      karakter: "Lagan, svjež i pitak rosé - savršen za tople ljetne dane na Pelješcu.",
      technicals: "Kratka maceracija s pokožicom, hladna fermentacija, očuvanje svježine.",
      serving: { type: "Svježi rosé", temp: "8 - 10°C", glass: "Univerzalna vinska čaša" },
      pairings: [
        { icon: "salad", desc: "Caprese salata, lagane ljetne salate, pršut i sir." }
      ],
      nutricija: { energija: "280 kJ / 67 kcal", ugljikohidrati: 0.7, seceri: 0.2 },
      analiza: { alkohol: 12.0, suhi_ekstrakt: 18.3, reducirajuci_seceri: 3.0, ukupna_kiselost: 5.5, ukupni_so2: 36 },
      ingredients: "Grožđe, Sulfiti",
      allergens: "Sulfiti",
    },
    en: {
      naziv: "MONA Rosé",
      category_title: "Fresh Rosé",
      sort: "Plavac Mali (rosé)",
      karakter: "Light, fresh and easy-drinking rosé - perfect for warm summer days on Pelješac.",
      technicals: "Short skin maceration, cold fermentation, freshness preservation.",
      serving: { type: "Fresh Rosé", temp: "8 - 10°C", glass: "Universal wine glass" },
      pairings: [
        { icon: "salad", desc: "Caprese salad, light summer salads, prosciutto and cheese." }
      ],
      nutricija: { energija: "280 kJ / 67 kcal", ugljikohidrati: 0.7, seceri: 0.2 },
      analiza: { alkohol: 12.0, suhi_ekstrakt: 18.3, reducirajuci_seceri: 3.0, ukupna_kiselost: 5.5, ukupni_so2: 36 },
      ingredients: "Grapes, Sulfites",
      allergens: "Sulfites",
    },
    slug: "mona-rose",
    year: 2025,
    aromas: { hr: ["Jagoda", "malina", "ružin cvijet", "citrus"], en: ["Strawberry", "raspberry", "rose flower", "citrus"] },
    profile: { fruitiness: 80, acidity: 75, floral: 60, spices: 20, tannins: 10 },
    visual_theme: { theme_type: "Amare-Gold" },
  },
  {
    hr: {
      naziv: "MONA Tribidrag",
      category_title: "Autohtono bijelo",
      sort: "Tribidrag (Crljenak)",
      karakter: "Rijetki autohtoni sortitet - bogat, egzotičan, s dugom tradicijom na Pelješcu.",
      technicals: "Ručna berba, pažljiva selekcija, fermentacija na kontroliranoj temperaturi.",
      serving: { type: "Autohtono bijelo", temp: "10 - 12°C", glass: "Šira burgundska čaša" },
      pairings: [
        { icon: "cheese", desc: "Paški sir, ljetni sirevi, mediteranski meze." }
      ],
      nutricija: { energija: "305 kJ / 73 kcal", ugljikohidrati: 0.9, seceri: 0.3 },
      analiza: { alkohol: 13.0, suhi_ekstrakt: 22.0, reducirajuci_seceri: 3.1, ukupna_kiselost: 4.8, ukupni_so2: 39 },
      ingredients: "Grožđe, Sulfiti",
      allergens: "Sulfiti",
    },
    en: {
      naziv: "MONA Tribidrag",
      category_title: "Autochthonous White",
      sort: "Tribidrag (Crljenak)",
      karakter: "Rare autochthonous varietal - rich, exotic, with a long tradition on Pelješac.",
      technicals: "Hand harvested, careful selection, temperature-controlled fermentation.",
      serving: { type: "Autochthonous White", temp: "10 - 12°C", glass: "Wide Burgundy glass" },
      pairings: [
        { icon: "cheese", desc: "Pag Island cheese, summer cheeses, Mediterranean mezze." }
      ],
      nutricija: { energija: "305 kJ / 73 kcal", ugljikohidrati: 0.9, seceri: 0.3 },
      analiza: { alkohol: 13.0, suhi_ekstrakt: 22.0, reducirajuci_seceri: 3.1, ukupna_kiselost: 4.8, ukupni_so2: 39 },
      ingredients: "Grapes, Sulfites",
      allergens: "Sulfites",
    },
    slug: "mona-tribidrag",
    year: 2025,
    aromas: { hr: ["Tropsko voće", "breskva", "med", "začinske note"], en: ["Tropical fruit", "peach", "honey", "spicy notes"] },
    profile: { fruitiness: 75, acidity: 65, floral: 55, spices: 45, tannins: 20 },
    visual_theme: { theme_type: "Rukatac-Blue" },
  },
];

async function login() {
  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    console.error("❌ Nedostaju CMS_ADMIN_EMAIL i CMS_ADMIN_PASSWORD env varijable!");
    console.error("   Postavi ih prije pokretanja:");
    console.error("   export CMS_ADMIN_EMAIL='admin@mokalo.hr'");
    console.error("   export CMS_ADMIN_PASSWORD='tvoja-lozinka'");
    process.exit(1);
  }

  const res = await fetch(`${CMS_URL}/api/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: ADMIN_EMAIL, password: ADMIN_PASSWORD }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error(`❌ Login failed: ${res.status} ${res.statusText} - ${err}`);
    process.exit(1);
  }

  const data = await res.json();
  return data.token;
}

async function createWine(token, wineData, locale) {
  const { hr, en, slug, year, aromas, profile, visual_theme } = wineData;
  const data = locale === "hr" ? hr : en;

  const body = {
    naziv: data.naziv,
    slug,
    year,
    category_title: data.category_title,
    sort: data.sort,
    aromas: (locale === "hr" ? aromas.hr : aromas.en).map((a) => ({ aroma: a })),
    karakter: data.karakter,
    technicals: data.technicals,
    profile,
    serving: data.serving,
    pairings: data.pairings,
    visual_theme,
    nutricija: data.nutricija,
    analiza: data.analiza,
    ingredients: data.ingredients,
    allergens: data.allergens,
    featured: false,
    _status: "published",
  };

  const res = await fetch(`${CMS_URL}/api/vina?locale=${locale}&depth=1`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`HTTP ${res.status} - ${err}`);
  }

  return res.json();
}

async function main() {
  console.log("🍷 Bulk Seed - 6 Novih Vina");
  console.log("═".repeat(40));
  console.log(`CMS: ${CMS_URL}`);
  console.log(`Vina: ${novaVina.length} (HR + EN)`);
  console.log(`Status: Published | Featured: false\n`);

  const token = await login();
  console.log("✅ Prijavljen na CMS\n");

  let success = 0;
  let failed = 0;

  for (const vino of novaVina) {
    console.log(`➡️  ${vino.slug}`);

    for (const locale of ["hr", "en"]) {
      try {
        const result = await createWine(token, vino, locale);
        console.log(`   ✅ ${locale.toUpperCase()} → ID: ${result.doc.id}`);
        success++;
      } catch (err) {
        console.error(`   ❌ ${locale.toUpperCase()} → ${err.message}`);
        failed++;
      }
    }
    console.log("");
  }

  console.log("═".repeat(40));
  console.log(`✅ Gotovo: ${success} uspješno, ${failed} grešaka`);
}

main();
