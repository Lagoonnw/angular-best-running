import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store }                                                   from '@ngrx/store';
import { getWorkouts }    from '../../store/actions/workouts.action';
import { selectWorkouts } from '../../store/reducers/workouts.reducer';
import * as M from 'materialize-css';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements AfterViewInit {
  @ViewChild('dropdown') dropdown: ElementRef;
  workouts: any[];
  tableColumns  :  string[] = ['type', 'date', 'distance'];
  constructor(private store: Store) {
    this.store.dispatch(getWorkouts());
    this.store.select(selectWorkouts).subscribe(workouts => this.workouts = workouts);
  }

  ngAfterViewInit() {
    console.log('', this.dropdown.nativeElement);
    const d = new M.Dropdown(this.dropdown.nativeElement, {});
  }
}
