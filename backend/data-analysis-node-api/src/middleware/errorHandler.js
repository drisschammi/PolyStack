export const notFound = (req, res, next) => {
    res.status(404).json({
        status: "error",
        message: `The route ${req.originalUrl} does not exist.`,
    });
};

export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        status: "error",
        message: err.message,
        ...(process.env.NODE_ENV === "development" && { stack: err.stack }), // Include stack trace only in development
    });
};