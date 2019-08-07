import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl="http://5d415eae75f67300146b3b63.mockapi.io/category";
  constructor(private http:HttpClient) { }

  public getListCategory(){
    return this.http.get<any[]>(this.apiUrl);
  }
  public removeCategory(cateId){
    let removeUrl=`${this.apiUrl}/${cateId}`;
  	return this.http.delete<any>(removeUrl);
  }
  public addCategory(data){
    return this.http.post<any>(this.apiUrl,data);
  }
}
