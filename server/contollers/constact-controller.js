const Contact = require('../models/contact-model');

const contactForm = async(req, res) => {
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({ message: "Message send Succesfully."});
    } catch (error) {
        return res.status(200).json({ message: "Message not Sent!"});
    }
};

module.exports = contactForm;