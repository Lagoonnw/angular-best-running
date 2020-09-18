import { AfterViewInit, Component }                       from '@angular/core';
import { Store }                                          from '@ngrx/store';
import { getWorkouts }                                    from '../../store/actions/workouts.action';
import { selectWorkouts }                                 from '../../store/reducers/workouts.reducer';
import { workoutTypes, sortDateTypes, sortDistanceTypes } from '../../../common/constants';
import { Workout }                                        from '../../models/Workout';

@Component({
  selector   : 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements AfterViewInit {
  types = workoutTypes;
  distanceTypes = sortDistanceTypes;
  dateTypes = sortDateTypes;
  workouts: Workout[];

  constructor(private store: Store) {
    this.store.dispatch(getWorkouts());
    this.store.select(selectWorkouts).subscribe(workouts => this.workouts = workouts);
  }

  ngAfterViewInit() {
    // console.log('', this.dropdown.nativeElement);
    // const d = new M.Dropdown(this.dropdown.nativeElement, {});
  }
}
