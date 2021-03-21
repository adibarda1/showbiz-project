import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { BusinessesResponse } from '../entities/server-responses';

@Injectable({
  providedIn: 'root'
})
export class ServerDataService {
  
  private API_SERVER = "https://api2.meet2know.com/operator_api/v1/businesses"
  private TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTY2NjU5MzksIm9wZXJhdG9yX3VpZCI6IjNlNDBvbjkyazBlb2lqaDIiLCJpbXBlcnNvbmF0ZV9vcGVyYXRvcl91aWQiOm51bGwsImp0aSI6ImUyYmUyYzVlYTczZDhiNTc4ZDkxZmQ5ZjdlMjY5OGUyZjY3ZGRjODJkN2M3ZmFhZjBjZDhmMzljMDUwMzY4NDQifQ.52nrFkLQq53pB_TXXuB50m2w31GOL-iKqf90H-W7K8k"
  
  constructor(private httpClient: HttpClient) { }
  
  header = {
    headers: new HttpHeaders()
      .set('Authorization',  this.TOKEN)
  }
  
  public getBusinessListData(page: number = 1, perPage: number = 10, sortType: string = "created_at", sortTypeOrder: string = "desc", filterText: string = '') {
    var filterGetString = ""
    if (filterText && filterText.length > 0)
      filterGetString = `&filters[search]=*${filterText}*`

    return this.httpClient.get<BusinessesResponse>(`${this.API_SERVER}/get_businesses?page=${page}&per_page=${perPage}&sort_by=${sortType}&sort_order=${sortTypeOrder}${filterGetString}`, this.header).pipe(
      map(response => response.data),
      catchError(this.handleError)
    );
  }

  public addBusiness(businessData){
    const body = {business: businessData}
    return this.httpClient.post(this.API_SERVER+'/create_business',body ,this.header).pipe(catchError(this.handleError));
  }

  public deleteBusiness(businessUid: string[]) {
    const body = {business_uids: [businessUid]}
    return this.httpClient.post<string[]>(this.API_SERVER+'/remove_businesses',body, this.header).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      alert('Network error occurred');
    } else {
      // Server returned an unsuccessful response code.
      console.error(
        `Error: Server returned code ${error.status} `);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
