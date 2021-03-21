import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAcoountComponent } from './components/add-acoount/add-acoount.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ClientsAccountsComponent } from './pages/clients-accounts/clients-accounts.component';

const routes: Routes = [
  { path: '', component: ClientsAccountsComponent},
  { path: 'add-account', component: AddAcoountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
