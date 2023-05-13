import { Component,Input } from '@angular/core';

// import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { Observable } from 'rxjs';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  // @Input() movie!: Movie;

  query: any;
  movies$: Observable<any> = new Observable<any>();

  constructor(private readonly movieService: MovieService) {
 
  }

  getSearchResults() {
    this.movies$ = this.movieService.searchMovie(this.query);
  }

}