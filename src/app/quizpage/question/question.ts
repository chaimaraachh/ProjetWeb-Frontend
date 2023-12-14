export class Question {
  constructor(
    public id: number,
    public questionText: string,
    public options: string[],
    public answer: string
  ) {}
}
