import icons from '@mdi/js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destination = path.join(__dirname, '/../lib/generated');

await fs.mkdir(destination, { recursive: true });
const index = await fs.open(path.join(destination, 'icons.js'), 'w+');

const template = (await fs.readFile(path.join(__dirname, 'TemplateIcon.svelte'))).toString();

const promises = [];
for (let key in icons) {
    if (key == "__esModule") {
        continue;
     }
    const data = template.replace(/mdiFolder/g, key);
    const componentName = key.slice(3);

    promises.push(fs.writeFile(`${destination}/${componentName}.svelte`, data));
    promises.push(index.write(`export { default as ${componentName}} from '$lib/generated/${componentName}.svelte';\n`));
}



import { join } from 'path';

const rootDir = fileURLToPath(new URL('../../', import.meta.url));
//
// Fetch package.json definition(s)
//

const mdi = JSON.parse(
	(await fs.readFile(join(rootDir, 'node_modules/@mdi/js/package.json'))).toString()
);
const pkg = JSON.parse((await fs.readFile(join(rootDir, 'package.json'))).toString());

//
// Update version in package.json
//

pkg.version = mdi.version;

promises.push(fs.writeFile(join(rootDir, 'package.json'), JSON.stringify(pkg, null, 4)));

await Promise.all(promises);
console.log(`Set package version to ${mdi.version}`);
