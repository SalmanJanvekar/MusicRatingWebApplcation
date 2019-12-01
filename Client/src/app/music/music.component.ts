import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource} from '@angular/material';

import {song} from './music.model';
import {MusicService} from './music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  
  song: song[];
  displayedColumns = ['Title', 'Artist', 'Album', 'Year', 'Genre', 'Rating'];


  constructor(private musicService: MusicService, private router: Router) { }

  ngOnInit() {
    this.fetchSongs();
  }

  fetchSongs() {
    this.musicService
      .getSongs()
      .subscribe((data: song[])=>{
        this.song = data;
        console.log('Data Requested ...')
        console.log(this.song);
      })
  }

  editSong(id){
    this.router.navigate(['/Music/'+id]);
  }

  deleteSong(id){
    this.musicService.deleteSong(id).subscribe(()=>{
        this.fetchSongs();
    })
  }

}

