const stripe = require("stripe")('sk_test_51MEw6vFXPiISFqsuCh2ZzNgZuaukPaoGAjbAtgqRcDKHmJJmz8dT4CjEp8u4rd9R1iQepogEEiXkG1U6pppbR1kz00ySzhZuXo');

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};