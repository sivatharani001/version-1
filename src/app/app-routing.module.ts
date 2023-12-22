import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BusinessComponent } from './business/business.component';
import { BusinessadminComponent } from './businessadmin/businessadmin.component';
import { CommentComponent } from './comment/comment.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { EducationComponent } from './education/education.component';
import { EducationadminComponent } from './educationadmin/educationadmin.component';
import { EnglishComponent } from './english/english.component';
import { EnglishadminComponent } from './englishadmin/englishadmin.component';
import { HindiComponent } from './hindi/hindi.component';
import { HindiadminComponent } from './hindiadmin/hindiadmin.component';
import { HomeComponent } from './home/home.component';
import { KannadaComponent } from './kannada/kannada.component';
import { KannadaadminComponent } from './kannadaadmin/kannadaadmin.component';
import { LoginComponent } from './login/login.component';
import { MalayalamComponent } from './malayalam/malayalam.component';
import { MalayalamadminComponent } from './malayalamadmin/malayalamadmin.component';
import { NewspapersComponent } from './newspapers/newspapers.component';
import { SignupComponent } from './signup/signup.component';
import { SportsComponent } from './sports/sports.component';
import { SportsadminComponent } from './sportsadmin/sportsadmin.component';
import { TamilComponent } from './tamil/tamil.component';
import { TamiladminComponent } from './tamiladmin/tamiladmin.component';
import { TeluguComponent } from './telugu/telugu.component';
import { TeluguadminComponent } from './teluguadmin/teluguadmin.component';
import { TechnologyComponent } from './technology/technology.component';
import { TechnologyadminComponent } from './technologyadmin/technologyadmin.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ViewcommentComponent } from './viewcomment/viewcomment.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatheradminComponent } from './weatheradmin/weatheradmin.component';

const routes: Routes = [
  {
    path:'Admin',
    component:AdminComponent
  },
  {
    path:'Business',
    component:BusinessComponent
  },
  {
    path:'Businessadmin',
    component:BusinessadminComponent
  },
  {
    path:'Comment',
    component:CommentComponent
  },
  {
    path:'Feedback',
    component:FeedbackComponent
  },
  {
    path:'Education',
    component:EducationComponent
  },
  {
    path:'Educationadmin',
    component:EducationadminComponent
  },
  {
    path:'English',
    component:EnglishComponent
  },
  {
    path:'Englishadmin',
    component:EnglishadminComponent
  },
  {
    path:'Hindi',
    component:HindiComponent
  },
  {
    path:'Hindiadmin',
    component:HindiadminComponent
  },
  {
    path:'Home',
    component:HomeComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'Kannada',
    component:KannadaComponent
  },
  {
    path:'Kannadaadmin',
    component:KannadaadminComponent
  },
  {
    path:'Login',
    component:LoginComponent
  },
  {
    path:'Malayalam',
    component:MalayalamComponent
  },
  {
    path:'Malayalamadmin',
    component:MalayalamadminComponent
  },
  {
    path:'Newspapers',
    component:NewspapersComponent
  },
  {
    path:'Signup',
    component:SignupComponent
  },
  {
    path:'Sports',
    component:SportsComponent
  },
  {
    path:'Sportsadmin',
    component:SportsadminComponent
  },
  {
    path:'Tamil',
    component:TamilComponent
  },
  {
    path:'Tamiladmin',
    component:TamiladminComponent
  },
  {
    path:'Telugu',
    component:TeluguComponent
  },
  {
    path:'Teluguadmin',
    component:TeluguadminComponent
  },
  {
    path:'Technology',
    component:TechnologyComponent
  },
  {
    path:'Technologyadmin',
    component:TechnologyadminComponent
  },
  {
    path:'Weather',
    component:WeatherComponent
  },
  {
    path:'Weatheradmin',
    component:WeatheradminComponent
  },
  {
    path:'Userdetails',
    component:UserdetailsComponent
  },
  {
    path:'Viewcomment',
    component:ViewcommentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
