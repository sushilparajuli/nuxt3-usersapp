type Geo = { lat: string; lng: string };

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}
