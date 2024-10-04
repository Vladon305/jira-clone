import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    create(createProjectDto: CreateProjectDto, userId?: string): Promise<{
        id: number;
        name: string;
        description: string;
        createdById: number;
    }>;
    findAll(userId?: string): import(".prisma/client").Prisma.PrismaPromise<({
        tasks: {
            id: number;
            name: string;
            description: string;
            status: import(".prisma/client").$Enums.TaskStatus;
            projectId: number;
            assignedToId: number | null;
        }[];
        createdBy: {
            id: number;
            name: string | null;
            email: string;
            role: import(".prisma/client").$Enums.Role;
        };
    } & {
        id: number;
        name: string;
        description: string;
        createdById: number;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ProjectClient<{
        tasks: {
            id: number;
            name: string;
            description: string;
            status: import(".prisma/client").$Enums.TaskStatus;
            projectId: number;
            assignedToId: number | null;
        }[];
        createdBy: {
            id: number;
            name: string | null;
            email: string;
            role: import(".prisma/client").$Enums.Role;
        };
    } & {
        id: number;
        name: string;
        description: string;
        createdById: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateProjectDto: UpdateProjectDto): import(".prisma/client").Prisma.Prisma__ProjectClient<{
        id: number;
        name: string;
        description: string;
        createdById: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        description: string;
        createdById: number;
    }>;
}
