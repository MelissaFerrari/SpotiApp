import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent  {
  artistas:any[]=[];
  loading:boolean=false;
  constructor(private spotify:SpotifyService,private router:Router) { }

  buscar(termino:string){
    this.loading=true;
    this.spotify.getArtists(termino).subscribe((data:any)=>{
      this.artistas=data;
      this.loading=false;
    });
  }
 /*  getArtista(artista:any){
    let artistaId;
    if(artista.type === 'artists'){
      artistaId=artista.id;
      console.log("aca");
    }
    else{
      artistaId=artista.artists[0].id;
    
    }
    this.router.navigate(['/artista',artistaId]);
  } */

  getArtista(artista:any){
   console.log(artista);
   let artistaId;
   if(artista.type === 'artist'){
     artistaId=artista.id;
     console.log("aca");
     this.router.navigate(['/artista',artistaId]);
   }
  }

}