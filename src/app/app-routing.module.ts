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
import {ListHotelComponent} from './admin/list-hotel/list-hotel.component';
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
    path:"category/:cateId/hotel/:id",
    component: DetailHotelComponent
  },
  {
    path:"category/admin/add",
    component:AddCateComponent
  },
  {
    path:"category/:cateId/hotel/admin/add",
    component:AddHotelComponent
  },
  {
    path:"category/admin/edit/:id",
    component:EditCateComponent
  },
  {
    path:"category/:cateId/hotel/admin/edit/:id",
    component:EditHotelComponent
  },
  {
    path:"category",
    component:ListCateComponent
  },
  {
    path:"adhome",
    component:AdhomeComponent
  },
  {
    path:"category/:id/hotel",
    component: ListHotelComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
