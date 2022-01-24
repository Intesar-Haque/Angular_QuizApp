import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {QuizComponent} from "./components/quiz/quiz.component";

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'quiz', component: QuizComponent},
  {path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{
}
