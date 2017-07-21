import {AnswerModel} from './Answer.model';
export class JobOfferElementModel {

    propertyURI: string;
    propertyLabel: string;
    answerList: AnswerModel[];
    answerDatatype: string;
    givenAnswerList: AnswerModel[];
    searchNamespace: string;
    comparisonOperationAnswer: AnswerModel[];
    comparisonAnswer: string;
    typeOfAnswer: string;
    annotationRelation: string;

}
