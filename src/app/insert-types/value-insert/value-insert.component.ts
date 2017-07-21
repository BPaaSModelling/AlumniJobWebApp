import {Component, Input, OnInit} from '@angular/core';
import {InsertJOService} from "../../admin-insert-joboffer.service";


@Component({
  selector: 'app-value-insert',
  templateUrl: './value-insert.component.html',
  styleUrls: ['./value-insert.component.css']
})
export class ValueInsertComponent implements OnInit {
  @Input() i;
  @Input() insertService: InsertJOService;
  private comparisonAnswerCode: string;


  constructor(
  ) {
  }

  ngOnInit() {
  }

  private handleOperationsSingleSelect(answerCode: string): void {
    this.insertService.joFields[this.i].comparisonAnswer = answerCode;
    //this.comparisonAnswerCode = answerCode;
    console.log('set comparisonAnswer ' + this.comparisonAnswerCode);
  }
}
