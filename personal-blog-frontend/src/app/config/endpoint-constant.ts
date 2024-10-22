import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EndpointsConstants {
  public static readonly API_ENDPOINT: string = environment.BASE_URL;
}
