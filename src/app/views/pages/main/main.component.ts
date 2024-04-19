import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../../services/hotels.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{

  hotelData$!: Observable<any>

  constructor(
    private http: HttpClient, 
    private hotelsService: HotelsService
  ){}

  ngOnInit(): void {
    this.hotelData$ = this.hotelsService.getHotels()

      
  }

}
