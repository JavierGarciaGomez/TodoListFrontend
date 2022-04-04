export class Task {
  id: string;
  taskText: string;

  constructor(taskText: string) {
    this.id = new Date().toISOString();
    this.taskText = taskText;
    console.log(this);
  }
}
