import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError, map } from "rxjs/operators";

// Set the http options
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json"})
};

@Injectable({
  providedIn: "root"
})
/**
 * Service to call all the API
 */
export class GetPostService {
	geturl : string = 'https://cs251-outlab-6.herokuapp.com/initial_values/';
	posturl : string = 'https://cs251-outlab-6.herokuapp.com/add_new_feedback/';
  constructor(private http: HttpClient) {}

  /**
   * Function to handle error when the server return an error
   *
   * @param error
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code. The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(error);
  }

  /**
   * Function to extract the data when the server return some
   *
   * @param res
   */
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  /**
   * Function to GET what you want
   *
   * @param url
   */
  public getListOfGroup(): Observable<any> {

    // Call the http GET
    return this.http.get(this.geturl, httpOptions);
    
  }
  public postdata(name: string, email: string, feedback: string, comment: string): Observable<any> {
  	return this.http.post(this.posturl, {"name": name, "email": email, "feedback": feedback, "comment": comment}, httpOptions)
  }
}