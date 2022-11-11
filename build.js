const stealTools = require("steal-tools");
const path = require("path");
const { readJsonSync, ensureDirSync, emptyDirSync } = require("fs-extra");
const { migrateToDist } = require('moo-stache-helper');

main();

async function main() {
    // Find steal config
    const stealConfigPath = path.join(process.cwd(), 'steal-config.json');
    const config = readJsonSync(stealConfigPath);
    
    // Determine production bundle directory
    const dist = 'dist/app';
    
    // Ensure that directory exists and is empty
    ensureDirSync(dist);
    emptyDirSync(dist);
    
    // Use `steal-tools` to create production bundle of application
    await stealTools.build(config, {
        bundleSteal: true,
        // `steal-tools' bundles should always be placed inside a 'dist' directory for relative paths to work
        dest: path.join(dist, 'dist'),
    });
    
    // Copy over assets and create production index.html
    await migrateToDist({
        index: 'index.html',
        copyPaths: ['assets'],
        dist,
    });
}
