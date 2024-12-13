import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {


  setItemInSessionStorage(name: string, data: any): void {
    window.sessionStorage.setItem(name, JSON.stringify(data));
  }

  getItemInSessionStorage(name: string): any {
    return window.sessionStorage.getItem(name);
  }

  clearAllItemInSessionStorage(): void {
    window.sessionStorage.clear()
  }

  removeItemInSessionStorage(name: string): void {
    window.sessionStorage.removeItem(name)
  }

  setEachKeyOfObject(object: Object) {
    Object.keys(object).forEach(key => {
        this.setItemInSessionStorage(key, object[key])
      }
    )
  }


}
interface Object {
  [key: string]: any;
}
