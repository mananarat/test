import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomsService } from '../../services/rooms.service';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrl: './room-detail.component.css'
})
export class RoomDetailComponent {
  data: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private roomService: RoomsService
  ){}

  ngOnInit(): void {
      this.activatedRoute.params.subscribe((res:any) => {
        let id = res["id"]
        this.roomService.getRoomById(id).subscribe((result:any) => {
          this.data = result
          console.log(this.data);
        })
      })
  }

}
