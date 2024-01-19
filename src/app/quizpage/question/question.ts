export class Question {
  questionID : number;
  content : string;
  options : string[];
  testQuiz : string;
  correctOption : number;
  constructor() {
    this.questionID = 0;
    this.content = '';
    this.options = [];
    this.testQuiz = '';
    this.correctOption = 0;
  }

}
