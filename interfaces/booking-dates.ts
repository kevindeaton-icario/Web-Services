import { faker } from '@faker-js/faker';


export interface iBookingDates {
  checkin: string;
  checkout: string;
}

export class generateRandomBookingDates implements iBookingDates {
  checkin = faker.date.soon({ days: 1 }).toDateString();
  checkout = faker.date.soon({ days: 7 }).toDateString();
}