import { Injectable }                      from '@angular/core';
import { ApiService }                      from '../../providers/api.service';
import { Actions, createEffect, ofType }   from '@ngrx/effects';
import { setWorkouts, WorkoutsAction }     from '../actions/workouts.action';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { throwError }                      from 'rxjs';
import { Workout }                         from '../../models/Workout';

@Injectable({providedIn: 'root'})
export class WorkoutsEffect {
  getWorkouts$ = createEffect(() => this.actions$.pipe(
    ofType(WorkoutsAction.get),
    switchMap(() => this.api.getWorkouts().pipe(
      mergeMap(({workouts}) => ([setWorkouts({workouts: workouts.map(w => new Workout(w))})])),
      catchError(err => throwError(err))
    ))
  ));

  constructor(private actions$: Actions, private api: ApiService) {
  }
}
