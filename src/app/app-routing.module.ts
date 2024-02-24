import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponentComponent } from './add-product-component/add-product-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ShowShoppingComponentComponent } from './show-shopping-component/show-shopping-component.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [

  { path: '', component:HomeComponentComponent},
  { path: 'add', component:AddProductComponentComponent},
  { path: 'show', component:ShowShoppingComponentComponent},
  { path: 'update/:id', component: UpdateproductComponent },
  { path: 'details/:id', component: DetailsComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
