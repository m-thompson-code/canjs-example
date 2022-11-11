const { server } = require('moo-stache-helper');

const INDEX_HTML = 'index.html';
const STEAL_CONFIG_PATH = 'steal-config.json';
const ROOT = '';
const PORT = 8080;

server({
    index: INDEX_HTML,
    stealConfig: STEAL_CONFIG_PATH,
    root: ROOT,
    port: PORT
})
