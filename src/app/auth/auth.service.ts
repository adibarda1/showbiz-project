import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public getToken(): any {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTU5OTA4NjUsIm9wZXJhdG9yX3VpZCI6IjNlNDBvbjkyazBlb2lqaDIiLCJpbXBlcnNvbmF0ZV9vcGVyYXRvcl91aWQiOm51bGwsImp0aSI6IjFiNzhmMzUxMzRjN2M1OTMzODc0YzAxMTI3MDY3OGJhY2E1MzM4YTMwNDhmMDExNjQ2MjE3Y2NhODU1NDI0NzEifQ.FmqYLCVcUdtZN-17Z6A2-WriXCIfy0YX93lPEyU9-9c';
    return token;
  }
}