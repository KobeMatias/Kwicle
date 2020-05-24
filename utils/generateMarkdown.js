function generateMarkdown(data) {
  const fs = require("fs");
  let filename = "README".split(" ").join("") + ".md";
  fs.writeFile(
    filename,
`# ${data.title}\n\n
[![Generic Badge](https://img.shields.io/badge/<Github>-<Profile>-<brightgreen>)](${data.githubprofile})\n\n
## Table of Contents\n\n
(#Description)\n
(#Installation)\n
(#Usage)\n
(#License)\n
(#Contributing)\n
(#Tests)\n\n
## Description\n
${data.description}\n\n
## Installation\n
${data.install}\n\n
## Usage\n
${data.usage}\n\n
## License\n
${data.license}\n\n
## Contributing\n
${data.contributions}\n\n
## Tests\n
${data.test}\n\n
`,

    function (err) {
      if (err) {
        return console.log(err)
      } else {
        console.log("Success!");
      }
    }
  );
}

module.exports = generateMarkdown;
