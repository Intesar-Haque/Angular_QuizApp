import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {MultipleChoiceQuiz} from "../../components/models/multiple-choice-quiz";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addQuiz(quiz:MultipleChoiceQuiz) : Observable<any> {
    return this.http.post(`${this.apiServerUrl}/post-quiz`, quiz, {responseType: 'text'});
  }
}
