const errorHandler = (err, req, res) => {
    console.log(err.stack);
    res.status(500).json({
        message: "Internal Server Error",
        data: null,
        error: err.message
    });
};
export default errorHandler;
