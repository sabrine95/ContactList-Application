const Contact = require("../models/contactSchema")

const getContact = async (req, res) => {
    try {
        const contact = await Contact.find()
        res.status(201).json({msg: "find all the data", contact })
    } catch (err) {
        res.status(500).json({msg: err.message})
    }
}

const addContact = async (req, res) => {
    try {
        const contact = new Contact(req.body)
        await contact.save()
        res.status(201).json({msg: "contact added", contact})
    } catch (err) {
        res.status(500).json({msg : err.message})
    }
}


const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id)
        if (!contact) return res.status(404).json({msg: "not found"})
         res.status(201).json({msg: "contact deleted", contact })
    } catch (err) {
        res.status(500).json({msg: err.message})
    }
}

const updateContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate({_id: req.params.id}, {...req.body})
        if (!contact) return res.status(404).json({msg: "not found"})
         res.status(201).json({msg: "contact updated", contact: {...contact._doc, ...req.body} })
    } catch (err) {
        res.status(500).json({msg: err.message})
    }
}


module.exports = { getContact, addContact, updateContact, deleteContact}