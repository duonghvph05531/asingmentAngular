import { Component, OnInit } from '@angular/core';
import {HotelService} from '../../services/hotel.service';
@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.css']
})
export class ListHotelComponent implements OnInit {

  constructor(private hotelService:HotelService) { }
  hotels=[];
  ngOnInit() {
    return this.hotelService.getListHotel().subscribe(data=>{
      this.hotels=data;
    });
  }

}
