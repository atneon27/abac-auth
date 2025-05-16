import { Request, Response, NextFunction } from "express"
import { User, Project } from "../types/types.js";

export function authorize(policy: (user: User, project: Project) => boolean, resource: Project) {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = req.user;

        if(user && policy(user, resource)) {
            return next();
        } else {
            return res.status(402).json({
                message: "Forbidden",
                data: null,
                error: "Not authorized to access this resource!"
            })
        }
    }
}