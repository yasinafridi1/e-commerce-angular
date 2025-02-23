import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}

  addItem(item: any, key: string) {
    localStorage.setItem(key, JSON.stringify(item));
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
}
