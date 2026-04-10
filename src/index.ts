// app import
import app from "./app";

// util(s) import
import logger from "./utils/logger";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  logger.info(`API is active on port: ${PORT}`);
});
