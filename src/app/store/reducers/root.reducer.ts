import {workoutsReducer as workouts, WState} from './workouts.reducer';

export interface AppState {
  workouts: WState;
}

export const reducers = {
  workouts
};
