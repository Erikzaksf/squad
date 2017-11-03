import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  players: Player[] = [
    new Player("FunkinFresh","PlayerUnknows Battlegrounds, Rust, FortniteBR, The Forest, Paladins", "Survival, FPS, Action/Adventure", 1)
  ]






}
