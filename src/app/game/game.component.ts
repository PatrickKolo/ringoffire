import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  pickCardAnimation = false;
  currentCard: string = '';
  game: Game;


  constructor() {}

  ngOnInit() : void {
    this.newGame();
  }

  newGame(){
  this.game = new Game();
 
  }
  
  
  takeCard() {
    if (!this.pickCardAnimation) {
    this.currentCard = this.game.stack.pop();
    this.pickCardAnimation = true;
    
    console.log('new card:' + this.currentCard);
    console.log('Game is',  this.game);

    setTimeout(() => {
      this.game.playedCards.push(this.currentCard);
      this.pickCardAnimation = false;
    }, 1000);

  }
}

}