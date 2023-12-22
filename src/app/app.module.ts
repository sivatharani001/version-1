import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnglishComponent } from './english/english.component';
import { HindiComponent } from './hindi/hindi.component';
import { KannadaComponent } from './kannada/kannada.component';
import { MalayalamComponent } from './malayalam/malayalam.component';
import { TamilComponent } from './tamil/tamil.component';
import { TeluguComponent } from './telugu/telugu.component';
import { HomeComponent } from './home/home.component';
import { CommentComponent } from './comment/comment.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EducationComponent } from './education/education.component';
import { TechnologyComponent } from './technology/technology.component';
import { SportsComponent } from './sports/sports.component';
import { WeatherComponent } from './weather/weather.component';
import { BusinessComponent } from './business/business.component';
import { AdminComponent } from './admin/admin.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NewspapersComponent } from './newspapers/newspapers.component';
import { BusinessadminComponent } from './businessadmin/businessadmin.component';
import { EducationadminComponent } from './educationadmin/educationadmin.component';
import { EnglishadminComponent } from './englishadmin/englishadmin.component';
import { HindiadminComponent } from './hindiadmin/hindiadmin.component';
import { KannadaadminComponent } from './kannadaadmin/kannadaadmin.component';
import { MalayalamadminComponent } from './malayalamadmin/malayalamadmin.component';
import { SportsadminComponent } from './sportsadmin/sportsadmin.component';
import { TamiladminComponent } from './tamiladmin/tamiladmin.component';
import { TechnologyadminComponent } from './technologyadmin/technologyadmin.component';
import { TeluguadminComponent } from './teluguadmin/teluguadmin.component';
import { WeatheradminComponent } from './weatheradmin/weatheradmin.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewcommentComponent } from './viewcomment/viewcomment.component';

@NgModule({
  declarations: [
    AppComponent,
    EnglishComponent,
    HindiComponent,
    KannadaComponent,
    MalayalamComponent,
    TamilComponent,
    TeluguComponent,
    HomeComponent,
    CommentComponent,
    EducationComponent,
    TechnologyComponent,
    SportsComponent,
    WeatherComponent,
    BusinessComponent,
    AdminComponent,
    FeedbackComponent,
    NewspapersComponent,
    BusinessadminComponent,
    EducationadminComponent,
    EnglishadminComponent,
    HindiadminComponent,
    KannadaadminComponent,
    MalayalamadminComponent,
    SportsadminComponent,
    TamiladminComponent,
    TechnologyadminComponent,
    TeluguadminComponent,
    WeatheradminComponent,
    UserdetailsComponent,
    LoginComponent,
    SignupComponent,
    ViewcommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
