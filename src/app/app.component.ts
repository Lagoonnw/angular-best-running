import { Component, OnInit } from '@angular/core';
import { ApiService }        from './providers/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'a-brunning';
  constructor(private api: ApiService) {
  }

  ngOnInit() {
    // tslint:disable-next-line:no-console
    this.api.getWorkouts().subscribe(r => console.log('FROM api', r));
  }

}
