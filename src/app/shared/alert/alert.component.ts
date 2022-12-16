import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() color:string=''
 
  constructor() { }
get bgcolor(){
  console.log(this.color);
  return `bg-${this.color}-400`
}
  ngOnInit(): void {
  }

}
