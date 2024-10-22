export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
}

export enum AuthenticationStatus {
  AUTHENTICATED,
  UNAUTHENTICATED,
}

export enum LocalStorageKeys {
  TOKEN = 'token',
}
