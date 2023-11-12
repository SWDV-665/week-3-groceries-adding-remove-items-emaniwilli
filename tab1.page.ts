import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title="Grocery";

  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 1
    },
    {
      name: "Banana",
      quantity: 3
    },
    {
      name: "Sugar",
      quantity: 1
    }
  ];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {}

  async removeItem(item: any, index: any) {
    console.log("Removing Item -", index);
    const toast = this.toastCtrl.create({
      message: "Removing Item - " + index + "....",
      duration: 3000
    });
    (await toast).present();

    this.items.splice(index, 1);
  };

  addItem() {
    console.log("Adding Item");
    this.showAddItemPrompt();
  }

  async showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      message: "Enter the name and quantity of the grocery items you would like to add",
      inputs: [
        {
          name: "name",
          placeholder: "Item"
        },
        {
          name: "quantity",
          placeholder: "Quantity"
        },
      ],
      buttons: [
        {
          text: "Add",
          handler: (item: any) => {
            console.log("Item Added", item);
            this.items.push(item);
          }
        },
        {
          text: "Cancel",
          handler: (item: any) => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    (await prompt).present();
  }


  }

  