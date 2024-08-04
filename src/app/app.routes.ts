import { Routes } from "@angular/router";
import { BlogComponent } from "./components/blog/blog.component";
import { HomeComponent } from "./components/home/home.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "blog",
    component: BlogComponent
  },
  {
    path: "portfolio",
    component: PortfolioComponent
  }
];
