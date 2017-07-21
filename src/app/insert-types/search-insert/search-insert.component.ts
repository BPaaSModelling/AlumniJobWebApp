import {Component, Input, OnInit} from '@angular/core';
import {InsertJOService} from "../../admin-insert-joboffer.service";
import {AnswerModel} from "../../_model/Answer.model";
import {SearchResultModel} from "../../_model/SearchResult.model";


@Component({
  selector: 'app-search-insert',
  templateUrl: './search-insert.component.html',
  styleUrls: ['./search-insert.component.css']
})
export class SearchInsertComponent implements OnInit {
  @Input() i: number;
  @Input() insertService: InsertJOService;
  @Input() propertyLabel: string;
  private selectedAnswer: AnswerModel;
  private textlabel: string;
  private queriedIndex: number;
  private answerList;
  constructor(

      ) {

  }

  ngOnInit() {
    this.selectedAnswer = new AnswerModel();
    this.selectedAnswer.answerLabel = '';
    this.selectedAnswer.answerID = '';
    this.insertService.joFields[this.i].givenAnswerList.push(this.selectedAnswer);
    this.queriedIndex = -1;
  this.answerList = null;
  }

  private search(term: string, index: number): void{


    this.insertService.searchResults$ = null;
    this.queriedIndex = this.i;
    //console.log("queried index is now: " + this.queriedIndex)
    this.insertService.search(this.insertService.joFields[this.i].searchNamespace, term);
  }

  private handleSearchSelect(item: SearchResultModel):void{
    //console.log("queried index is still: " + this.queriedIndex)
    this.insertService.joFields[this.i].givenAnswerList[0].answerID = item.uri;
    this.insertService.joFields[this.i].givenAnswerList[0].answerLabel = item.label;
    this.insertService.searchResults$ = null;
  this.queriedIndex = -1;
  }


}

