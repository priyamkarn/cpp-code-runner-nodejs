const { VM } = require('vm2');

// Define a sandbox object with predefined variables
const vm = new VM({
  timeout: 1000, // 1 second timeout
  sandbox: {
    myVariable: 42,
    myFunction: (x) => x * 2
  }
});

// Example code that uses sandbox variables
const code = `
  // Accessing sandbox variables
  myVariable + myFunction(5);
`;

// Run the code in the VM context
const result = vm.run(code);
console.log(result); // Outputs: 52 (42 + 10)
