import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma.service';
export declare class ProjectsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProjectDto: CreateProjectDto, userId: number): import(".prisma/client").Prisma.Prisma__ProjectClient<{
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
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProjectClient<{
        name: string;
        id: number;
        description: string;
        createdById: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateProjectDto: UpdateProjectDto): import(".prisma/client").Prisma.Prisma__ProjectClient<{
        name: string;
        id: number;
        description: string;
        createdById: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ProjectClient<{
        name: string;
        id: number;
        description: string;
        createdById: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
