export class StudentModel {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  email: string;
  phoneNumber: string;
  enrolledDate: Date;
  sex: string;
  strenrolledDate: string;
  selectedsex: { text: string, value: string };
}

export class SexModel {
  sex: string;
  sexname: string;
}

export class Stock {
  favorite: Boolean = false;

  constructor(public name: string, public price: number, public previousPrice: number) { }
  
}
