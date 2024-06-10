import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AddNewCadComponent } from '../add-new-cad/add-new-cad.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tasks = [
    {id: 1, name: 'John Travolta', age: 21, city: 'São Borja', address: 'Rua teste 1'},
    {id: 2, name: 'John Smith', age: 19, city: 'Carazinho', address: 'Rua teste 2'},
    {id: 3, name: 'John Lennon', age: 99, city: 'Passo Fundo', address: 'Rua teste 3'},
    {id: 4, name: 'John Senna', age: 30, city: 'Marau', address: 'Rua teste 4'},
  ]

  constructor(
    private modalController: ModalController,
    private nav: NavController
  ) {}

  async addNew() {
    const modal = await this.modalController.create({
      component: AddNewCadComponent,
      cssClass: 'my-custom-class',
    });
    await modal.present();
    const newTask = await modal.onDidDismiss();
    console.log(newTask.data);
    if (newTask.data.description != '' ) {
      this.tasks.push(newTask.data);
    };
    console.log(this.tasks);
  }

  async delete(id: number) {
    this.tasks = this.tasks.filter(item => item.id != id);
  }

}