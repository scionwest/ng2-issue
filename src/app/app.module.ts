import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
    { path: 'signup', component: SignupComponent }
];

@NgModule({
    declarations: [AppComponent, SignupComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        MaterialModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
