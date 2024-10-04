"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskStatusDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_task_dto_1 = require("./create-task.dto");
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["PENDING"] = "PENDING";
    TaskStatus["IN_PROGRESS"] = "IN_PROGRESS";
    TaskStatus["COMPLETED"] = "COMPLETED";
})(TaskStatus || (TaskStatus = {}));
class UpdateTaskStatusDto extends (0, mapped_types_1.PartialType)(create_task_dto_1.CreateTaskDto) {
}
exports.UpdateTaskStatusDto = UpdateTaskStatusDto;
//# sourceMappingURL=update-task-status.dto.js.map