import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { BusinessItem } from '../entities/business-item';
import { BusinessesResponse } from '../entities/server-responses';

@Injectable({
  providedIn: 'root'
})
export class ServerDataService {
  
  private API_SERVER = "https://api2.meet2know.com/operator_api/v1/businesses"
  private TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTY2NjU5MzksIm9wZXJhdG9yX3VpZCI6IjNlNDBvbjkyazBlb2lqaDIiLCJpbXBlcnNvbmF0ZV9vcGVyYXRvcl91aWQiOm51bGwsImp0aSI6ImUyYmUyYzVlYTczZDhiNTc4ZDkxZmQ5ZjdlMjY5OGUyZjY3ZGRjODJkN2M3ZmFhZjBjZDhmMzljMDUwMzY4NDQifQ.52nrFkLQq53pB_TXXuB50m2w31GOL-iKqf90H-W7K8k"
  filterTextObj: any;
  
  constructor(private httpClient: HttpClient) { }
  
  header = {
    headers: new HttpHeaders()
      .set('Authorization',  this.TOKEN)
  }
  
  public getBusinessListData(page: number = 1, perPage: number = 10, sortType: string = "created_at", sortTypeOrder: string = "desc", filterText: string = '') {
    this.filterTextObj = {search: filterText}
    return this.httpClient.get<BusinessesResponse>(`${this.API_SERVER}/get_businesses?page=${page}&per_page=${perPage}&sort_by=${sortType}&sort_order=${sortTypeOrder}`, this.header).pipe(
      map(response => response.data),
      catchError(this.handleError)
    );
  }

  public addBusiness(businessData){
    const body = {business: businessData}
    console.log(body)
    return this.httpClient.post(this.API_SERVER+'/create_business',body ,this.header).pipe(catchError(this.handleError));
  }

  public deleteBusiness(businessUid) {
    console.log('deleted' + businessUid)
    const body = {business_uids: [businessUid]}
    return this.httpClient.post<string[]>(this.API_SERVER+'/remove_businesses',body, this.header).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      alert(`Server Error: ${error.error.message}`)
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      alert(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
