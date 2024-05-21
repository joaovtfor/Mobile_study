import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-cad',
  templateUrl: './add-new-cad.component.html',
  styleUrls: ['./add-new-cad.component.scss'],
})
export class AddNewCadComponent  implements OnInit {

  task = {
    id: Math.floor((Math.random()*6) + 1),
    name: '',
    age: '',
    address: '',
    city: '',
  }

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  close() {
    this.modalController.dismiss(this.task);
  }

}
