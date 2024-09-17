import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Movie, Pelicula } from "../interfaces/pelicula";
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apiKey = 'f79bf9cec43ae2463c062b8b8b33d7e5';
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

 //funcion para hacer peticion get al API´
 getPopulares(): Observable<Movie[]> {
  return this.http.get<Pelicula>(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`).pipe(map((res)=>res.results)
);
   }
  // getUser() {
  //   this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=f79bf9cec43ae2463c062b8b8b33d7e5&language=en-US&page=1').subscribe((data) => {
  //     console.log(data);
  //     return data;
  //   })
  // }
}
