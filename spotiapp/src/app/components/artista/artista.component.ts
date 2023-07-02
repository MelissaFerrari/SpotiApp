import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent  {
  artista:any={};
  toptracks:any=[]=[];
  loading:boolean=true;
  constructor(private router:ActivatedRoute,
              private spotify:SpotifyService){
    this.router.params.subscribe(params=>{
     this.getArtista(params['id']);
     this.getTopTracks(params['id']);
    });
   }
   getArtista(id:string){
     this.spotify.getArtista(id).subscribe((data:any)=>{
      console.log(data);
      this.artista=data;
      this.loading=false;
     });
   }
   getTopTracks(id:string){
     this.spotify.getTopTracks(id).subscribe(data=>{
      console.log(data);
      this.toptracks=data;
     });
   }

}