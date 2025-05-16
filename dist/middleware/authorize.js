export function authorize(policy, resource) {
    return (req, res, next) => {
        const user = req.user;
        if (user && policy(user, resource)) {
            return next();
        }
        else {
            return res.status(402).json({
                message: "Forbidden",
                data: null,
                error: "Not authorized to access this resource!"
            });
        }
    };
}
