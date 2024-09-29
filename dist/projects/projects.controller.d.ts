import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    create(createProjectDto: CreateProjectDto, userId: string): import(".prisma/client").Prisma.Prisma__ProjectClient<{
        name: string;
        id: number;
        description: string;
        createdById: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        tasks: {
            id: number;
            description: string;
            title: string;
            status: import(".prisma/client").$Enums.TaskStatus;
            projectId: number;
            assignedToId: number | null;
        }[];
        createdBy: {
            name: string | null;
            email: string;
            id: number;
            role: import(".prisma/client").$Enums.Role;
        };
    } & {
        name: string;
        id: number;
        description: string;
        createdById: number;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ProjectClient<{
        name: string;
        id: number;
        description: string;
        createdById: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateProjectDto: UpdateProjectDto): import(".prisma/client").Prisma.Prisma__ProjectClient<{
        name: string;
        id: number;
        description: string;
        createdById: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ProjectClient<{
        name: string;
        id: number;
        description: string;
        createdById: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
