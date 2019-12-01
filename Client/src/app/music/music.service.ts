import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MusicService {

  uri = 'http://localhost:1234';

  constructor(private http: HttpClient) { }

  
  getSongs(){
    return this.http.get(this.uri+'/Music/music')
  }

  getSongById(id){
    return this.http.get(this.uri+'/Music/:id');
  }

  addSong(Title, Artist, Album, Year, Genre, Rating){
    const song = {
        Title: Title,
        Artist: Artist,
        Album: Album,
        Year: Year,
        Genre: Genre,
        Rating: Rating,
    };
    return this.http.post(this.uri+'/Music/addSong', song);
  }

  updateSong(id, Title, Artist, Album, Year, Genre, Rating){
    const song = {
        Title: Title,
        Artist: Artist,
        Album: Album,
        Year: Year,
        Genre: Genre,
        Rating: Rating,
    };
    return this.http.put('${this.uri}/Music/${id}', song);
  }

  deleteSong(id){
    return this.http.get('${this.uri}/Music/${id}')
  }

}
