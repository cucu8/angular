import { Component } from '@angular/core';
import { Movie } from '../movie/movie';
import { FetchMovieService } from '../fetch-movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  title = 'Movies List';

  selectedMovie: Movie = { id: -1, name: '' };
  movies: Movie[] = [];

  //1-constructor Movies componentten obje türedildiği anda çalışan bir yapı.
  //2-fetct işlemi yapıldıgıdan hemen çalışmasını isteriz.
  // 3-hemen çalıştıgı için servis elemanını constructor içine inject etmemiz gerekiyor.
  //4-fetctMovieService'in dependecy injection ile geldiğini belirtmemiz için,private eklememiz gerekiyor.
  constructor(private fetchMovieService: FetchMovieService) {
    //5-1- movieleri getirmek için 1. yol constructor icinde çagırmak
    // this.movies = this.fetchMovieService.fetchMovie();
  }
  //5-2- 2. yol ise class çagırışdıktan hemen sonra metod devreye girer.
  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchMovieService.fetchMovie().subscribe((movie) => {
      //databaseden gelen verileri, catcg gibi, subscribe metodu ile karşılarız
      //movies dizimiz movieler ile dolar.
      this.movies = movie;
    });
  }

  removeItem(id: number): void {
    this.movies.splice(id, 1);
  }

  setSelectedItem(data: Movie): void {
    this.selectedMovie = data;
    console.log(this.selectedMovie);
  }
}
