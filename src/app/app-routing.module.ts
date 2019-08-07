import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import {DetailCateComponent} from './admin/detail-cate/detail-cate.component';
import {DetailHotelComponent} from'./screens/detail-hotel/detail-hotel.component';
import {AddCateComponent} from './admin/add-cate/add-cate.component';
import {AddHotelComponent} from './admin/add-hotel/add-hotel.component';
import {EditCateComponent} from './admin/edit-cate/edit-cate.component';
import {EditHotelComponent} from './admin/edit-hotel/edit-hotel.component';
import {ListCateComponent} from './admin/list-cate/list-cate.component';
import {AdhomeComponent} from './admin/adhome/adhome.component';
const routes:Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"category/admin/detail/:id",
    component:DetailCateComponent
  },
  {
    path:"hotel/detail/:id",
    component: DetailHotelComponent
  },
  {
    path:"category/admin/add",
    component:AddCateComponent
  },
  {
    path:"hotel/admin/add",
    component:AddHotelComponent
  },
  {
    path:"category/admin/edit/:id",
    component:EditCateComponent
  },
  {
    path:"hotel/admin/edit/:id",
    component:EditHotelComponent
  },
  {
    path:"category",
    component:ListCateComponent
  },
  {
    path:"adhome",
    component:AdhomeComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
