import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  public loginForm !: FormGroup
  adminEmail: any;
  adminName: any;
  returl: string | undefined;
  userEmail: any;
  userName: any;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:["",[Validators.required,Validators.pattern("^(?!.*@gmail\\.gmail\\.)(?!.*\\.[^.]{1,4}\\.$)(?:[a-z0-9._%+-]+@(?:[a-z0-9-]+\\.)+(?:com|in|outlook\\.com|yahoo\\.com))$")]],
      password:["",[Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]]
    });
  }

get email(){
  return this.loginForm.get('email') as FormControl;
}
get password(){
  return this.loginForm.get('password') as FormControl;
}

url:any="http://localhost:3000/userdetails";
url1:any="http://localhost:3000/admin";

login() {
  this.http.get(this.url1)
    .subscribe((data: any) => {
      const admin = data.find((a: any) => {
        this.adminEmail=a.email;
          this.adminName=a.username;
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
      });

      if (admin) {
        sessionStorage.setItem('admin',this.adminEmail);
        sessionStorage.setItem('userName',this.adminName)
        alert("Admin login success");
        this.router.navigate(['/Admin'])
      } else {
        this.http.get(this.url)
          .subscribe((data: any) => {
            const user = data.find((a: any) => {
              this.userEmail=a.email;
              this.userName=a.name;
              return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
            });

            if (user) {
              sessionStorage.setItem('email',this.userEmail);
              sessionStorage.setItem('userName',this.userName)
              alert("Welcome Back "+this.userName);
              this.router.navigate(['/Comment'])

            } else {
              alert("Invalid email or password");
            }
          });
      }
    });
}
}

//   login(){
//     this.http.get<any>("http://localhost:3000/userdetails")
//     .subscribe(res=>{
//       const user = res.find((a:any)=>{
//         return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
//       });
//       if(user){
//         alert("Login Success");
//         this.loginForm.reset();
//         this.router.navigate(['/Comment'])
//       }
//       else{
//         alert("User Not Found");
//       }
//     },err=>{
//       alert("Something went wrong");
//     })
//   }
// }
