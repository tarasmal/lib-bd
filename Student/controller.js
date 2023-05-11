const {Student, Application} = require('../models')
const uuid = require("uuid");
//LIBRARY

const addStudentController = async (req, res) => {
    const studentInfo = req.body
    console.log(studentInfo.f)
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
    console.log(req)
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

const updateStudentController = async (req, res) => {
    const {student_id, application_id} = req.body
    try {
        const student = Student.findByPk(student_id)
        const application = Application.findByPk(application_id)
        console.log(application)

    }
    catch (e) {
        return res.status(500).message()
    }
}

const getAllStudentsController = async (req, res) => {

}

module.exports = {
    addStudentController,
    deleteStudentController,
    updateStudentController,
    getAllStudentsController
}
