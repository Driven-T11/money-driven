import { Router } from "express";
import { employeeInsertSchema, employeeUpdateSchema } from "../schemas/employeeSchemas.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import {
  insertEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee,
  getEmployeeNetSalaryWithTaxes
} from "../controllers/employeeController.js";

const employeeRouter = Router();

employeeRouter.get("/employees", getEmployees);
employeeRouter.get("/employees/:id", getEmployee);
employeeRouter.get("/employee/:id/net-salary", getEmployeeNetSalaryWithTaxes)
employeeRouter.post("/employees", validateSchema(employeeInsertSchema), insertEmployee);
employeeRouter.put("/employees/:id", validateSchema(employeeUpdateSchema), updateEmployee);
employeeRouter.delete("/employees/:id", deleteEmployee);

export default employeeRouter;