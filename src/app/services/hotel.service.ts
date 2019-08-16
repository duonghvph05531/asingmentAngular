import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HotelService {
  apiUrl="http://5d415eae75f67300146b3b63.mockapi.io/category";
  constructor(private http:HttpClient) { }

  getListHotel(cateId){
    console.log(cateId);
  	return this.http.get<any[]>(`${this.apiUrl}/${cateId}/hotel/`);  
  }
  getHotelById(cateId,hotelId){
    return this.http.get<any>(`${this.apiUrl}/${cateId}/hotel/${hotelId}`);
  }
  editHotel(cateId,hotelId,data){
    let url = `${this.apiUrl}/${cateId}/hotel/${hotelId}`;
    return this.http.put<any>(url, data);
  }
  removeHotel(cateId,hotelId){
    let removeUrl = `${this.apiUrl}/${cateId}/hotel/${hotelId}`;
  	return this.http.delete<any>(removeUrl);
  }
  addHotel(cateId,data){
    let addUrl=`${this.apiUrl}/${cateId}/hotel`;
    return this.http.post<any>(addUrl,data);
  }

}
