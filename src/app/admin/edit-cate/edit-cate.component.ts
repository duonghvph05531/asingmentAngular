import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {Router,ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup,Validator} from '@angular/forms';
@Component({
  selector: 'app-edit-cate',
  templateUrl: './edit-cate.component.html',
  styleUrls: ['./edit-cate.component.css']
})
export class EditCateComponent implements OnInit {

  constructor(private cateService:CategoryService,
              private router:Router,
              private route:ActivatedRoute) { }

  cateForm= new FormGroup({
    name:new FormControl(''),
  });
  cateId:"string";
  ngOnInit() {
    this.cateId=this.route.snapshot.params.id;
    return this.cateService.getCateById(this.cateId).subscribe(data=>{
      this.cateForm.setValue({
          name: data.name,
      })
    });
  }
  saveCategory(){
    this.cateService.editCategory(this.cateId,this.cateForm.value).subscribe(data=>{
      this.router.navigate(['category']);
    });
  }

}
