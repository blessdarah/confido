import { Address, emptyAddress } from "./address.model";

export type PackageRequest = {
  destination: Address;
  status: string;
  author: string | number;
  traveller: string | number;
  cost: number;
  expiryDate: Date;
  productRef: string;
};

export const emptyPackageRequest: PackageRequest = {
  destination: emptyAddress,
  status: "",
  author: "",
  traveller: "",
  cost: 0,
  expiryDate: new Date(),
  productRef: "",
};
