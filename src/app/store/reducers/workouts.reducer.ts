import {createReducer, on, createSelector} from '@ngrx/store';
import { setWorkouts }                     from '../actions/workouts.action';
import { AppState }                        from './root.reducer';
import { Workout }                         from '../../models/Workout';

export type WState = Workout[];

const initialState: WState = [];

const reducer = createReducer(initialState,
  on(setWorkouts, (state, {workouts}) => ([...workouts]))
);

export function workoutsReducer(state, action) {
  return reducer(state, action);
}

export const stateSelector = (state: AppState) => state.workouts;

export const selectWorkouts = createSelector(
  stateSelector,
  (state) => state
);
