import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';


// Must export the config
/*
export const firebaseConfig = {
  apiKey: 'AIzaSyAaTLLTBfT8-tlCXOKlp4LrwQzhVWjbM1Q',
  authDomain: 'angular-pre.firebaseapp.com',
  databaseURL: 'https://angular-pre.firebaseio.com',
  storageBucket: 'angular-pre.appspot.com',
  messagingSenderId: '796422970338'
};
*/

export const firebaseConfig = {
  apiKey: "AIzaSyBx1P0WGhYhOF3LU98yifvzKuK-MmS_NlM",
  authDomain: "logindemo-250fa.firebaseapp.com",
  databaseURL: "https://logindemo-250fa.firebaseio.com",
  projectId: "logindemo-250fa",
  storageBucket: "logindemo-250fa.appspot.com",
  messagingSenderId: "454654094826",
  appId: "1:454654094826:web:6ab63df5ab3a3ec7521693",
  measurementId: "G-S24MMQ12YT"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
