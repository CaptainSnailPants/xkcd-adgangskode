# XKCD-adgangskode

En lille webside, der laver adgangskoder efter [XKCD-metoden](https://xkcd.com/936/): tilfældige danske ord sat sammen med et specialtegn og to tal, fx `Strand!Rabat!Krabbe!Passiv28`. Med en slider kan man sætte en maks. længde (10–41 tegn).

Siden er ren HTML, CSS og JavaScript uden afhængigheder. Åbn `index.html` i en browser. Tilfældighed kommer fra `crypto.getRandomValues`.

## Ordlisten

`words.js` indeholder 7.776 almindelige danske ord på 3–9 bogstaver, kun a–z (ingen æ/ø/å) og med grove ord filtreret fra. Den er lavet med `build_words.py` ud fra:

- [Stavekontrolden.dk](https://www.stavekontrolden.dk) da_DK-ordbogen (via [LibreOffice/dictionaries](https://github.com/LibreOffice/dictionaries/tree/master/da_DK)), GPL 2.0 / LGPL 2.1 / MPL 1.1, baseret på data fra Det Danske Sprog- og Litteraturselskab
- [hermitdave/FrequencyWords](https://github.com/hermitdave/FrequencyWords) (dansk, 2018), CC BY-SA 4.0

Genskab listen: læg `da_DK.dic` og `da_50k.txt` i en mappe og kør `python3 build_words.py <mappe> > words.js`.
