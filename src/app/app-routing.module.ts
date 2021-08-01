import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ClientsComponent } from './clients/clients.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouteguardService } from './routeguard.service';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HeaderComponent },
  { path: 'About', component: IntroComponent },
  { path: 'Gallery', component: GalleryComponent },
  { path: 'Blog', component: BlogComponent },
  { path: 'Services', component: ContentComponent, canActivate: [RouteguardService] },
  { path: 'Testimonials', component: TestimonialComponent },
  { path: 'Clients', component: ClientsComponent },
  { path: 'Login', component: LoginComponent},
  { path: 'Contactus', component: ContactusComponent},
  { path: '404', component: NotfoundComponent},
  { path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
