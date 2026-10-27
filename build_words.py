import re, sys, json
dl = sys.argv[1]
stems = {l.split("/")[0].strip() for l in open(f"{dl}/da_DK.dic", encoding="utf-8").readlines()[1:]}
ok = re.compile(r"^[a-z]{3,9}$")
stems = {w for w in stems if ok.match(w)}
BLOCK_SUB = "fuck shit fisse kusse numse sex porn luder ludder neger nazi voldt onan knep sperm strip kinky perver bitch retard mongol spasser dildo vibrator penis vagina tisse lort skide pisse liderlig orgasm erotik nosse kneppe pikke bordel prostitu selvmord narko kokain heroin incest pedofil homo lesb bryster patter nigger junkie horeunge sutte slave hitler abort".split()
BLOCK_EXACT = set("pik pis hore horer ror lig ligene liget anal anus bolle boller bollede pule tis prut prutte fanden satan pokker helvede abc".split())
clean = lambda w: w not in BLOCK_EXACT and not any(b in w for b in BLOCK_SUB)
words = []
for line in open(f"{dl}/da_50k.txt", encoding="utf-8"):
    w = line.split()[0]
    if w in stems and clean(w) and w not in words:
        words.append(w)
print(len(words), file=sys.stderr)
words = sorted(words[:7776])
assert all(map(clean, words)) and len(words) == 7776 and len(set(words)) == 7776 and all(ok.match(w) for w in words)
print("// 7776 almindelige danske ord uden æ/ø/å: Stavekontrolden.dk (GPL/LGPL/MPL) krydset med hermitdave/FrequencyWords (CC BY-SA 4.0), grove ord filtreret fra")
print("const WORDS = " + json.dumps(words, separators=(",", ":")) + ";")
