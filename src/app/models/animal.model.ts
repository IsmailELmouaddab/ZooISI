

export interface IAnimal {
  name: string;
  espece: string;
  picture: string;
}

export class Animal{
  name: string;
  espece: string;
  picture: string;

  constructor(name: string, espece: string, picture: string) {
    this.name = name;
    this.espece = espece;
    this.picture = picture;
  }
}

