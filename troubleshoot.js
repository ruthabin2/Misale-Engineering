const fs = require("fs")
const path = require("path")

// Function to check if a file exists
function checkFileExists(filePath) {
  return fs.existsSync(filePath)
}

// Function to read and log file contents
function readAndLogFile(filePath) {
  if (checkFileExists(filePath)) {
    const content = fs.readFileSync(filePath, "utf8")
    console.log(`Contents of ${filePath}:`)
    console.log(content)
  } else {
    console.log(`File not found: ${filePath}`)
  }
}

// Check and log _redirects file
readAndLogFile(path.join(process.cwd(), "src", "_redirects"))

// Check and log netlify.toml file
readAndLogFile(path.join(process.cwd(), "netlify.toml"))

// Check and log relevant parts of angular.json
const angularJsonPath = path.join(process.cwd(), "angular.json")
if (checkFileExists(angularJsonPath)) {
  const angularJson = JSON.parse(fs.readFileSync(angularJsonPath, "utf8"))
  const projectName = Object.keys(angularJson.projects)[0]
  const assets = angularJson.projects[projectName].architect.build.options.assets
  console.log("Assets in angular.json:")
  console.log(JSON.stringify(assets, null, 2))
} else {
  console.log("angular.json not found")
}

// Check and log build script in package.json
const packageJsonPath = path.join(process.cwd(), "package.json")
if (checkFileExists(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"))
  console.log("Build script in package.json:")
  console.log(packageJson.scripts.build)
} else {
  console.log("package.json not found")
}

