import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';


@Component({
  selector: 'app-allepisodes',
  templateUrl: './allepisodes.component.html',
  styleUrls: ['./allepisodes.component.scss'],
})
export class AllepisodesComponent implements OnInit {

  allepisode: any;
  constructor(
    private randmService: RickAndMortyService,
  
    ) { }
  ngOnInit(){
    this.randmService.getAllEpisodes().then( (res1: any) => {
      this.allepisode = res1;
      console.log (this.allepisode);
    });
  }
 
  

}