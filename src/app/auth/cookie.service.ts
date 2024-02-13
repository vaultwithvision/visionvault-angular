import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  setCookie(name: string, value: string) {
    document.cookie = name + "=" + value + ";" + ";path=/";
  }

}
