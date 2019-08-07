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
  removeCategory(cate){
    let conf = confirm(`Bạn có chắc chắn muốn xóa danh mục ${cate.name} ?`)
  	if(conf){
  		this.cateService.removeCategory(cate.id)
			.subscribe(data => {
				this.category = this.category
						.filter(item => item.id != cate.id);
			});
    }
  }

}
