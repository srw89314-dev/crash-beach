const assert = require('node:assert/strict');
const slice = require('../js/vertical-slice.js');

const fresh = slice.createProgress();
assert.equal(slice.VERSION, '0.50');
assert.equal(slice.SAVE_SCHEMA_VERSION, 2);
assert.equal(slice.totalTaskCount(), 9);
assert.equal(slice.completedTaskCount(fresh, 1), 0);
assert.equal(slice.isSliceComplete(fresh, 3), false);

const complete = {
  gathered: 4,
  crafted: 1,
  shelterBuilt: true,
  predatorsSurvived: 1,
  rested: 1,
  drankFreshWater: true,
  visited: { beach: true, camp: true, stream: true, ridge: true },
};
assert.equal(slice.completedTaskCount(complete, 3), 9);
assert.equal(slice.isSliceComplete(complete, 2), false);
assert.equal(slice.isSliceComplete(complete, 3), true);

const partial = slice.normalizeProgress({
  gathered: 4,
  visited: { camp: true, stream: true },
  drankFreshWater: true,
});
assert.equal(slice.completedTaskCount(partial, 1), 2);
assert.equal(slice.completedTaskCount(partial, 2), 4);
assert.equal(slice.taskStatus(partial, 1)[1].unlocked, false);
assert.equal(slice.taskStatus(partial, 2)[1].unlocked, true);

const migrated = slice.migrateSave({ v: 1, player: {}, inventory: {} });
assert.equal(migrated.v, 2);
assert.deepEqual(migrated.sliceProgress.visited, { beach: true });
assert.equal(migrated.sliceProgress.gathered, 0);
assert.equal(migrated.sliceProgress.shelterBuilt, false);

const migratedV2 = slice.migrateSave({
  v: 2,
  player: {},
  inventory: {},
  sliceProgress: complete,
});
assert.equal(migratedV2.sliceProgress.crafted, 1);
assert.equal(migratedV2.sliceProgress.visited.ridge, true);

console.log('Crash Beach vertical-slice behavior checks passed.');
