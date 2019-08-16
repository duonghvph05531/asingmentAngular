import { Component, OnInit } from '@angular/core';
import {HotelService} from '../../services/hotel.service';
import { filter } from 'minimatch';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.css']
})
export class ListHotelComponent implements OnInit {

  constructor(private hotelService:HotelService,
              private router:Router,
              private route:ActivatedRoute,
              private cateService:CategoryService) { }
  hotels=[];
  category={

  };
  cateId:"string";
  ngOnInit() {
    this.cateId=this.route.snapshot.params.id;
    return this.hotelService.getListHotel(this.cateId).subscribe(data=>{
      this.hotels=data;
    });
  }
  removeHotel(hotel){
    let conf = confirm(`Bạn có chắc chắn muốn xóa khách sạn này ${hotel.hotel_name} ?`)
    if(conf){
  		this.hotelService.removeHotel(hotel.categoryId,hotel.id)
			.subscribe(data => {
				this.hotels = this.hotels
						.filter(item => item.id != hotel.id);
			});
    }
  }

}
