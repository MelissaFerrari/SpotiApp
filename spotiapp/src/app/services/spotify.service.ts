import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import{map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
   }
   getReleases(){
     let headers=new HttpHeaders({
      Authorization:'Bearer BQCYhYBH-zMhbHCWAAUoaQuja9MNx0plx0LT7WcnFvLMqQ6es1t51bl0Zn1Bv_ACsKAwPBRvnMs9hQMEMj9H0g285zrbMOrC617vBiUzOucJnhSSGRs' 
     });
    return  this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
          .pipe( map ((data:any) => {
            console.log("la data222",data);
              return data['albums'].items;
          }));
  }

  getArtista(id:string){
    let headers=new HttpHeaders({
      Authorization:'Bearer BQCYhYBH-zMhbHCWAAUoaQuja9MNx0plx0LT7WcnFvLMqQ6es1t51bl0Zn1Bv_ACsKAwPBRvnMs9hQMEMj9H0g285zrbMOrC617vBiUzOucJnhSSGRs' 
     });
    return  this.http.get('https://api.spotify.com/v1/artists/'+ id,{headers});
           
  }

  getArtists(termino:string){
    let headers=new HttpHeaders({
      Authorization:'Bearer BQCYhYBH-zMhbHCWAAUoaQuja9MNx0plx0LT7WcnFvLMqQ6es1t51bl0Zn1Bv_ACsKAwPBRvnMs9hQMEMj9H0g285zrbMOrC617vBiUzOucJnhSSGRs' 
     });
    return  this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers})
            .pipe( map ((data:any)=>{
                console.log("la data",data);
               return data['artists'].items;
    }));
  }
  getTopTracks(id:string){
    let headers=new HttpHeaders({
      Authorization:'Bearer BQCYhYBH-zMhbHCWAAUoaQuja9MNx0plx0LT7WcnFvLMqQ6es1t51bl0Zn1Bv_ACsKAwPBRvnMs9hQMEMj9H0g285zrbMOrC617vBiUzOucJnhSSGRs' 
     });
    return  this.http.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=us`,{headers})
         .pipe( map ((data:any) =>{
              return data['tracks']
        }
            ));
  }
}