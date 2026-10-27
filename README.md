# XKCD-Adgangskoder

**Prøv den på [adgangskoder.app](https://adgangskoder.app)**

En lille hjemmeside der laver adgangskoder som er lette at huske og svære at gætte. For eksempel `Strand!Rabat!Krabbe!Passiv28`.

## Hvad er det?

De fleste af os er blevet opdraget til at tro at en god adgangskode ser ud som `Tr0ub4dor&3`. Den er svær at huske for mennesker og overraskende let at gætte for computere. Tegneserien [XKCD](https://xkcd.com/936/) pegede for mange år siden på et bedre alternativ: Tag fire tilfældige, almindelige ord og sæt dem sammen. Resultatet er langt, og derfor svært at knække. Til gengæld kan man faktisk huske det, fordi hjernen er ganske god til at lave en lille historie ud af fire ord.

Denne side gør præcis det - på dansk. Og fordi mange hjemmesider stadig insisterer på store bogstaver, tal og specialtegn, får du dem med i købet.

## Sådan virker det

1. Når du åbner siden, får du fem forslag. Hvert forslag består af fire tilfældige danske ord med stort begyndelsesbogstav, et specialtegn mellem ordene og to tal til sidst.
2. Hvis en side kun tillader korte adgangskoder, kan du bruge slideren øverst til at sætte en maksimal længde (fra 10 til 41 tegn). Rører du den ikke, er der ingen grænse.
3. Kan du ikke lide nogen af forslagene, så tryk "Lav fem nye".
4. Tryk "Kopiér" ud for det forslag du vil bruge, og sæt det ind der hvor du skal bruge det.

Der bruges ingen æ, ø eller å, og kun specialtegn der sidder på et almindeligt dansk tastatur og som stort set alle hjemmesider accepterer. Så slipper du for at opdage at din nye adgangskode ikke kan skrives på en lånt computer.

Adgangskoderne bliver lavet direkte i din egen browser. Siden gemmer dem ikke og sender dem ingen steder hen.

## Det tekniske

- Ren HTML, CSS og JavaScript uden afhængigheder eller byggetrin. Åbn `index.html`, så kører den.
- Tilfældigheden kommer fra browserens `crypto.getRandomValues` (uden modulo-bias).
- Med fire ord fra en liste på 7.776, ét af 12 specialtegn og to cifre giver en adgangskode uden længdegrænse ca. 62 bits entropi. Jo lavere maksimal længde, jo færre og kortere ord bruges, og jo svagere bliver koden. Ved 10 tegn er der to ord på tre bogstaver.
- Specialtegn: `! # % & * - _ + = ? . @`
- Hostes på Netlify (`netlify.toml`) og udgives automatisk ved push til `main`.

### Ordlisten

`words.js` indeholder 7.776 almindelige danske ord på 3-9 bogstaver, kun a-z og med grove ord filtreret fra. Den er lavet med `build_words.py` ud fra:

- [Stavekontrolden.dk](https://www.stavekontrolden.dk) da_DK-ordbogen (via [LibreOffice/dictionaries](https://github.com/LibreOffice/dictionaries/tree/master/da_DK)), GPL 2.0 / LGPL 2.1 / MPL 1.1, baseret på data fra Det Danske Sprog- og Litteraturselskab
- [hermitdave/FrequencyWords](https://github.com/hermitdave/FrequencyWords) (dansk, 2018), CC BY-SA 4.0

Ordene skal stå i ordbogen, og blandt dem vælges de 7.776 der bruges mest ifølge frekvenslisten. Genskab listen ved at lægge `da_DK.dic` og `da_50k.txt` i en mappe og køre `python3 build_words.py <mappe> > words.js`.
