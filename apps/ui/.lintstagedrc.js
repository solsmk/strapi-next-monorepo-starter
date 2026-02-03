const path = require("path")

const buildEslintCommand = (filenames) =>
  `eslint --no-error-on-unmatched-pattern --fix ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" ")}`

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
}
