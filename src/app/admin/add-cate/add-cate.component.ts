import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {Router} from '@angular/router';
import{FormControl} from '@angular/forms';
@Component({
  selector: 'app-add-cate',
  templateUrl: './add-cate.component.html',
  styleUrls: ['./add-cate.component.css']
})
export class AddCateComponent implements OnInit {

  constructor(private cateService:CategoryService,
              private router:Router) { }
    category={
      name:new FormControl('')
    }
  ngOnInit() {
  }
  saveCategory(){
    let sendData={
      name:this.category.name.value,
    }
    this.cateService.addCategory(sendData).subscribe(data=>{
      this.category={
        name:new FormControl('')
      }
      this.router.navigate(['category']);
    });
  }
}
