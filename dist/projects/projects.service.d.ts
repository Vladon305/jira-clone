import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma.service';
export declare class ProjectsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProjectDto: CreateProjectDto, userId: number): import(".prisma/client").Prisma.Prisma__ProjectClient<{
        id: number;
        name: string;
        description: string;
        createdById: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(userId: number): import(".prisma/client").Prisma.PrismaPromise<({
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
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProjectClient<{
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
    update(id: number, updateProjectDto: UpdateProjectDto): import(".prisma/client").Prisma.Prisma__ProjectClient<{
        id: number;
        name: string;
        description: string;
        createdById: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        description: string;
        createdById: number;
    }>;
}
