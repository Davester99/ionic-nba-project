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
      "TD Garden, 100 Legends Way, Boston, MA 02114",
      "../assets/imgs/BOS.png",
      "Atlantic",
      "The Boston Celtics are one of the most storied franchises in the NBA. With a rich history of championships, they continue to contend for titles. Star players like Jayson Tatum and Jaylen Brown lead the way, and their emphasis on defense and teamwork makes them perennial playoff contenders."
    ),
    new Team(
      '2',
      "New York Knicks",
      "Madison Square Garden, 4 Pennsylvania Plaza, New York, NY 10001  ",
      "../assets/imgs/NYK.png",
      "Atlantic",
      "The New York Knicks, with a passionate fan base, are on an upward trajectory with their young talent and a renewed sense of competitiveness."
    ),
    new Team(
      '3',
      "Philadelphia 76ers",
      "Wells Fargo Center, 3601 S Broad St, Philadelphia, PA",
      "../assets/imgs/PHI.png",
      "Atlantic",
      "Led by Joel Embiid and Ben Simmons, the Philadelphia 76ers are perennial playoff contenders with a strong focus on defense and teamwork."
    ),
    new Team(
      '4',
      "Toronto Raptors",
      "Scotiabank Arena, Toronto, ON M5J 2X2, Canada",
      "../assets/imgs/TOR.png",
      "Atlantic",
      "The Toronto Raptors, led by Pascal Siakam, clinched an NBA championship in 2019. They are a competitive team in the Eastern Conference."
    ),
    new Team(
      '5',
      "Brooklyn Nets",
      "Barcays Center, 620 Atlantic Ave, Brooklyn, NY 11217",
      "../assets/imgs/BKN.png",
      "Atlantic",
      "The Brooklyn Nets are a powerhouse with a star-studded roster, featuring Kevin Durant, James Harden, and Kyrie Irving. This trio has made the Nets one of the top championship favorites in the league, known for their high-scoring and fast-paced style."
    ),
    new Team(
      '6',
      "Chicago Bulls",
      "United Center, 1901 W Madison St, Chicago, IL 60612",
      "../assets/imgs/CHI.png",
      "Central",
      "The Chicago Bulls are in a rebuilding phase, looking to recapture their championship legacy. Zach LaVine is their star player, and they're working on developing young talent to rebuild their prominence."
    ),
    new Team(
      '7',
      "Cleveland Cavaliers",
      "Rocket Mortgage FieldHouse, 1 Center Court, Cleveland, OH 44115",
      "../assets/imgs/CLE.png",
      "Central",
      "The Cavaliers are in a developmental phase, focusing on nurturing their young prospects and building a strong foundation for future success."
    ),
    new Team(
      '8',
      "Detroit Pistons",
      "Little Caesars Arena, 2645 Woodward Ave, Detroit, MI 48201",
      "../assets/imgs/DET.png",
      "Central",
      "The Detroit Pistons are in the early stages of a rebuild, aiming to develop their young talent and lay the groundwork for a competitive future."
    ),
    new Team(
      '9',
      "Indiana Pacers",
      "Gainbridge Fieldhouse, 125 S Pennsylvania St, Indianapolis, IN 46204",
      "../assets/imgs/IND.png",
      "Central",
      "The Indiana Pacers are known for their competitive style of play in the Eastern Conference. They consistently compete for playoff berths and have a history of strong defense."
    ),
    new Team(
      '10',
      "Milwaukee Bucks",
      "Fiserv Forum, 1111 Vel R. Phillips Ave, Milwaukee, WI 53203",
      "../assets/imgs/MIL.png",
      "Central",
      "Led by two-time MVP Giannis Antetokounmpo, the Milwaukee Bucks secured an NBA championship in 2021. Their style is characterized by strong defense and transition play."
    ),
    new Team(
      '11',
      "Atlanta Hawks",
      "State Farm Arena, 1 State Farm Drive, Atlanta, GA 30303",
      "../assets/imgs/ATL.png",
      "Southeast",
      "The Atlanta Hawks are an Eastern Conference team on the rise. They've been building a promising future with young talent like Trae Young, John Collins, and De'Andre Hunter. Known for their exciting style of play, they made a strong playoff run in recent years, showing potential for greater success."
    ),
    new Team(
      '12',
      "Charlotte Hornets",
      "Spectrum Center, 333 E Trade St, Charlotte, NC 28202",
      "../assets/imgs/CHA.png",
      "Southeast",
      "The Charlotte Hornets, led by LaMelo Ball, are a young team with a bright future. They've shown glimpses of potential and aim to build a competitive squad in the coming years."
    ),
    new Team(
      '13',
      "Miami Heat",
      "FTX Arena, 601 Biscayne Blvd, Miami, FL 33132",
      "../assets/imgs/MIA.png",
      "Southeast",
      "The Miami Heat have a tradition of success, characterized by tough defense and deep playoff runs. They aim for another championship with a mix of experienced and young talent."
    ),
    new Team(
      '14',
      "Orlando Magic",
      "Amway Center, 400 W Church St, Orlando, FL 32801",
      "../assets/imgs/ORL.png",
      "Southeast",
      "The Orlando Magic are focusing on building for the future through player development and are working to become a competitive force in the coming years."
    ),
    new Team(
      '15',
      "Washington Wizards",
      "Capital One Arena, 601 F St NW, Washington, D.C. 20004",
      "../assets/imgs/WAS.png",
      "Southeast",
      "The Washington Wizards, featuring star Bradley Beal, aim to compete in the Eastern Conference and are looking to build a competitive roster."
    ),
    new Team(
      '16',
      "Denver Nuggets",
      "Ball Arena, 1000 Chopper Cir, Denver, CO 80204",
      "../assets/imgs/DEN.png",
      "Northwest",
      "The Denver Nuggets, led by MVP Nikola Jokić, have become a formidable presence in the Western Conference. They're known for their high-scoring games and are perennial playoff contenders."
    ),
    new Team(
      '17',
      "Minnesota Timberwolves",
      "Target Center, 600 N 1st Ave, Minneapolis, MN 55403",
      "../assets/imgs/MIN.png",
      "Northwest",
      "The Minnesota Timberwolves are in the early stages of development, looking to build a strong foundation for future success."
    ),
    new Team(
      '18',
      "Oklahoma City Thunder",
      "Paycom Center, 100 W Reno Ave, Oklahoma City, OK 73102",
      "../assets/imgs/OKC.png",
      "Northwest",
      "The Oklahoma City Thunder are in the process of rebuilding, with a strong emphasis on developing their young players and accumulating future assets."
    ),
    new Team(
      '19',
      "Portland Trail Blazer",
      "Moda Center, 1 N Center Ct St, Portland, OR 97227",
      "../assets/imgs/POR.png",
      "Northwest",
      "The Portland Trail Blazers are recognized for their dynamic backcourt of Damian Lillard and CJ McCollum. They consistently contend for playoff spots."
    ),
    new Team(
      '20',
      "Utah Jazz",
      "Vivint Arena, 301 S Temple, Salt Lake City, UT 84101",
      "../assets/imgs/UTA.png",
      "Northwest",
      "The Utah Jazz are known for their strong presence in the Western Conference, with a focus on three-point shooting and a team-oriented style of play."
    ),
    new Team(
      '21',
      "Golden State Warriors",
      "Chase Center, 1 Warriors Way, San Francisco, CA 94158",
      "../assets/imgs/GSW.png",
      "Pacific",
      "The Golden State Warriors, with Stephen Curry and Klay Thompson leading the way, have been a dominant force in recent years. They've won multiple championships behind their 'Splash Brothers' and are famous for their three-point shooting and fast-paced style of play."
    ),
    new Team(
      '22',
      "Los Angeles Laker",
      "Crypto.com Arena, 1111 S Figueroa St, Los Angeles, CA 90015",
      "../assets/imgs/LAL.png",
      "Pacific",
      "The Los Angeles Lakers are a historic franchise with a rich tradition of championships. With LeBron James and Anthony Davis, they are consistently in contention for NBA titles."
    ),
    new Team(
      '23',
      "Los Angeles Clippers",
      "Crypto.com Arena, 1111 S Figueroa St, Los Angeles, CA 90015",
      "../assets/imgs/LAC.png",
      "Pacific",
      "The LA Clippers are perennial championship contenders, driven by stars like Kawhi Leonard and Paul George. They are recognized for their strong two-way play."
    ),
    new Team(
      '24',
      "Phoenix Suns",
      "Footprint Center, 201 E Jefferson St, Phoenix, AZ 85004",
      "../assets/imgs/PHX.png",
      "Pacific",
      "The Phoenix Suns, led by Devin Booker and Chris Paul, made a surprising run to the NBA Finals in 2021. They are known for their fast-paced and high-scoring style."
    ),
    new Team(
      '25',
      "Sacramento Kings",
      "Golden 1 Center, 500 David J Stern Walk, Sacramento, CA 95814",
      "../assets/imgs/SAC.png",
      "Pacific",
      "The Sacramento Kings are in the process of rebuilding and are aiming to compete for playoff spots in the near future."
    ),
    new Team(
      '26',
      "Dallas Mavericks",
      "American Airlines Center, 2500 Victory Ave, Dallas, TX 75219 ",
      "../assets/imgs/DAL.png",
      "Southwest",
      "Led by Luka Dončić, the Dallas Mavericks have emerged as an exciting team with the potential for deep playoff runs. They're known for their dynamic offense and Dončić's incredible playmaking abilities."
    ),
    new Team(
      '27',
      "Houston Rockets",
      "Toyota Center, 1510 Polk St, Houston, TX 77002",
      "../assets/imgs/HOU.png",
      "Southwest",
      "The Houston Rockets are in the process of rebuilding, centered around a young core and a focus on player development for future success."
    ),
    new Team(
      '28',
      "Memphis Grizzlies",
      "FedExForum, 191 Beale St, Memphis, TN 38103",
      "../assets/imgs/MEM.png",
      "Southwest",
      "The Memphis Grizzlies, led by young star Ja Morant, have emerged as an exciting and competitive team with a promising future. They play a high-energy style of basketball."
    ),
    new Team(
      '29',
      "New Orleans Pelicans",
      "Smoothie King Center, 1501 Dave Dixon Dr, New Orleans, LA 70113",
      "../assets/imgs/NOP.png",
      "Southwest",
      "The New Orleans Pelicans, with star Zion Williamson, are on a quest to become playoff contenders. They are known for their up-tempo style of play."
    ),
    new Team(
      '30',
      "San Antonio Spurs",
      "AT&T Center, 1 AT&T Center Pkwy, San Antonio, TX 78219",
      "../assets/imgs/SAS.png",
      "Southwest",
      "The San Antonio Spurs, with a rich history of championships, are known for their fundamental and disciplined style of play. They are in the process of transition and development."
    ),
  ];
  get teams(){
    return [...this._teams];
  }
  getTeam(id:string){
    return{...this._teams.find(p => p.id === id)};
  }
  
  constructor() { }
}
