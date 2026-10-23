import fs from 'node:fs';

const html = fs.readFileSync('index.html', 'utf8');
const cssPath = 'css/game.css';
const css = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, 'utf8') : '';

const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };

check(html.includes('<canvas id="game"'), 'game canvas is missing');
check(html.includes('Crash Beach'), 'Crash Beach title/identity is missing');
check(html.includes('js/vertical-slice.js'), 'v0.50 vertical-slice module is not connected');
check(html.includes('id="journalPanel"'), 'journal panel is missing');
check(html.includes('id="sliceCompletePanel"'), 'vertical-slice completion panel is missing');
check(html.includes('Slice.SAVE_SCHEMA_VERSION'), 'versioned v0.50 saves are not connected');
check(html.includes("const LEGACY_SAVE_KEY = 'crashBeachSave_v1'"), 'legacy save migration path is missing');
check(html.includes('sliceProgress.gathered += 1'), 'gathering is not connected to slice progress');
check(html.includes('sliceProgress.crafted += 1'), 'crafting is not connected to slice progress');
check(html.includes('sliceProgress.drankFreshWater = true'), 'fresh water is not connected to slice progress');
check(html.includes("id: 'camp', name: 'Establish Camp'"), 'player-built camp recipe is missing');
check(html.includes('hasShelter: false'), 'new runs do not begin without a shelter');
check(html.includes('player.hasShelter && !spriteReady(\'bg_camp\')'), 'camp shelter render is not gated by construction');
check(html.includes('dangerous: false, // landing beach'), 'landing beach is not configured as a safe zone');
check(html.includes('water: null, // the landing beach has salt water only'), 'landing-beach wreck still has a false fresh-water source');
check(html.includes("if (terrainBlocked('camp', player.x, player.y))"), 'camp construction does not free a player caught by new shelter geometry');
check(html.includes('function terrainMove('), 'terrain collision helper is missing');
check(html.includes('const SPEAR_DURABILITY = 5'), 'spear durability balance is not applied');
check(html.includes("sliceProgress.visited[targetId] = true"), 'travel is not connected to slice progress');
check(html.includes('!idlePaused'), 'idle auto-pause is not connected to the game loop');
check(/function\s+loop\s*\(/.test(html), 'main loop() is missing');
check(/function\s+resetGame\s*\(/.test(html), 'resetGame() is missing');
check(/function\s+serializeGame\s*\(/.test(html), 'serializeGame() is missing');
check(/function\s+saveGame\s*\(/.test(html), 'saveGame() is missing');
check(/function\s+loadGame\s*\(/.test(html), 'loadGame() is missing');
check(/function\s+enterBattle\s*\(/.test(html), 'battle entry point is missing');
check(/function\s+startDodgeMeter\s*\(/.test(html), 'v0.45 dodge meter is missing');
check(/function\s+updateWren\s*\(/.test(html), 'Wren update logic is missing');
check(/function\s+updateSurvivalStats\s*\(/.test(html), 'survival update logic is missing');
check(/function\s+attemptCraft\s*\(/.test(html), 'crafting entry point is missing');
check(/function\s+playCutscene\s*\(/.test(html), 'cutscene engine is missing');
check(/function\s+adjustIslandTrust\s*\(/.test(html), 'islandTrust logic is missing');
check(/addEventListener\(\s*['"]keydown['"]/.test(html), 'keyboard input listener is missing');
check(/addEventListener\(\s*['"]pointerdown['"]/.test(html), 'pointer/touch input listener is missing');

const externalCss = /<link[^>]+href=["']css\/game\.css["'][^>]*>/i.test(html);
const inlineCss = /<style\b/i.test(html);
check(externalCss || inlineCss, 'no game stylesheet is connected');
if (externalCss) {
  check(css.length > 1000, 'css/game.css exists but appears unexpectedly small');
  check(!inlineCss, 'inline style block still exists after CSS extraction');
}

if (failures.length) {
  console.error('Crash Beach smoke checks FAILED:');
  for (const failure of failures) console.error(' - ' + failure);
  process.exit(1);
}

console.log('Crash Beach smoke checks passed.');
console.log('HTML bytes:', Buffer.byteLength(html));
console.log('External CSS:', externalCss ? 'yes' : 'no');
if (externalCss) console.log('CSS bytes:', Buffer.byteLength(css));
