const canViewProject = (user, project) => {
    return (user.role === "admin" ||
        user.department === project.department ||
        (user.accessLevel >= project.accessLevel && project.team.includes(user.id)));
};
const canUpdateProject = (user, project) => {
    return (user.role === "admin" ||
        (user.role === "agent" && user.department === project.department) ||
        project.team.includes(user.id));
};
export { canViewProject, canUpdateProject };
