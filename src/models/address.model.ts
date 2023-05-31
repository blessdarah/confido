export type Address = {
  country: string;
  city: string;
  zipCode: string;
  location: string;
};

export const emptyAddress: Address = {
  country: "",
  city: "",
  zipCode: "",
  location: "",
};
