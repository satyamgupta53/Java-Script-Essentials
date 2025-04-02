const fs = require("fs");
const os = require("os");
const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    this.emit("message", { message });
  }
}

const logger = new Logger();
const logFile = "./assets/event_log.txt";

const logToFile = (event) => {
  const logMessage = `${new Date().toDateString()} - ${event.message} \n`;
  console.log(logMessage);
  fs.appendFile(logFile, logMessage, (err) => {
    if (err) console.error("Error writing to the file: ", err);
  });
};

logger.on("message", logToFile);

logger.log("Application started now ------");

setInterval(() => {
  const memoryUsage = (os.freemem() / os.totalmem()) * 100;
  logger.log(`Current memory usage: ${memoryUsage.toFixed(2)}`);
}, 3000);

logger.log("Application event occurred -------");
