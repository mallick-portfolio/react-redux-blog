const handleError = (err, req, res, next) => {
  res.status(500).json({
    success: "failed",
    message: err.message,
    data: false,
    error: err,
  });
};

module.exports = handleError;
