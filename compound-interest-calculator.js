

export function compoundInterest(P, r, n, t) {
  let A = 0;
  A = P * Math.pow((1 + r/n), t*n);
  return A;
}

