import { Component, OnInit } from '@angular/core';
import { Team } from './team.model';
import { TeamService } from './team.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  loadedTeams: Team[];
  constructor(private teamService: TeamService) {}
  ngOnInit() {
    this.loadedTeams = this.teamService.teams;
  }
}
