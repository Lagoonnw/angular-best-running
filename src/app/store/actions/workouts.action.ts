import {createAction, props} from '@ngrx/store';

export enum WorkoutsAction {
  get = '[Workouts] get workouts from db',
  set = '[Workouts] set workouts to store'
}

export const getWorkouts = createAction(WorkoutsAction.get);
export const setWorkouts = createAction(WorkoutsAction.set, props<{workouts: any[]}>());
