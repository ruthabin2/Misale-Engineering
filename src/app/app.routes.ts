import type { Routes } from "@angular/router"
import { HomeComponent } from "./pages/home/home.component"
import { AboutComponent } from "./pages/about/about.component"
import { ProductsComponent } from "./pages/products/products.component"
// import { ServicesComponent } from "./pages/services/services.component"
// import { IndustriesComponent } from "./pages/industries/industries.component"
// import { ProjectsComponent } from "./pages/projects/projects.component"
// import { CareersComponent } from "./pages/careers/careers.component"
// import { BlogComponent } from "./pages/blog/blog.component"
// import { ContactComponent } from "./pages/contact/contact.component"
// import { TestimonialsComponent } from "./pages/testimonials/testimonials.component"
// import { FaqComponent } from "./pages/faq/faq.component"
// import { SupportComponent } from "./pages/support/support.component"

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "products", component: ProductsComponent },
//   { path: "services", component: ServicesComponent },
//   { path: "industries", component: IndustriesComponent },
//   { path: "projects", component: ProjectsComponent },
//   { path: "careers", component: CareersComponent },
//   { path: "blog", component: BlogComponent },
//   { path: "contact", component: ContactComponent },
//   { path: "testimonials", component: TestimonialsComponent },
//   { path: "faq", component: FaqComponent },
//   { path: "support", component: SupportComponent },
  { path: "**", redirectTo: "" },
]

