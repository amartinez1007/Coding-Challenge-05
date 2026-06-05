// Step 2: Create employee objects
let employees = [
  { name: "Michael Rodriguez", hourlyRate: 22, hoursWorked: 38 },
  { name: "Ashley Perez", hourlyRate: 25, hoursWorked: 42 },
  { name: "Daniel Hernandez", hourlyRate: 30, hoursWorked: 45 },
  { name: "Jessica Ramirez", hourlyRate: 18, hoursWorked: 40 }
];

// Step 3: Calculate base pay for up to 40 hours
function calculateBasePay(rate, hours) {
  let regularHours = Math.min(hours, 40);
  return regularHours * rate;
}

// Step 4: Calculate overtime pay
function calculateOvertimePay(rate, hours) {
  if (hours > 40) {
    let overtimeHours = hours - 40;
    return overtimeHours * rate * 1.5;
  } else {
    return 0;
  }
}

// Step 5: Calculate taxes
function calculateTaxes(grossPay) {
  return grossPay * 0.15;
}

// Step 6: Process payroll
function processPayroll(employee) {
  let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  let overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  let grossPay = basePay + overtimePay;
  let taxes = calculateTaxes(grossPay);
  let netPay = grossPay - taxes;

  return {
    name: employee.name,
    basePay: basePay,
    overtimePay: overtimePay,
    grossPay: grossPay,
    netPay: netPay
  };
}

// Test functions individually
console.log(calculateBasePay(20, 45));
console.log(calculateOvertimePay(20, 45));
console.log(calculateTaxes(950));

// Step 7: Loop through employees and log payroll object
for (let employee of employees) {
  console.log(processPayroll(employee));
}
