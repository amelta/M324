const fs = require('fs');

console.log("Building the project...");
// Example: Create a dist directory with a sample file
if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}
fs.writeFileSync('dist/output.txt', 'Build complete!');
console.log("Build completed successfully.");