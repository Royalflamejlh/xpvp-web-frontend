const fs = require('fs')
const path = require('path')

// Define the domain name for the CNAME record
const domainName = 'www.mcxpvp.net'

// Specify the output directory (adjust this if needed)
const outputDir = path.join(__dirname, '../out') // For static exports

// Write the CNAME file
const filePath = path.join(outputDir, 'CNAME')
fs.writeFileSync(filePath, domainName)

console.log(`CNAME file created with domain: ${domainName}`)
