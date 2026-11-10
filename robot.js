
const express = require("express");

const app = express();

let fs = require("fs").promises;

async function processFiles() {
  try {
    const data1 = await fs.readFile("head.txt", "utf8");
    const data2 = await fs.readFile("body.txt", "utf8");
    const data3 = await fs.readFile("leg.txt", "utf8");
    const data4 = await fs.readFile("feet.txt", "utf8");

    const robot = data1 + "\n" + data2 + "\n" + data3 + "\n" + data4;

    await fs.writeFile("robot.txt", robot, "utf8");

    console.log("write file success");

  } catch (err) {
    console.error("An error occurred during file operations:", err.message);
  }
}

processFiles();

app.listen(3000, () => {
  console.log("Server started on port 3000 !");
});
