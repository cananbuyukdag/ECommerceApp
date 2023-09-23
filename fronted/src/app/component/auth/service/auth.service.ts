import { Injectable } from "@angular/core";
import { LoginModel } from "../models/login.model";
import { LoginResponseModel } from "../models/login-response";
import { GenericHttpService } from "src/app/common/services/generic-http.service";
import { RegisterModel } from "../models/register.model";

@Injectable({
  providedIn: 'root'
})

export class AuthService{
constructor(private _http: GenericHttpService
){}

login(model:LoginModel, callBack: (res:LoginResponseModel)=> void){
  this._http.post<LoginResponseModel>("auth/login", model, res=> callBack(res));
}

register(model:RegisterModel, callBack: (res:LoginResponseModel)=> void){
  this._http.post<LoginResponseModel>("auth/register", model, res=> callBack(res));
}
}
