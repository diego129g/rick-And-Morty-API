import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { AllepisodesComponent } from './allepisodes/allepisodes.component';



@NgModule({
  declarations: [AllCharactersComponent,AllepisodesComponent]
  ,
  imports: [
    CommonModule
  ],
  exports: [AllCharactersComponent,AllepisodesComponent]
})
export class SharedComponentsModule { }
