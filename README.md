# XKCD-Adgangskoder

Prøv den på [adgangskoder.app](https://adgangskoder.app)

Adgangskoder man rent faktisk kan huske. For eksempel `Strand!Rabat!Krabbe!Passiv28`.

## Hvad er det?

De fleste af os har lært at en god adgangskode ser ud som `Tr0ub4dor&3`. Den er svær at huske for mennesker og overraskende let at gætte for computere. Tegneserien [XKCD](https://xkcd.com/936/) foreslog i sin tid noget bedre: fire tilfældige, almindelige ord sat sammen. Det er langt nok til at være svært at knække, og hjernen er ganske god til at lave en lille historie ud af fire ord.

Siden her gør det samme på dansk. Store bogstaver, tal og specialtegn får du med i købet fordi mange hjemmesider stadig insisterer på dem.

## Sådan bruger du den

Åbn siden, og du får fem forslag. Tryk "Kopiér" ud for det du kan lide, eller "Lav fem nye" hvis ingen af dem siger dig noget.

Kræver en hjemmeside en kort adgangskode, kan du sætte en maksimal længde med slideren øverst. Jo kortere, jo svagere - så brug den kun når du skal.

Der er ingen æ, ø eller å, og kun specialtegn fra et almindeligt dansk tastatur. Så slipper du for at opdage at din nye adgangskode ikke kan skrives på en lånt computer.

Koderne bliver lavet i din egen browser og bliver hverken gemt eller sendt nogen steder hen.

## Det tekniske

- Ren HTML, CSS og JavaScript uden afhængigheder eller byggetrin. Åbn `index.html`, så kører den.
- Tilfældigheden kommer fra `crypto.getRandomValues` (uden modulo-bias).
- Fire ord fra 7.776, ét af 12 specialtegn (`! # % & * - _ + = ? . @`) og to cifre giver ca. 62 bits entropi. Med en lav maksimal længde bruges færre og kortere ord. Ved 10 tegn er det to ord på tre bogstaver.
- Hostes på Netlify og udgives automatisk ved push til `main`.

### Ordlisten

`words.js` indeholder 7.776 almindelige danske ord på 3-9 bogstaver, kun a-z og med grove ord filtreret fra. `build_words.py` tager ordene fra ordbogen og vælger de 7.776 der bruges mest ifølge frekvenslisten:

- [Stavekontrolden.dk](https://www.stavekontrolden.dk) da_DK-ordbogen (via [LibreOffice/dictionaries](https://github.com/LibreOffice/dictionaries/tree/master/da_DK)), GPL 2.0 / LGPL 2.1 / MPL 1.1, baseret på data fra Det Danske Sprog- og Litteraturselskab
- [hermitdave/FrequencyWords](https://github.com/hermitdave/FrequencyWords) (dansk, 2018), CC BY-SA 4.0

Genskab listen ved at lægge `da_DK.dic` og `da_50k.txt` i en mappe og køre `python3 build_words.py <mappe> > words.js`.
