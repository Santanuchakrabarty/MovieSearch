import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  
  @Input() movie!: Movie;  
  
  constructor() { }

  ngOnInit(): void {
  }

}
