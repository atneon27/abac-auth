import { projects } from "../data/projectData.js";
import { authorize } from "../middleware/authorize.js";
import { canViewProject } from "../policies/projectPolicy.js";
const handleResponse = (res, status, message, project = null) => {
    res.status(status).json({
        message: message,
        data: {
            project
        },
        error: null
    });
};
const viewProject = (req, res) => {
    const projectId = parseInt(req.params.id);
    const project = getProjectById(projectId, res);
    authorize(canViewProject, project)(req, res, () => {
        handleResponse(res, 200, "Project Retrived Successfully", project);
    });
};
const updateProject = (req, res) => {
    const projectId = parseInt(req.params.id);
    const project = getProjectById(projectId, res);
    authorize(canViewProject, project)(req, res, () => {
        handleResponse(res, 200, "Project Updated Successfully", project);
    });
};
const getProjectById = (id, res) => {
    const project = projects.find(project => project.id === id);
    if (!project) {
        handleResponse(res, 404, "Project not found");
    }
    return project;
};
export { viewProject, updateProject };
