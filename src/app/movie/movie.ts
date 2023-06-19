export class Movie {
  id: number;
  name: string;
  descriptiom: string;
  imageUrl: string;

  constructor(id: number, name: string, descriptipn: string, imageUrl: string) {
    (this.id = id), (this.name = name);
    (this.descriptiom = descriptipn), (this.imageUrl = imageUrl);
  }
}
