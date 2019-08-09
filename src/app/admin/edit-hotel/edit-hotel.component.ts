import { Component, OnInit } from '@angular/core';
import {HotelService} from '../../services/hotel.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.css']
})
export class EditHotelComponent implements OnInit {

  constructor(  	private route: ActivatedRoute,
    private router: Router,
    private hotelService: HotelService) { }
    hotelForm = new FormGroup({
    hotel_name: new FormControl(''),
    image: new FormControl(''),
    address:new FormControl(''),
    });
    hotelId:"string"
  ngOnInit() {
    this.hotelId = this.route.snapshot.params.id;
  	this.hotelService.getHotelById(this.hotelId)
  					.subscribe(data => {
  						this.hotelForm.setValue({
  							hotel_name: data.hotel_name,
                image: data.image,
                address:data.address
  						});
  					});
  }
  saveHotel(){
  	this.hotelService.editHotel(this.hotelId, this.hotelForm.value)
  					.subscribe(data => {
  						console.log(data);
  						this.router.navigate(['/hotel']);
  					})
  }

}
