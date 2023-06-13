function solveQuadraticEquation(a, b, c) {
  const discriminant = b * b - 4 * a * c;
  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    return [root];
  } else {
    return [];
  }
}

const equation = prompt("Enter a quadratic equation (in the form of ax^2 + bx + c = 0):");
const regex = /(-?\d+)\s*\*\s*x\^2\s*([+-]\s*\d+)\s*\*\s*x\s*([+-]\s*\d+)\s*=\s*0/;
const matches = equation.match(regex);

if (matches) {
  const a = parseInt(matches[1]);
  const b = parseInt(matches[2]);
  const c = parseInt(matches[3]);

  const roots = solveQuadraticEquation(a, b, c);

  if (roots.length === 0) {
    console.log("No real roots");
  } else if (roots.length === 1) {
    console.log("One real root (repeated root):", roots[0]);
  } else {
    console.log("Two real and distinct roots:", roots[0], "and", roots[1]);
  }
} else {
  console.log("Invalid quadratic equation format");
}
