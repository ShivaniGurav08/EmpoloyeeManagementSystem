import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';

import { HomePageComponent } from './home-page/home-page.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {
    path:'list',
    component:ListComponent
  },
  {
    path:'home',
    component:HomePageComponent

  },
  {
    path:'update/:id',
    component:UpdateComponent
  },
  {
    path:'delete',
    component:DeleteComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
