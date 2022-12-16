import { Component, Input, OnInit, Output } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
@Input() ModalId='';

  constructor(public modal: ModalService) { 
    
  }

  ngOnInit(): void {
  }

  onmodalclose($event:Event){
    $event.preventDefault();
    this.modal.togglemodeltoOpen(this.ModalId)
  }

}
