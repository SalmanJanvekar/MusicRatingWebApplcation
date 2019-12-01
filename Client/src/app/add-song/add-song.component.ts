import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss']
})
export class AddSongComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addSong(){
    var Title = (<HTMLInputElement>document.getElementById("Title")).value;
    var Artist = (<HTMLInputElement>document.getElementById("Artist")).value;
    var Album = (<HTMLInputElement>document.getElementById("Album")).value;
    var Year = (<HTMLInputElement>document.getElementById("Year")).value;
    var Genre = (<HTMLInputElement>document.getElementById("Genre")).value;


    var uri = 'http://localhost:1234';

    //defines http & opens post request
    const http = new XMLHttpRequest();
    http.open("POST", uri+'/Music/addSong')
  
    let body = new URLSearchParams();

    //appends new song to body of the request
    body.append("Title", Title);
    body.append("Artist", Artist);
    body.append("Album", Album);
    body.append("Year", Year);
    body.append("Genre", Genre);

    //sends http response
    http.send(body);
  }
}
