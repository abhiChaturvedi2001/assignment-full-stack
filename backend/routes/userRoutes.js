import express from "express"
import { createStudent, deleteStudent, getAllStudents, updateStudent } from "../controller/userController.js";

const router = express.Router();

router.post('/students', createStudent);
router.get('/students', getAllStudents);
router.put('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent);

export default router
