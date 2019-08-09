import { Component, OnInit } from '@angular/core';
import {HotelService} from '../../services/hotel.service';
import { filter } from 'minimatch';
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
  removeHotel(hotel){
    let conf = confirm(`Bạn có chắc chắn muốn xóa khách sạn này ${hotel.hotel_name} ?`)
    if(conf){
  		this.hotelService.removeHotel(hotel.id)
			.subscribe(data => {
				this.hotels = this.hotels
						.filter(item => item.id != hotel.id);
			});
    }
  }

}
