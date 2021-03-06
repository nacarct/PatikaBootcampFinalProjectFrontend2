export interface Policy {
  policyNo: string;
  insurerId: number;
  insrTcKn?: any;
  insrFirstName: string;
  insrLastName: string;
  insrBirthDate: Date;
  insrGender: string;
  insrPhone: string;
  insrAddress: string;
  insuredId: number;
  customerTcKn?: any;
  firstName: string;
  lastName: string;
  birthDate: Date;
  gender: string;
  phone: string;
  address: string;
  height: number;
  weight: number;
  relation: string;
  productId: number;
  productName: string;
  amount: number;
  isPaid: string;
  isAllPaid: string;
  paymentPart: number;
  paymentAmount: number;
  createDate: Date;
  paidPart: number;
}
