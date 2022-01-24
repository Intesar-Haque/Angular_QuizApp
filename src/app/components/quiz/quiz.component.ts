import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import Swal from 'sweetalert2';
import {QuizService} from "../../service/quiz/quiz.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {



  constructor(private fb: FormBuilder, private qs: QuizService){}
  addForm = this.fb.group({
    question: ['', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100),
    ]],
    correct: ['', [ Validators.required ]],
    options: this.fb.array(['','']),
  });

  get question(){
    return this.addForm.get("question");
  }

  get options(){
    return this.addForm.get("options") as FormArray;
  }

  get correct(){
    return this.addForm.get("correct");
  }

  addOption(){
    this.options.length > 4 ? alert("Only 5 options Possible") : this.options.push(this.fb.control(''));
  }
  removeOption(){
    this.options.length < 2 ? alert("Minimum 2 options required") : this.options.removeAt(this.options.length-1);
  }

  ngOnInit(): void {
    this.correct?.setValue(null);
  }

  onAddQuiz() {
    this.qs.addQuiz(this.addForm.value).subscribe({
      next:()=>{
        Swal.fire("Quiz Recorded", "", "success");
        this.addForm.reset();
      },
      error:()=>{
        Swal.fire("Invalid Data", "Please Give At least 2 Valid Option", "error");
      }
    });
  }

  public onOpenModal(mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addQuizModal');
    }
    container?.appendChild(button);
    button.click();
  }

}
