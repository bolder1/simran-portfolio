// One-shot: convert the scraped SPILZ Framer images into optimized, semantically
// named webp assets under public/case-studies/spilz/.
import sharp from "sharp";
import { mkdirSync, copyFileSync, statSync } from "node:fs";
import { join } from "node:path";

const SRC =
  "C:/Users/Surajit/AppData/Local/Temp/claude/D--Simran/5691ef5e-df47-416d-b383-bd1702baf5b3/scratchpad/spilz-img";
const OUT = "public/case-studies/spilz";
mkdirSync(OUT, { recursive: true });

/** old framer basename -> [new name, max long edge px] */
const MAP = {
  "6jxx96fVCys1muv4sVqvXByPo.png": ["hero-photobooth", 1400],
  "Om22NQ3X9td9n4S1vivB7Schk.png": ["gen-boomers", 900],
  "Lkfga7bRPWGQBLQCmO1STONOA.png": ["gen-millennials", 900],
  "bP3qxXszRGxSDrHSuRqWkuO8.png": ["research-feeling", 1200],
  "LuzD13tGMbKzma0FLoH3H3Lo.png": ["research-other-apps", 1600],
  "BQx00CpT5tnWjD7PcaykOXlBfcc.png": ["persona-aditi", 900],
  "TFvz0sQ6IF9zFD5cREoqtO8zOmU.png": ["persona-ravi", 900],
  "VqYKyOx2KPgVU5g6ccvuclAYE.png": ["persona-diksha", 900],
  "1wX4q4kXgq8JFyN70H6K0HECbMU.png": ["persona-rahul", 900],
  "k9mS4m31V4dEGUlhxS8nFpKkHg.png": ["journey-rocket", 900],
  "06VbQoZzMU3OVozJ8PF8YmNisU.png": ["journey-stage-1", 900],
  "6BY3Lu9FdYnqT4Qg3qo4dqz5I4.png": ["journey-stage-2", 900],
  "IY2ZGlQtf7Qki8gl6YHaXYGFdI.png": ["journey-stage-3", 900],
  "vruiWZEbC3r8Hs0tuMVqrfXei68.png": ["journey-stage-4", 900],
  "XkPcToc9YZ8ojjMFzgDeCudGS0.png": ["team-founder-1", 700],
  "OS0pySQQFEecLKI7alRuvfMfgk.png": ["team-founder-2", 700],
  "Wt6zdvdXBGUjn7ynenxOCBiVe9I.png": ["team-developer", 700],
  "1UobIR7QJem30IRdpzNwqM4Qh30.png": ["team-designer", 700],
  "kNavAI1ECGElL7Psa2y6QBihWw8.png": ["pillar-vibe-check", 600],
  "bN9N2aBBRCDLKHy6zkyXKIG6sM.png": ["pillar-anonymity", 600],
  "20DP2ieuWlLcanaBypnTbhjobM.png": ["pillar-interests", 600],
  "ezbsATrpYprhBrPnUcG5xLhsXQ.png": ["pillar-safety", 600],
  "UiTZVKvWYf14zXF8hh1JQ4bUI.png": ["pillar-lingo", 600],
  "4VWO7SK0x1FdNRvPvw30S6XrI.png": ["pillar-nonjudgement", 600],
  "K3TOuP7RYSwOFNebb0LChMsPQNw.png": ["pillar-gamification", 600],
  "BVu5FU3GwiJNRE6DDtRalcyT3A.png": ["screen-feed", 1100],
  "XjokDDoxm8EHooAhHy9PWTV8c.png": ["screen-events", 1100],
  "jlkhmqt4CuaFzj7OBvlmaHg4NDE.png": ["screen-messages", 1100],
  "7yTXv0ZKijuToZpzDrbskqqZ4Y.png": ["screen-navbar", 1400],
  "eHVy9DAPRpDXDGB6eHRxBH4XCVQ.png": ["spilz-logo", 700],
  "eY8OdRPAOzvQwfjZMyOlWYw7AA.png": ["impact-founders", 1200],
  "N0HYQzrk200QjKN1eGGwNwtoZKY.png": ["brand-qr-poster", 1100],
  "KgONiUfC0IgMVXah1srdYblxeSY.png": ["brand-update-3d", 900],
  "NZBV8ooNNdoT0GuSG7nmpDcB0I.png": ["brand-just-say-it", 900],
  "0m4s4hAT08B2hwqVHcHZUgMTCA.png": ["brand-improv-poster", 1100],
  "93zwRzmgyvLxIlUdgTN47elM.png": ["brand-stickers", 1100],
  "Ts2cz6oij5VnDwcolX3TIlJMsk.png": ["brand-extra-1", 1100],
  "ELxLW0j8zS4M5djNp9FDhD4G9I.png": ["brand-extra-2", 1100],
  "v7Jm8pbj31hfpfEzbqQ5Wl4YvU.png": ["brand-extra-3", 1100],
  "idGhWgfHPOZU6JqnxkPveFUU.png": ["brand-extra-4", 1100],
  "s5eT1dVkPQgunwvbJxRP6XAABcs.png": ["brand-extra-5", 1100],
};

let total = 0;
for (const [src, [name, max]] of Object.entries(MAP)) {
  const out = join(OUT, `${name}.webp`);
  await sharp(join(SRC, src))
    .resize({ width: max, height: max, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(out);
  const kb = Math.round(statSync(out).size / 1024);
  total += kb;
  console.log(`${name}.webp  ${kb} KB`);
}

// the animated thank-you gif: copy as-is
copyFileSync(join(SRC, "Z7jKA3PMK8Gi9NcpVn8NPzjvYx8.gif"), join(OUT, "thank-you.gif"));
console.log("thank-you.gif copied");
console.log(`TOTAL webp: ${total} KB`);
