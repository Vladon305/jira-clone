import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma.service';
export declare class TasksService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTaskDto: CreateTaskDto, projectId: number): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        description: string;
        title: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        projectId: number;
        assignedToId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        description: string;
        title: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        projectId: number;
        assignedToId: number | null;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        description: string;
        title: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        projectId: number;
        assignedToId: number | null;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateTaskDto: UpdateTaskDto): string;
    updateTaskStatus(id: number, updateTaskDto: UpdateTaskDto): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        description: string;
        title: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        projectId: number;
        assignedToId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__TaskClient<{
        id: number;
        description: string;
        title: string;
        status: import(".prisma/client").$Enums.TaskStatus;
        projectId: number;
        assignedToId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
