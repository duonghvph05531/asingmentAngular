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
    return this.http.get<any>(`${this.apiUrl}/${hotelId}`)
  }
}
