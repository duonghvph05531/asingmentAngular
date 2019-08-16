import { Component, OnInit } from '@angular/core';
import {HotelService} from '../../services/hotel.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-detail-hotel',
  templateUrl: './detail-hotel.component.html',
  styleUrls: ['./detail-hotel.component.css']
})
export class DetailHotelComponent implements OnInit {

  constructor(private hotelService:HotelService,
              private router:Router,
              private route:ActivatedRoute) { }

  id="0";
  cateId="0";
  hotel={
    hotel_name:"",
    image:"",
    address:"",
  }

  ngOnInit() {
    this.cateId=this.route.snapshot.params.cateId;
    this.id =this.route.snapshot.params.id;
    this.hotelService.getHotelById(this.cateId,this.id).subscribe(data=>{
    this.hotel=data;
    });
  }

}
