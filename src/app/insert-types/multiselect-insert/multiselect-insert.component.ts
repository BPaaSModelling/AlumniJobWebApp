import {Component, Input, OnInit} from '@angular/core';
import {AnswerModel} from "../../_model/Answer.model";
import {InsertJOService} from "../../admin-insert-joboffer.service";


@Component({
  selector: 'app-multiselect-insert',
  templateUrl: './multiselect-insert.component.html',
  styleUrls: ['./multiselect-insert.component.css']
})
export class MultiselectInsertComponent implements OnInit {
  @Input() i;
  @Input() insertService: InsertJOService;
  private answers: AnswerModel[] = [];
  private selectedAnswer: AnswerModel;
  constructor() {
  }

  ngOnInit() {
  }

  private handleMultiSelect(answerID, answerLabel): void {
    this.selectedAnswer = new AnswerModel;
    this.selectedAnswer.answerID = answerID;
    this.selectedAnswer.answerLabel = answerLabel;
    {
      let found: boolean = false;
      let index_found = -1;
      for (let j = 0; j < this.answers.length; j++){

        if (this.answers[j].answerID == this.selectedAnswer.answerID){
          found = true;
         index_found = j;
        }
      }
      if (found){
        console.log('removed ' + this.selectedAnswer.answerLabel);
        this.answers.splice(index_found,1);
      } else {
        console.log('added ' + this.selectedAnswer.answerLabel);
        this.answers.push(this.selectedAnswer);
      }
    }
  this.insertService.joFields[this.i].givenAnswerList = this.answers;
  }
}
