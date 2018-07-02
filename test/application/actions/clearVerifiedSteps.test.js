import clearVerifiedSteps from '../../../src/actions/clearVerifiedSteps';
import { configureStore } from '../../../src/store';
import { getVerifiedSteps } from '../../../src/selectors/certificate';

describe('clearVerifiedSteps action creator test suite', function () {
  it('should reset the verifiedSteps property of the state to an array with the default steps in standby', function () {
    const store = configureStore();
    const initialState = store.getState();

    const initialStateOfVerifiedSteps = JSON.parse(JSON.stringify(getVerifiedSteps(initialState)));

    // populate substep
    initialState.verifiedSteps[0].substeps.push({
      code: 'test',
      name: 'test'
    });

    store.dispatch(clearVerifiedSteps());

    const state = store.getState();

    expect(getVerifiedSteps(state)).toEqual(initialStateOfVerifiedSteps);
  });
});
