import { NextFunction, Request, Response } from "express";

const errorHandler = (err: any, req: Request, res: Response) => {
    console.log(err.stack);
    res.status(500).json({
        message: "Internal Server Error",
        data: null,
        error: err.message
    });
};

export default errorHandler;