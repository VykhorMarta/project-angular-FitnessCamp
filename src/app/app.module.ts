import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { MainImageComponent } from './header/main-image/main-image.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LocationComponent } from './location/location.component';
import { PriceComponent } from './price/price.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { RegistrationComponent } from './registration/registration.component';


import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSelectModule, MatOptionModule  } from '@angular/material';

const appRoutes: Routes = [
{path: 'aboutUs', component: AboutUsComponent},
{path: 'location', component: LocationComponent},
{path: 'price', component: PriceComponent},
{path: '', component: HeaderComponent},
{path: 'feedbacks', component: FeedbacksComponent},
{path: 'registration', component: RegistrationComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    MainImageComponent,
    FooterComponent,
    AboutUsComponent,
    LocationComponent,
    PriceComponent,
    FeedbacksComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
