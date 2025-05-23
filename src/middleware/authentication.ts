import jwt from "jsonwebtoken";
import { jwtSecret } from "../config/env.js";
import { User } from "../types/types.js";
import { Request, Response, NextFunction } from "express";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    let token;
    let authHeader = req.headers.authorization;

    if(authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];

        if(!token) {
            res.status(401).json({
                message: "Unauthorized",
                data: null,
                error: "No token provided, Authorization Denied!"
            });
            return;
        }
        
        try {
            const decoded = jwt.verify(
                token,
                jwtSecret
            ) as User;

            req.user = decoded;
            next();
        } catch(err) {
            res.status(401).json({
                message: "Unoauthorized",
                data: null,
                error: "Token is invalid, Authorization Denied!"
            });
            return;
        }
    } else {
        res.status(401).json({
            message: "Unauthorized",
            data: null,
            error: "No authorization header provided, Authorization Denied!"
        });
        return;
    }
}

export default verifyToken;