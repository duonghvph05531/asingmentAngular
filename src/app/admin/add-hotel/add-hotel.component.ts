import { Component, OnInit } from '@angular/core';
import {HotelService} from '../../services/hotel.service';
import {Router,ActivatedRoute} from '@angular/router';
import {FormControl} from '@angular/forms';
import {CategoryService} from '../../services/category.service';
@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  constructor(private hotelService:HotelService,
              private router:Router,
              private route:ActivatedRoute,
              private cateService:CategoryService,
              ) {}
   hotel = {
    hotel_name: new FormControl(''),
    image: new FormControl(''),
    address:new FormControl(''),
  };
  cate={

  };
  cateId="0";
  ngOnInit() {
    this.cateId=this.route.snapshot.params.cateId;
    this.cateService.getCateById(this.cateId).subscribe(data=>{
      this.cate=data;
    });
  }
  saveHotel(){
    let sendData = {
      hotel_name: this.hotel.hotel_name.value,
      image: this.hotel.image.value,
      address:this.hotel.address.value,
    }
  	this.hotelService.addHotel(this.cateId,sendData)
    .subscribe(data => {
      console.log(data);
      this.hotel = {
        hotel_name: new FormControl(''),
        image: new FormControl(''),
        address: new FormControl(''),
      }
      this.router.navigate(['category/',this.cateId,'hotel']);
    });
}
  
}
