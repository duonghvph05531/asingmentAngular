import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
@Component({
  selector: 'app-list-cate',
  templateUrl: './list-cate.component.html',
  styleUrls: ['./list-cate.component.css']
})
export class ListCateComponent implements OnInit {
  category=[];
  constructor(private cateService:CategoryService) { }

  ngOnInit() {
    return this.cateService.getListCategory().subscribe(data=>{
      this.category=data;
    });
  }

}
