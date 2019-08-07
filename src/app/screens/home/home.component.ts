import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {HotelService} from '../../services/hotel.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cateService:CategoryService,
              private hotelService:HotelService) { }
  category=[
  ];
  hotels=[

  ];
  ngOnInit() {
    this.cateService.getListCategory().subscribe((data)=>{
      this.category=data;
    });
    this.hotelService.getListHotel().subscribe((data)=>{
      this.hotels=data;
    });
  }

}
