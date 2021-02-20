export class TodoItem {
  id: number;
  title: string;
  completed?: boolean;

  constructor(id, title = '', completed = false) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}
