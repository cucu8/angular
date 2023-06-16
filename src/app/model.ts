export class Model {
  name: string;
  items: { description: string; action: boolean }[];

  constructor() {
    //yukarıda belirttiğimiz değişkenlere constructor içinnde değer atarız.

    this.name = 'Cuneyt';
    this.items = [
      new TodoItem('Fatura', false),
      new TodoItem('Yüzme', true),
      new TodoItem('Yürüme', false),
    ];
  }
}

export class TodoItem {
  description: string;
  action: boolean;

  constructor(desc: string, act: boolean) {
    (this.description = desc), (this.action = act);
  }
}
