const { INTERNAL_SERVER_ERROR, getStatusText } = require("http-status-codes");
const logger = require("../common/logging");

const handle = (err: any, req: any, res: any, next: any) => {
  if (err.status) {
    res.status(err.status).send(err.message);
  } else {
    logger.error(err.stack);
    res
      .status(INTERNAL_SERVER_ERROR)
      .send(getStatusText(INTERNAL_SERVER_ERROR));
  }
  next();
};

export default handle;
