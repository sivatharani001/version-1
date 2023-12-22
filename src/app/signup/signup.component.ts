import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  signupForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      // email: new FormControl (null, [Validators.email, Validators.required]),
      // name: new FormControl (null, [Validators.required, Validators.minLength(4)]),
      // password: new FormControl (null, [Validators.required, Validators.minLength(8)])

      name: ["",[Validators.required,Validators.pattern("^(?!.*(.).*\\1{3})[a-zA-Z][a-zA-Z0-9_-]{3,15}$")]],
      email:["",[Validators.required,Validators.pattern("^(?!.*@gmail\\.gmail\\.)(?!.*\\.[^.]{1,4}\\.$)(?:[a-z0-9._%+-]+@(?:[a-z0-9-]+\\.)+(?:com|in|outlook\\.com|yahoo\\.com))$")]],
      password:["",[Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]]
    });
  }

  get name(){
    return this.signupForm.get('name') as FormControl;
  }
  get email(){
    return this.signupForm.get('email') as FormControl;
  }
  get password(){
    return this.signupForm.get('password') as FormControl;
  }

  signUp(){
    this.http.post<any>("http://localhost:3000/userdetails",this.signupForm.value)
      .subscribe(res =>{
        alert("Signup Successfully");
        this.signupForm.reset();
        this.router.navigate(['/Login']);
      },err=>{
        alert("Something went worng")
      })
  }

}
