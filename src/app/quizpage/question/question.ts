export class Question {
  constructor(
    public milestoneId: Number,
    public id: number,
    public questionText: string,
    public options: string[],
    public answer: string
  ) {}
}
