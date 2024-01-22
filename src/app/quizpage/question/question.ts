export class Question {
  questionID : number;
  content : string;
  options : string[];
  testQuiz : number;
  correctOption : number;
  constructor() {
    this.questionID = 0;
    this.content = '';
    this.options = [];
    this.testQuiz = 0;
    this.correctOption = 0;
  }

}
