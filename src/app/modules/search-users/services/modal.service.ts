import {Injectable} from '@angular/core';
import Swal, {SweetAlertIcon, SweetAlertResult} from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() {
  }

  getAlert(title: string, icon: SweetAlertIcon): void {
    Swal.fire({
      title,
      icon
    });
  }

  getModalWithPromise(): Promise<SweetAlertResult<any>> {
    return Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Save`,
      denyButtonText: `Don't save`,
    });
  }
}
