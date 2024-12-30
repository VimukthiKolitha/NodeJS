import workerpool from "workerpool";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { readFileSync } from "node:fs";

// Resolve __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, "..");

// Function to read an HTML file
const htmlRead = (filename) => {
  try {
    const filePath = join(__dirname, filename); // Resolve the full path
    console.log(`Reading file from: ${filePath}`); // Debug log
    const data = readFileSync(filePath, "utf8"); // Read file content
    return data; // Return file content
  } catch (error) {
    console.error(`Error reading file: ${error.message}`); // Debug log
    throw error;
  }
};

// Expose the `htmlRead` function via workerpool
workerpool.worker({
  html: htmlRead, // Expose the `html` method
});
