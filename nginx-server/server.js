const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;

const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : `${req.url}`
  );
  const extensionName = String(path.extname(filePath).toLowerCase());
  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
  };

  const contentType = mimeTypes[extensionName] || "application/octet-stream"; // generic binary file

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(400, { "Content-type": "text/html" });
        res.end(
          "Error 404: File not found. Please check your connection or connection string."
        );
      }
    } else {
      res.writeHead(200, { "Content-type": contentType });
      res.end(content, "utf-8");
    }
  });
});

// add code to let server listen on this port
server.listen(port, () => {
  console.log(`Server is running on port : {${port}}`);
});
