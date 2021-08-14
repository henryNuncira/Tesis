import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { loginI } from '../../models/login.interface';
import { responseI } from '../../models/response.interface';
import { usuarioI } from '../../models/usuario.inteface';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorState: boolean= false;
  errorMessage: any ="";
  loginForm !: FormGroup;
  usuario : loginI;
  constructor(private api:ApiService, private router:Router, private fb:FormBuilder) {
    const navigation= this.router.getCurrentNavigation();
    this.usuario = navigation?.extras?.state?.value;

    this.initForm();
  }



  private initForm(): void {
    this.loginForm = this.fb.group({
      nombreUsuario:['',[Validators.required, Validators.minLength(5)]],
      password:['',[Validators.required, Validators.minLength(5)]],
    });
  }

  isValidField(campo:string): boolean{
    const fieldName = this.loginForm.get(campo);
    return fieldName!.invalid && fieldName!.touched;
  }

  ngOnInit(): void {  }


   onLogin(form: usuarioI[]){
     this.api.loginByUsuario(form).subscribe(data =>{

      console.log(data);
      let dataResponse: responseI = data;

      if(dataResponse.state == 200){
        localStorage.setItem("token",dataResponse.token);
        swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Usuario Verificado, Bienvenido',
          showConfirmButton: false,
          timer: 1500
        })
        switch (dataResponse.rol) {

          case 1:
            this.router.navigate(['contAdmin']);
              break;
          case 2:
            this.router.navigate(['listadoVentas']);
              break;
          case 3:
            this.router.navigate(['contlistas']);
              break;

          default:
              console.log("No existe ese rol de usuario verifique sus credenciales");
              break;
      }

      }else{
        this.errorState = true;
        this.errorMessage = dataResponse.message;

      }
     });

   }

}
