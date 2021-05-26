import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { emailValidator, matchingPasswords } from '../../theme/utils/app-validators';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public router:Router, public snackBar: MatSnackBar , private authService : AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.compose([Validators.required, emailValidator])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])] 
    });

    this.registerForm = this.formBuilder.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': ['', Validators.compose([Validators.required, emailValidator])],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required]
    },{validator: matchingPasswords('password', 'confirmPassword')});

  }

  ////////////////// login /////////////////////

  public onLoginFormSubmit():void {
    if (this.loginForm.valid) {
      
      this.authService.login(this.loginForm.value).subscribe((res:any)=>{
         
        localStorage.setItem('token',res.token);
         
        if(JSON.parse(JSON.stringify(res)).message=='email or password is invalid!'){

          this.snackBar.open('verify your password or email', '×', { panelClass: 'warn', verticalPosition: 'top', duration: 3000 });

         
         }
         else if (JSON.parse(JSON.stringify(res)).connectedUser.role=='admin'){      
           
          this.snackBar.open('admin login successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 })

          
          this.router.navigateByUrl('account/addProduct')
         
         }
         else {
          this.snackBar.open('client login successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 })

          this.router.navigateByUrl('/')

         }

       })
     }
  }



//////////////////// register /////////////////////


public onRegisterFormSubmit():void {

  if (this.registerForm.valid && this.registerForm.controls.password.value==this.registerForm.controls.confirmPassword.value) {

    this.authService.register(this.registerForm.value).subscribe((res)=>{

      if( res == 'email  exist!'){

        this.snackBar.open("email exist !", '×', { panelClass: 'warn', verticalPosition: 'top', duration: 3000 });

      }
      else{

        this.snackBar.open('You registered successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 })

      }
    })
    
  }

}


}
