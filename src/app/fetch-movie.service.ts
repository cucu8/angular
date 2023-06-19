import { Injectable } from '@angular/core';
import { Movie } from './movie/movie';
import { Movies } from './movie.datasource';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root',
})
export class FetchMovieService {
  //servis çağırıldıgında, servis mesajına 'Movie Service:Movies Called' bu mesajı yazıyor
  constructor(private loggingService: LoggingService) {}

  fetchMovie(): Observable<Movie[]> {
    this.loggingService.add('Movie Service:Movies Called');
    return of(Movies);
  }
}
