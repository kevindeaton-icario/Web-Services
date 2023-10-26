import { generateRandomBookingDates, iBookingDates } from "./booking-dates";
import { faker } from '@faker-js/faker';

export interface iBooking {
  bookingid: number;
  firstname: string;
  lastname: string;
  totalprice: number;
  depositpaid: boolean;
  bookingdates: iBookingDates;
  additionalneeds: string;
}

export class generateRandomBooking implements iBooking {

  bookingid: number;
  firstname = faker.person.firstName();
  lastname = faker.person.lastName();
  totalprice = faker.number.float({ max: 300, precision: .01 });
  depositpaid = (faker.number.binary()) ? true : false;
  bookingdates = new generateRandomBookingDates();
  additionalneeds = faker.commerce.product();
}