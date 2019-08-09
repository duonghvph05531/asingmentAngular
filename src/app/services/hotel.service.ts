import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HotelService {
  apiUrl="http://5d415eae75f67300146b3b63.mockapi.io/hotel";
  constructor(private http:HttpClient) { }

  getListHotel(){
    return this.http.get<any[]>(this.apiUrl);
  }
  getHotelById(hotelId){
    return this.http.get<any>(`${this.apiUrl}/${hotelId}`);
  }
  editHotel(hotelId,data){
    let url = `${this.apiUrl}/${hotelId}`;
    return this.http.put<any>(url, data);
  }
  removeHotel(hotelId){
    let removeUrl = `${this.apiUrl}/${hotelId}`;
  	return this.http.delete<any>(removeUrl);
  }
  addHotel(data){
    return this.http.put<any>(this.apiUrl,data);
  }

}
