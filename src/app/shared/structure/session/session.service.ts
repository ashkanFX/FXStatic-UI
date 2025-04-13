import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  setItemInSessionStorage(name: string, data: any): void {
    if (this.isBrowser) {
      window.sessionStorage.setItem(name, JSON.stringify(data));
    }
  }

  getItemInSessionStorage(name: string): any {
    if (this.isBrowser) {
      return window.sessionStorage.getItem(name);
    }
    return null;
  }

  clearAllItemInSessionStorage(): void {
    if (this.isBrowser) {
      window.sessionStorage.clear();
    }
  }

  removeItemInSessionStorage(name: string): void {
    if (this.isBrowser) {
      window.sessionStorage.removeItem(name);
    }
  }

  setEachKeyOfObject(object: {[key: string]: any}) {
    if (this.isBrowser) {
      Object.keys(object).forEach(key => {
        this.setItemInSessionStorage(key, object[key]);
      });
    }
  }
}
