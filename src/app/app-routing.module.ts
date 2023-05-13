import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { MovieSearchComponent } from "./movie-search/movie-search.component";
import { MovieListComponent } from "./movie-list/movie-list.component";

const routes: Routes = [
  { path: "", component: MovieSearchComponent },
  { path: "movie-details", component: MovieDetailComponent },
  { path: "movie-list", component: MovieListComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
