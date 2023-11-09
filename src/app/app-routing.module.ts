import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { PropertyDetailComponent } from './property-list/property-detail/property-detail.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from 'src/guards/authguard.guard';
import { RegisterUserComponent } from './user/register-user/register-user.component';

const routes: Routes = [
  {path:"property-detail/:id", component: PropertyDetailComponent},
  {path: "",component: PropertyListComponent},
  {path:"Add-property",component:AddPropertyComponent, canActivate:mapToCanActivate([AuthGuard])},
  {path:"Login", component: UserComponent},
  {path:"Register", component:RegisterUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
