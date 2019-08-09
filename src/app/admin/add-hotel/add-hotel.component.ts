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
              private router:Router) {}

  ngOnInit() {
  }

}
