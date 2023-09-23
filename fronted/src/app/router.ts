import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "login",
    loadComponent: ()=> import("./component/auth/component/login/login.component").then(c=> c.LoginComponent)
  },
  {
    path: "register",
    loadComponent: ()=> import("./component/auth/component/register/register.component").then(c=>c.RegisterComponent)
  },
  {
    path: "",
    loadComponent: ()=> import("./component/layout/layout.component").then(c=> c.LayoutComponent),
    children: [
      {
        path: "",
        loadComponent: ()=> import("./component/home/home.component").then(c=> c.HomeComponent)
      },
      {
        path: "categories",
        loadComponent: ()=> import("./component/categories/categories.component").then(c=>c.CategoriesComponent)
      }
    ]
  }
]
