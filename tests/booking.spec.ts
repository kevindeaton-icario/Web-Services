// import { test, expect } from "@playwright/test";
// import * as urls from "../config/urls.json";
// import * as credentials from "../config/credentials.json";
// import { generateRandomBooking, iBooking } from "../interfaces/booking";

// const bookingUrl = urls.booking.baseUrl + urls.booking.uris.booking;
// let bookingId;
// let token;

// /**
//  * Runs before all the tests and gets an Auth Token
//  */
// test.beforeAll(async ({ request }) => {
//   const response = await request.post(
//     urls.booking.baseUrl + urls.booking.uris.auth,
//     {
//       data: {
//         username: credentials.booking.username,
//         password: credentials.booking.password,
//       },
//     }
//   );
//   const responseBody = await response.json();
//   token = responseBody.token;
// });

// /**
//  * Performs a GET request on the /booking endpoint
//  * and gets a list of All current bookings
//  */
// test("GET all current Bookings", async ({ request }) => {
//   const response = await request.get(bookingUrl);
//   const responseBody: iBooking = await response.json();

//   expect(responseBody).toBeTruthy();
// });

// /**
//  * Performs a POST request on the /booking endpoint
//  * and creates a new booking with the specified request body
//  */
// test("POST a new Booking", async ({ request }) => {
//   const response = await request.post(bookingUrl, {
//     data: {
//       firstname: "Jim",
//       lastname: "Brown",
//       totalprice: 111,
//       depositpaid: true,
//       bookingdates: {
//         checkin: "2023-06-25",
//         checkout: "2023-06-28",
//       },
//       additionalneeds: "Breakfast",
//     },
//   });
//   const responseBody = await response.json();

//   expect(responseBody.booking.firstname).toBe("Jim");
//   expect(responseBody.booking.lastname).toBe("Brown");
//   expect(responseBody.booking.totalprice).toBe(111);
//   expect(responseBody.booking.depositpaid).toBeTruthy();
//   expect(responseBody.booking.bookingdates.checkin).toBe("2023-06-25");
//   expect(responseBody.booking.bookingdates.checkout).toBe("2023-06-28");
//   expect(responseBody.booking.additionalneeds).toBe("Breakfast");

//   bookingId = responseBody.bookingid;
// });

// /**
//  * Performs a GET request on the /booking/:id endpoint
//  * and retrieves the previously created booking
//  */
// test("GET the newly created Booking", async ({ request }) => {
//   const response = await request.get(bookingUrl + "/" + bookingId);
//   const responseBody: iBooking = await response.json();

//   expect(responseBody.firstname).toBe("Jim");
//   expect(responseBody.lastname).toBe("Brown");
//   expect(responseBody.totalprice).toBe(111);
//   expect(responseBody.depositpaid).toBeTruthy();
//   expect(responseBody.bookingdates.checkin).toBe("2023-06-25");
//   expect(responseBody.bookingdates.checkout).toBe("2023-06-28");
//   expect(responseBody.additionalneeds).toBe("Breakfast");
// });

// /**
//  * Performs a PATCH request on the /booking/:id endpoint
//  * and updates the previously created booking
//  */
// // test("PATCH a new Booking", async ({ request }) => {
// //   const response = await request.patch(bookingUrl + "/" + bookingId, {
// //     data: {
// //       firstname: "Jerry",
// //       lastname: "Rice",
// //       additionalneeds: "Pillows"
// //     },
// //     headers: {
// //       Cookie: `token=${token}`,
// //       ContentType: "application/json",
// //       Accept: "application/json"
// //     }
// //   });
// //   const responseBody = await response.json();

// //   expect(responseBody.booking.firstname).toBe("Jerry");
// //   expect(responseBody.booking.lastname).toBe("Rice");
// //   expect(responseBody.booking.totalprice).toBe(111);
// //   expect(responseBody.booking.depositpaid).toBeTruthy();
// //   expect(responseBody.booking.bookingdates.checkin).toBe("2023-06-25");
// //   expect(responseBody.booking.bookingdates.checkout).toBe("2023-06-28");
// //   expect(responseBody.booking.additionalneeds).toBe("Pillows");
// // });

// /**
//  * Performs a DELETE request on the /booking/:id endpoint
//  * and deletes the previously created booking
//  */
// test("DELETE the newly created Booking", async ({ request }) => {
//   const response = await request.delete(bookingUrl + "/" + bookingId, {
//     headers: {
//       Cookie: `token=${token}`,
//     },
//   });

//   expect(response.status()).toBe(201);

//   // This is just here to demonstrate that the data can be generated on the fly
//   // console.log(new generateRandomBooking())
// });
