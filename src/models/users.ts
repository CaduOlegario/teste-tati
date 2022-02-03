export default interface Users {
  id: {
    value: string;
  };
  dob: {
    date: string;
    age: number;
  }
  name: {
    first: string;
    last: string;
  };
  gender: string;
  email: string;
  picture: {
    medium: string;
  };
  location: {
    city: string;
    country: string;
    state: string;
  }
}