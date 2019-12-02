import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  
  song = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.song = [];
    this.fetchSongs();
  }

  fetchSongs() {
    var uri = 'http://localhost:1234';
    
    //routes to server to get all songs
    this.http.get(uri +'/Music/music').subscribe((data) => {
      Object.values(data).forEach(element => {
        Object.values(element).forEach(item => {
          this.song.push({
            Title: item["Title"],
            Artist: item["Artist"],
            Album: item["Album"],
            Year: item["Year"],
            Genre: item["Genre"],
            Rating: item["Rating"],
          })
        })
        console.log(this.song);
      });
    })
  }


  editSong(id){
    
  }

  deleteSong(id){
    
  
  }

  
}

