class Logger {
  constructor(message) {
    #message = message;
    #logMessage();
  }

  logMessage() {
    console.log(#message);
  }
}

new Logger("Hello, world!");
