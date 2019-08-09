import { Component, OnInit } from '@angular/core';
import {HotelService} from '../../services/hotel.service';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  constructor(private hotelService:HotelService,
              private router:Router,
              ) {}
   hotel = {
  	hotel_name: new FormControl(''),
    image: new FormControl(''),
    address:new FormControl('')
  }
  ngOnInit() {
  }
  saveHotel(){
    let sendData = {
      name: this.hotel.hotel_name.value,
      image: this.hotel.image.value,
      address:this.hotel.address.value
    }
    
  	this.hotelService.addHotel(sendData)
    .subscribe(data => {
      console.log(data);
      this.hotel = {
        hotel_name: new FormControl(''),
        image: new FormControl(''),
        address: new FormControl('')
      }
      this.router.navigate(['hotel']);
    });
}
  
}
