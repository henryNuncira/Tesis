import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private route:Router){}

  // redirect(flag:string):boolean {
  //   if(flag != null)
  //   {
  //     return false;
  //   }
  //    else{
  //     Swal.fire({
  //       title: "Sweet!",
  //       text: "Here's a custom image.",
  //       imageUrl: 'thumbs-up.jpg'
  //     });
  //     this.route.navigate(['/dashboard'])
  //     return true;
  //     }
  // }
  public get value() : any {
    return
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const tokenPermiti= localStorage.getItem('token');

    if(tokenPermiti != null)
      {
        return true;
      }
       else{
        Swal.fire({
          title: "Alerta!",
          text: "Debes iniciar sesión",
          imageUrl: 'thumbs-up.jpg'
        });
        this.route.navigate(['/dashboard'])
        return false;
        }
       }

}
