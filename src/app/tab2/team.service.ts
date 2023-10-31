import { Injectable } from '@angular/core';
import { Team } from './team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private _teams: Team[] = [
    new Team(
      '1',
      "Boston Celtics",
      "Boston",
      "../assets/imgs/BOS.png",
      "Atlantic"
    ),
    new Team(
      '2',
      "New York Knicks",
      "New York ",
      "../assets/imgs/NYK.png",
      "Atlantic"
    ),
    new Team(
      '3',
      "Philadelphia 76ers",
      "Philadelphia",
      "../assets/imgs/PHI.png",
      "Atlantic"
    ),
    new Team(
      '4',
      "Toronto Raptors",
      "Toronto",
      "../assets/imgs/TOR.png",
      "Atlantic"
    ),
    new Team(
      '5',
      "Brooklyn Nets",
      "Brooklyn",
      "../assets/imgs/BKN.png",
      "Atlantic"
    ),
    new Team(
      '6',
      "Chicago Bulls",
      "Chicago",
      "../assets/imgs/CHI.png",
      "Central"
    ),
    new Team(
      '7',
      "Cleveland Cavaliers",
      "Cleveland",
      "../assets/imgs/CLE.png",
      "Central"
    ),
    new Team(
      '8',
      "Detroit Pistons",
      "Detroit",
      "../assets/imgs/DET.png",
      "Central"
    ),
    new Team(
      '9',
      "Indiana Pacers",
      "Indiana",
      "../assets/imgs/IND.png",
      "Central"
    ),
    new Team(
      '10',
      "Milwaukee Bucks",
      "Milwaukee",
      "../assets/imgs/MIL.png",
      "Central"
    ),
    new Team(
      '11',
      "Atlanta Hawks",
      "Atlanta",
      "../assets/imgs/ATL.png",
      "Southeast"
    ),
    new Team(
      '12',
      "Charlotte Hornets",
      "Charlotte",
      "../assets/imgs/CHA.png",
      "Southeast"
    ),
    new Team(
      '13',
      "Miami Heat",
      "Miami",
      "../assets/imgs/MIA.png",
      "Southeast"
    ),
    new Team(
      '14',
      "Orlando Magic",
      "Orlando",
      "../assets/imgs/ORL.png",
      "Southeast"
    ),
    new Team(
      '15',
      "Washington Wizards",
      "Washington",
      "../assets/imgs/WAS.png",
      "Southeast"
    ),
    new Team(
      '16',
      "Denver Nuggets",
      "Denver",
      "../assets/imgs/DEN.png",
      "Northwest"
    ),
    new Team(
      '17',
      "Minnesota Timberwolves",
      "Minnesota",
      "../assets/imgs/MIN.png",
      "Northwest"
    ),
    new Team(
      '18',
      "Oklahoma City Thunder",
      "Oklahoma",
      "../assets/imgs/OKC.png",
      "Northwest"
    ),
    new Team(
      '19',
      "Portland Trail Blazer",
      "Portland",
      "../assets/imgs/POR.png",
      "Northwest"
    ),
    new Team(
      '20',
      "Utah Jazz",
      "Utah",
      "../assets/imgs/UTA.png",
      "Northwest"
    ),
    new Team(
      '21',
      "Golden State Warriors",
      "San Francisco",
      "../assets/imgs/GSW.png",
      "Pacific"
    ),
    new Team(
      '22',
      "Los Angeles Laker",
      "Los Angeles",
      "../assets/imgs/LAL.png",
      "Pacific"
    ),
    new Team(
      '23',
      "Los Angeles Clippers",
      "Los Angeles",
      "../assets/imgs/LAC.png",
      "Pacific"
    ),
    new Team(
      '24',
      "Phoenix Suns",
      "Phoenix",
      "../assets/imgs/PHX.png",
      "Pacific"
    ),
    new Team(
      '25',
      "Sacramento Kings",
      "Sacramento",
      "../assets/imgs/SAC.png",
      "Pacific"
    ),
    new Team(
      '26',
      "Dallas Mavericks",
      "Dallas",
      "../assets/imgs/DAL.png",
      "Southwest"
    ),
    new Team(
      '27',
      "Houston Rockets",
      "Houston",
      "../assets/imgs/HOU.png",
      "Southwest"
    ),
    new Team(
      '28',
      "Memphis Grizzlies",
      "Memphis",
      "../assets/imgs/MEM.png",
      "Southwest"
    ),
    new Team(
      '29',
      "New Orleans Pelicans",
      "New Orleans",
      "../assets/imgs/NOP.png",
      "Southwest"
    ),
    new Team(
      '30',
      "San Antonio Spurs",
      "San Antonio",
      "../assets/imgs/SAS.png",
      "Southwest"
    ),
  ];
  get teams(){
    return [...this._teams];
  }
  constructor() { }
}
