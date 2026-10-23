(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (root) root.CrashBeachSlice = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const VERSION = '0.50';
  const SAVE_SCHEMA_VERSION = 2;
  const SLICE_FINAL_DAY = 3;

  const OBJECTIVES = [
    {
      day: 1,
      title: 'Establish a foothold',
      tasks: [
        { id: 'gather', label: 'Gather four useful supplies', test: state => state.gathered >= 4 },
        { id: 'camp', label: 'Find a suitable inland clearing', test: state => !!state.visited.camp },
        { id: 'shelter', label: 'Establish your camp and shelter', test: state => !!state.shelterBuilt },
      ],
    },
    {
      day: 2,
      title: 'Build a routine',
      tasks: [
        { id: 'water', label: 'Drink from a fresh-water source', test: state => !!state.drankFreshWater },
        { id: 'craft', label: 'Craft one useful tool or supply', test: state => state.crafted >= 1 },
        { id: 'stream', label: 'Reach the freshwater stream', test: state => !!state.visited.stream },
      ],
    },
    {
      day: 3,
      title: 'Look beyond the shoreline',
      tasks: [
        { id: 'predator', label: 'Survive a predator beyond the safe zones', test: state => state.predatorsSurvived >= 1 },
        { id: 'ridge', label: 'Reach the ridge', test: state => !!state.visited.ridge },
        { id: 'rest', label: 'Rest at your shelter', test: state => state.rested >= 1 },
      ],
    },
  ];

  function createProgress() {
    return {
      gathered: 0,
      crafted: 0,
      shelterBuilt: false,
      predatorsSurvived: 0,
      rested: 0,
      drankFreshWater: false,
      visited: { beach: true },
      completionShown: false,
    };
  }

  function normalizeProgress(value) {
    const base = createProgress();
    if (!value || typeof value !== 'object') return base;
    return {
      gathered: Math.max(0, Number(value.gathered) || 0),
      crafted: Math.max(0, Number(value.crafted) || 0),
      shelterBuilt: !!value.shelterBuilt,
      predatorsSurvived: Math.max(0, Number(value.predatorsSurvived) || 0),
      rested: Math.max(0, Number(value.rested) || 0),
      drankFreshWater: !!value.drankFreshWater,
      visited: Object.assign(base.visited, value.visited || {}),
      completionShown: !!value.completionShown,
    };
  }

  function taskStatus(progress, day) {
    const safeProgress = normalizeProgress(progress);
    return OBJECTIVES.map(group => ({
      day: group.day,
      title: group.title,
      unlocked: day >= group.day,
      tasks: group.tasks.map(task => ({
        id: task.id,
        label: task.label,
        complete: !!task.test(safeProgress, day),
      })),
    }));
  }

  function isSliceComplete(progress, day) {
    return day >= SLICE_FINAL_DAY && taskStatus(progress, day)
      .every(group => group.tasks.every(task => task.complete));
  }

  function completedTaskCount(progress, day) {
    const groups = taskStatus(progress, day);
    return groups.reduce((count, group) => count + (group.unlocked ? group.tasks.filter(task => task.complete).length : 0), 0);
  }

  function totalTaskCount() {
    return OBJECTIVES.reduce((count, group) => count + group.tasks.length, 0);
  }

  function migrateSave(save) {
    if (!save || typeof save !== 'object') return null;
    const migrated = Object.assign({}, save);
    migrated.v = SAVE_SCHEMA_VERSION;
    migrated.sliceProgress = normalizeProgress(save.sliceProgress);
    return migrated;
  }

  return {
    VERSION,
    SAVE_SCHEMA_VERSION,
    SLICE_FINAL_DAY,
    OBJECTIVES,
    createProgress,
    normalizeProgress,
    taskStatus,
    isSliceComplete,
    completedTaskCount,
    totalTaskCount,
    migrateSave,
  };
});
