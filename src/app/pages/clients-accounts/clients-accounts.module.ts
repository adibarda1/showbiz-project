import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsAccountsComponent } from './clients-accounts.component';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';



@NgModule({
  declarations: [ClientsAccountsComponent],
  imports: [
    CommonModule,
    NavigationComponent
  ],
  exports: [
    ClientsAccountsComponent
  ]
})
export class ClientsAccountsModule { }
