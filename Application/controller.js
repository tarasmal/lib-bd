const { Application } = require('../models');
const uuid = require('uuid');

// Create a new application
const addApplicationController = async (req, res) => {
    const applicationInfo = req.body;

    try {
        const application = await Application.create({
            id_application: uuid.v4(),
            ...applicationInfo
        });

        return res.status(200).json(application);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal error' });
    }
};

// Delete an application
const deleteApplicationController = async (req, res) => {
    const { id } = req.query;

    try {
        const application = await Application.findByPk(id);

        if (application) {
            await application.destroy();
            return res.status(200).json(application);
        } else {
            return res.status(400).json({ message: `Application with id=${id} was not found` });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

// Retrieve all applications
const getAllApplicationsController = async (req, res) => {
    try {
        const applications = await Application.findAll();

        return res.status(200).json(applications);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal error' });
    }
};

// Update an application
const updateApplicationController = async (req, res) => {
    const { id } = req.query;
    const applicationInfo = req.body;

    try {
        const application = await Application.findByPk(id);

        if (application) {
            await application.update(applicationInfo);
            return res.status(200).json(application);
        } else {
            return res.status(400).json({ message: `Application with id=${id} was not found` });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

module.exports = {
    addApplicationController,
    deleteApplicationController,
    getAllApplicationsController,
    updateApplicationController
};

