// third party imports
import { createLogger, format, transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

// logger configuration
const logFormat = format.combine(
  format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  format.errors({ stack: true }),
  format.splat(),
  format.json()
);

const transportList = [
  new transports.Console({
    format: format.combine(format.colorize(), format.simple()),
  }),
  new DailyRotateFile({
    dirname: "logs",
    filename: "app-%DATE%.log",
    datePattern: "YYYY-MM-DD",
    zippedArchive: true,
    maxSize: "20m",
    maxFiles: "7d",
    level: "info",
  }),
];

const logger = createLogger({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  format: logFormat,
  transports: transportList,
  exceptionHandlers: [
    new transports.File({ filename: "logs/exceptions.log" }),
  ],
  rejectionHandlers: [
    new transports.File({ filename: "logs/rejections.log" }),
  ],
});

export default logger;
