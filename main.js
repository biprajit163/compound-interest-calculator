/*Compund interest formule:
A = P * (1 + r/n)^(nt)
- A = final amount
- P = initial investment
- r = interest rate
- n = number of times interest applied per time period
- t = time period 
*/


import cmpndIntr from './compound-interest-calculator.js';


let investment = new cmpndIntr();

investment.compoundInteres(10000, .1, 2, 20);