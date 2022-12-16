import { Injectable } from '@angular/core';

interface Imodal {
  id: string;
  isvisible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private objImodal: Imodal[] = [];
  private isvisible = false;
  constructor() {}

  register(id: string) {
    this.objImodal.push({
      id,
      isvisible: false,
    });
  }

  ismodelopen(id: string): boolean {
    return Boolean(
      this.objImodal.find((Element) => Element.id === id)?.isvisible
    );
  }

  togglemodeltoOpen(id: string) {
    const modal = this.objImodal.find((Element) => Element.id === id);
    console.log(this.objImodal);
    if (modal != null) {
      modal.isvisible = !modal.isvisible;
    } else {
      this.register(id);
      var objmodal = this.objImodal.find((Element) => Element.id === id);
      if (objmodal != null) {
        objmodal.isvisible = !objmodal.isvisible;
      }
    }
  }
}
