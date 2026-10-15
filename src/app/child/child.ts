import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child',
  styleUrl: './child.css',
  templateUrl: './child.html',
})
export class Child {
  @Input() studentName : string | undefined 
  @Output() selectedStudent = new EventEmitter()
  @Output() deleteStudent = new EventEmitter()

  whichUser(name:string|undefined){
     this.selectedStudent.emit(name)
  }

  delete(name:string|undefined){
    this.deleteStudent.emit(name)
  }
}
