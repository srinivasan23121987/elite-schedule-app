import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyTeamsPage } from '../my-teams/my-teams';

/**
 * Generated class for the TournamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
navigate(){
  this.navCtrl.pop()
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentsPage');
  }

}
