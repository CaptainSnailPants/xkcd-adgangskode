const WORD_COUNT = 4;
const PASSWORD_COUNT = 5;
// Kun tegn der står direkte eller med Shift på et dansk tastatur og som stort set alle sites accepterer
const SPECIALS = "!#%&*-_+=?.@";

const slider = document.getElementById("maxlen");
const sliderValue = document.getElementById("maxlen-value");
let sliderTouched = false;

// Uniformt tilfældigt tal i [0, max) via crypto.getRandomValues, uden modulo-bias
function randomIndex(max) {
  const limit = Math.floor(0x100000000 / max) * max;
  const buf = new Uint32Array(1);
  do crypto.getRandomValues(buf); while (buf[0] >= limit);
  return buf[0] % max;
}

const pick = (items) => items[randomIndex(items.length)];
const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

// Flest mulige ord (højst 4), hvor hvert ord højst må være så langt, at det hele kan være inden for maxLength
function makePassword(maxLength) {
  let count = WORD_COUNT, budget;
  while ((budget = Math.floor((maxLength - 2 - (count - 1)) / count)) < 3 && count > 2) count--;
  const pool = WORDS.filter((w) => w.length <= budget);
  const words = Array.from({ length: count }, () => capitalize(pick(pool)));
  return words.join(pick(SPECIALS)) + randomIndex(10) + randomIndex(10);
}

async function copy(text, button) {
  try {
    await navigator.clipboard.writeText(text);
    button.textContent = "Kopieret!";
  } catch {
    button.textContent = "Kunne ikke kopiere";
  }
  setTimeout(() => (button.textContent = "Kopiér"), 1500);
}

function render() {
  const list = document.getElementById("list");
  list.replaceChildren();
  const maxLength = sliderTouched ? Number(slider.value) : Infinity;
  for (let i = 0; i < PASSWORD_COUNT; i++) {
    const pw = makePassword(maxLength);
    const li = document.createElement("li");
    const code = document.createElement("code");
    // Linjeskift må kun ske efter specialtegnene, ikke midt i et ord
    code.append(...pw.split(/(?<=[^A-Za-z0-9])/).flatMap((part) => [part, document.createElement("wbr")]));
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = "Kopiér";
    btn.addEventListener("click", () => copy(pw, btn));
    li.append(code, btn);
    list.append(li);
  }
}

slider.addEventListener("input", () => {
  sliderTouched = true;
  sliderValue.textContent = `${slider.value} tegn`;
  render();
});
document.getElementById("regen").addEventListener("click", render);
render();
