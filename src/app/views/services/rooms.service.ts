import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  
  serverUrl: string = "https://hotelbooking.stepprojects.ge/api"


  constructor(
    private http: HttpClient
  ) { 

  }

  getRooms(): Observable<any>{
    return this.http.get(`${this.serverUrl}/Rooms/GetAll`)
  }

  getRoomById(roomId: number): Observable<any>{
    return this.http.get(`${this.serverUrl}/Rooms/GetRoom/${roomId}`)
  }
  getAvailableRooms(): Observable<any> {
    return this.http.get(`${this.serverUrl}/Rooms/GetAvailableRooms`)
  }

  filterRoom(filterBody: any): Observable<any>{
    return this.http.post(`${this.serverUrl}/Rooms/GetFiltered`, filterBody)
  }

}
