const assertEqual = require('../assertEqual');

assertEqual('Hello', 'Hello');
assertEqual('What', 'How');
assertEqual(42, 42);
assertEqual(4, 235);
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 4);
assertEqual(1, "1");

