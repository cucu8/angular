import { Component, Input } from '@angular/core';
import { Movie } from '../movie/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent {
  @Input() detailSelectedMovie: Movie = { id: -1, name: '' };

  updateData(data: string): void {
    if (data) this.detailSelectedMovie.name = data;
  }
}
