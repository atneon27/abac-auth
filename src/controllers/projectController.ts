import { Request, Response } from "express";
import { projects } from "../data/projectData.js";
import { Project } from "../types/types.js";
import { authorize } from "../middleware/authorize.js";
import { canViewProject } from "../policies/projectPolicy.js";

const handleResponse = (res: Response, status: number, message: string, project: Project | null = null) => {
    res.status(status).json({
        message: message,
        data: {
            project
        },
        error: null
    });
}

const viewProject = (req: Request, res: Response) => {
    const projectId = parseInt(req.params.id);
    const project = getProjectById(projectId, res)
    authorize(canViewProject, project!)(req, res, () => {
        handleResponse(res, 200, "Project Retrived Successfully", project);
    });
}

const updateProject = (req: Request, res: Response) => {
    const projectId = parseInt(req.params.id);
    const project = getProjectById(projectId, res);
    authorize(canViewProject, project!)(req, res, () => {
        handleResponse(res, 200, "Project Updated Successfully", project);
    });
}

const getProjectById = (id: number, res: Response) => {
    const project = projects.find(project => project.id === id);
    if(!project) {
        handleResponse(res, 404, "Project not found");
    }
    return project;
}

export {
    viewProject,
    updateProject
}