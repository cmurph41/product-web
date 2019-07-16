/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = '//cmurph41-jungle-scout.us-east-2.elasticbeanstalk.com';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
