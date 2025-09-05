'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const stateHistory = { ...state };
  const result = [];

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];

    if (action.type === 'addProperties') {
      Object.assign(stateHistory, action.extraData);
    }

    if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete stateHistory[key];
      }
    }

    if (action.type === 'clear') {
      for (const key in stateHistory) {
        delete stateHistory[key];
      }
    }
    result.push({ ...stateHistory });
  }

  return result;
}

module.exports = transformStateWithClones;
