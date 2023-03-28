import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getUserRole(): Observable<string> {
    const role = localStorage.getItem('userRole') || '';
    return of(role);
  }

  isAdmin(): Observable<boolean> {
    return this.getUserRole().pipe(
      map((role: string) => role === 'admin')
    );
  }
}
