import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from "clarity-angular";
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { RosterComponent } from './roster/roster.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AdminComponent } from './admin/admin.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './auth.service';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    RosterComponent,
    PlayerDetailComponent,
    AdminComponent,
    EditPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    ClarityModule.forRoot(),
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
