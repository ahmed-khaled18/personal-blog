import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpContext } from '@angular/common/http';
import {
  AuthenticationStatus,
  LocalStorageKeys,
  LoginRequest,
  LoginResponse,
} from './auth.model';
import { SKIP_TOKEN_INTERCEPTOR } from '../../interceptors/auth-header.interceptor';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly endpoint: string = `${environment.BASE_URL}api/v1/login`;

  isAuthenticatedSubject: BehaviorSubject<AuthenticationStatus> =
    new BehaviorSubject<AuthenticationStatus>(
      AuthenticationStatus.UNAUTHENTICATED
    );
  constructor(private _http: HttpClient) {
    this.setAuthenticationStatus();
  }

  getAuthToken(): string | null {
    const item: string | null = localStorage.getItem(LocalStorageKeys.TOKEN);
    return item ? item : null;
  }
  setAuthToken(token: string): void {
    localStorage.setItem(LocalStorageKeys.TOKEN, token);
    this.setAuthenticationStatus();
  }
  setAuthenticationStatus(): void {
    const isAuthenticated: AuthenticationStatus =
      this.getAuthToken() !== null
        ? AuthenticationStatus.AUTHENTICATED
        : AuthenticationStatus.UNAUTHENTICATED;
    this.isAuthenticatedSubject.next(isAuthenticated);
  }
  isAuthenticated(): boolean {
    return (
      this.isAuthenticatedSubject.value === AuthenticationStatus.AUTHENTICATED
    );
  }
  login(body: LoginRequest): Observable<LoginResponse> {
    return this._http.post<LoginResponse>(
      this.endpoint,
      {
        username: body.username,
        password: body.password,
      },
      { context: new HttpContext().set(SKIP_TOKEN_INTERCEPTOR, true) }
    );
  }
}
