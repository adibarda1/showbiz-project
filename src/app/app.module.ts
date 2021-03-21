import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessesListComponent } from './components/businesses-list/businesses-list.component';
import { BusinessesListItemComponent } from './components/businesses-list/businesses-list-item/businesses-list-item.component';
import { ClientsAccountsComponent } from './pages/clients-accounts/clients-accounts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { AddAcoountComponent } from './components/add-acoount/add-acoount.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BusinessesListComponent,
    BusinessesListItemComponent,
    ClientsAccountsComponent,
    NavigationComponent,
    AddAcoountComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
