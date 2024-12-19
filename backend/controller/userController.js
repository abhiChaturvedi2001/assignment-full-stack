import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Create a new student
export const createStudent = async (req, res) => {
    const { name, course, cohort, status = true, } = req.body;
    try {
        const student = await prisma.student.create({
            data: {
                name,
                course,
                cohort,
                status,
            },
        });
        res.status(201).json(student);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to create student' });
    }
};

// Get all students
export const getAllStudents = async (req, res) => {
    try {
        const students = await prisma.student.findMany();
        res.status(200).json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch students' });
    }
};

// Update a student
export const updateStudent = async (req, res) => {
    const { id } = req.params;
    const { name, course, cohort, status } = req.body;
    try {
        const student = await prisma.student.update({
            where: { id: parseInt(id) },
            data: { name, course, cohort, status },
        });
        res.status(200).json(student);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to update student' });
    }
};

// Delete a student
export const deleteStudent = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.student.delete({
            where: { id: parseInt(id) },
        });
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to delete student' });
    }
};