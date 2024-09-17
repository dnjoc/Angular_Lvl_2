export interface Pelicula {
//   results: any;
//   id: number;
//   title: string;
//   release_date: string;
//   overview: string;
//   poster_path: string;
//   popularity: number;
//   vote_average: number;
//   // Agregue otras propiedades según sea necesario
// }
dates:         Dates;
    page:          number;
    results:       Movie[];
    total_pages:   number;
    total_results: number;
}

export interface Dates {
    maximum: string;
    minimum: string;
}

export interface Movie {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      string;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export enum OriginalLanguage {
    En = "en",
    Es = "es",
    Ja = "ja",
}
