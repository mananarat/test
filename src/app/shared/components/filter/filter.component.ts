import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  
  @Output()filterBodyEmiter: EventEmitter<any> = new EventEmitter()

  constructor(
    
  ){}

  @ViewChild("form")form!: NgForm

  submit(form: NgForm){
    this.filterBodyEmiter.emit(form.value)

  }

}
