import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailCateComponent } from './admin/detail-cate/detail-cate.component';
import { DetailHotelComponent } from './screens/detail-hotel/detail-hotel.component';
import { AddCateComponent } from './admin/add-cate/add-cate.component';
import { AddHotelComponent } from './admin/add-hotel/add-hotel.component';
import { EditCateComponent } from './admin/edit-cate/edit-cate.component';
import { EditHotelComponent } from './admin/edit-hotel/edit-hotel.component';
import { ListCateComponent } from './admin/list-cate/list-cate.component';
import { AdhomeComponent } from './admin/adhome/adhome.component';
import { ListHotelComponent } from './admin/list-hotel/list-hotel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailCateComponent,
    DetailHotelComponent,
    AddCateComponent,
    AddHotelComponent,
    EditCateComponent,
    EditHotelComponent,
    ListCateComponent,
    AdhomeComponent,
    ListHotelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
