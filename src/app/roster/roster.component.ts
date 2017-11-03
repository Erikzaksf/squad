import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent {

  constructor(private router: Router) { }



  players: Player[] = [
    new Player("FunkinFresh","PlayerUnknows Battlegrounds, Rust, FortniteBR, The Forest, Paladins", "Survival, FPS, Action/Adventure", 1)
  ]

  goToDetailPage(clickedPlayer: Player) {
    this.router.navigate(['players', clickedPlayer.id]);
  };

}
