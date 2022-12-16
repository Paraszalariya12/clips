import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabscontainerComponent } from './tabscontainer/tabscontainer.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from "@angular/forms";
import { NgxMaskModule } from 'ngx-mask';
import { AlertComponent } from './alert/alert.component';



@NgModule({
  declarations: [
    ModalComponent,
    TabsComponent,
    TabscontainerComponent,
    InputComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
    
  ],
  exports:[
    ModalComponent,
    TabsComponent,
    TabscontainerComponent,
    InputComponent,
    AlertComponent
  ]
})
export class SharedModule { }
