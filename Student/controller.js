const {Student} = require('../models')
const uuid = require("uuid");
//LIBRARY

const addStudentController = async (req, res) => {
    const studentInfo = req.body
    try {
        await Student.create(Object.assign({id_student: uuid.v4()}, studentInfo ))
        return res.status(200).json({studentInfo})
    }
    catch (e){
        console.log(e)
        return res.status(500).json({message: 'internalError'})
    }

}
const deleteStudentController = async (req, res) => {
    const {id} = req.query
    try {
        const student = await Student.findByPk(id)
        if (student) {
            await Student.destroy({where: {id_student: id}})
            return res.status(200).json(student)
        }
        else {
            return res.status(400).json({message: `Student with id=${id} was not found`})
        }
    }
    catch (e){
        console.log(e)
        return res.status(500).json(e)
    }
}

const getAllStudentsController = async (req, res) => {
    try {
        const students = await Student.findAll();

        return res.status(200).json(students);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal error' });
    }
};

// Update a student
const updateStudentController = async (req, res) => {
    const { id } = req.query;
    const studentInfo = req.body;

    try {
        const student = await Student.findByPk(id);

        if (student) {
            await student.update(studentInfo);
            return res.status(200).json(student);
        } else {
            return res.status(400).json({ message: `Student with id=${id} was not found` });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

module.exports = {
    addStudentController,
    deleteStudentController,
    updateStudentController,
    getAllStudentsController
}
