import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {HotelService} from '../../services/hotel.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cateService:CategoryService,
              private hotelService:HotelService,
              private router:Router,
              private route:ActivatedRoute) { }
  category=[
  ];
  cateId:"string";
  ngOnInit() {
    this.cateId=this.route.snapshot.params.id;
    this.cateService.getListCategory().subscribe((data)=>{
      this.category=data;
    });
  }

}
