export class Todo {

  private isComplete: Boolean = false;

  constructor(public readonly description: string) {
  }

  public toggleComplete(): void {
    this.isComplete = !this.isComplete;
  }

  public isCompleted(): Boolean {
    return this.isComplete;
  }
}
