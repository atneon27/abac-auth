type User = {
    id: number,
    name: string,
    role: "user" | "agent" | "admin",
    department: string,
    accessLevel: number
}

type Project = {
    id: number,
    name: string,
    department: string,
    accessLevel: number,
    team: number[]
}

export type {
    User,
    Project
}