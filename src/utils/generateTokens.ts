import jwt from "jsonwebtoken";
import { jwtSecret } from "../config/env.js";

const user = {
    id: 1, 
    name: "Aryan",
    role: "user",
    department: "HR",
    accessLevel: 1
}

const token = jwt.sign(user, jwtSecret, {
    expiresIn: "1h"
});  

console.log(token)