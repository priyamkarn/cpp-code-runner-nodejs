const { execFile } = require('child_process');
const path = require('path');
const os = require('os');
const cppFile = path.join(__dirname, 'sum.cpp');
const exeFile = os.platform() === 'win32' ? path.join(__dirname, 'sum.exe') : path.join(__dirname, 'sum');
execFile('g++', [cppFile, '-o', exeFile], (compileError, stdout,stderr) => {
  if (compileError) {
    console.error(`Compilation Error: ${compileError.message}`);
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log('Compilation successful.');
  const child = execFile(exeFile, [], (execError, stdout, stderr) => {
    if (execError) {
      console.error(`Execution Error: ${execError.message}`);
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`Output: ${stdout.trim()}`);
  });
  child.stdin.write('5 0\n');
  child.stdin.end();
});