import icons from '@mdi/js';
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destination = path.join(__dirname, "/../lib/generated");

await fs.mkdir(destination, { recursive: true });
const index = await fs.open(path.join(destination, 'index.js'), 'w+')

const template = (await fs.readFile(path.join(__dirname, "TemplateIcon.svelte"))).toString();



const promises = [];
for (let key in icons) {
    if (key == "__esModule") {
        continue;
     }
    const data = template.replace(/mdiFolder/g, key);
    const componentName = key.slice(3);

    await fs.writeFile(`${destination}/${componentName}.svelte`, data);
    await index.write(`export { default as ${componentName}} from '$lib/generated/${componentName}.svelte';\n`)
}
