import { Component, OnInit } from '@angular/core';
import { Team } from '../team.model';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-teamdetail',
  templateUrl: './teamdetail.page.html',
  styleUrls: ['./teamdetail.page.scss'],
})
export class TeamdetailPage implements OnInit {
  team: Team;
  id: string;
  constructor(private route: ActivatedRoute,
    private teamService: TeamService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('teamId');
    this.team = this.teamService.getTeam(this.id);
  }

}
