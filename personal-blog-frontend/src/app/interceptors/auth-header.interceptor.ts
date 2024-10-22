import { inject } from '@angular/core';
import {
  HttpContextToken,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { AuthService } from '../services/auth/auth.service';

export const SKIP_TOKEN_INTERCEPTOR: HttpContextToken<boolean> =
  new HttpContextToken<boolean>(() => false);
export const apiHeaderInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const authService: AuthService = inject(AuthService);

  let copiedRequest: HttpRequest<unknown> = request.clone();
  const token: string | null = authService.getAuthToken();

  if (token && !copiedRequest.context.get(SKIP_TOKEN_INTERCEPTOR)) {
    copiedRequest = copiedRequest.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
  }

  return next(copiedRequest);
};
