import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule }    from './app-routing.module';
import { AppComponent }        from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { MainComponent }       from './components/main/main.component';
import { StoreModule }         from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment }         from '../environments/environment';
import { EffectsModule }       from '@ngrx/effects';
import { reducers }            from './store/reducers/root.reducer';
import { WorkoutsEffect }      from './store/effects/workouts.effect';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({...reducers}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([WorkoutsEffect])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
