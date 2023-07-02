import { Component, OnInit } from '@angular/core';
import{SpotifyService} from '../../services/spotify.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-home-spo',
  templateUrl: './home-spo.component.html',
  styleUrls: ['./home-spo.component.scss']
})
export class HomeSpoComponent implements OnInit {
 nuevasCanciones:any[]=[];
 loading:boolean;
  constructor(private spotify:SpotifyService,
              private router:Router) 
  { this.loading=true;
  }

  ngOnInit() {
    this.getReleases();
  }

  getReleases(){
    this.spotify.getReleases().subscribe((data:any)=>{
        console.log(data);
        this.nuevasCanciones=data;
        this.loading=false;
      })
  }
  getSinger(cancion:any){
    let artistaId;
    if(cancion.type === 'artists'){
      artistaId=cancion.id;
      console.log("aca");
    }
    else{
      artistaId=cancion.artists[0].id;
    
    }
    this.router.navigate(['/artista',artistaId]);
  }
}