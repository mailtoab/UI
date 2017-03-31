import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { GenericTableModule } from 'angular2-generic-table';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { SearchService } from './search.service';
import { AccessService } from './access.service';
import { SearchComponent } from './search/search.component';
import { RuleTestComponent } from './rule-test/rule-test.component';
import { EmailHCComponent } from './email-hc/email-hc.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/index';




@NgModule( {
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, JsonpModule, routing, GenericTableModule],
    declarations: [AppComponent, SearchComponent, RuleTestComponent, EmailHCComponent, NotFoundComponent, HomeComponent, LoginComponent],
    providers: [AuthGuard,SearchService,AccessService],
    bootstrap: [AppComponent]
})
export class AppModule { }


//BrowserModule includes common module which has (ngFor, ngIf and so on)
//ngModel is a directive present in FormsModule