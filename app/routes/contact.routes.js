const express = require("express");
//const contacts = require("../controllers/contact.controller");

const ContactController = require("../controllers/contact.controller");

module.exports = app => {
    const router = express.Router();
    const contacts = new ContactController();

    
   
    router.post("/", contacts.create);

    router.get("/", contacts.findAll );

    // router.get("/favorite", contacts.findAllFavorites);

    router.get("/:id", contacts.findOne);

    router.put("/:id", contacts.update);

    router.delete("/:id", contacts.delete);

    router.delete("/", contacts.deleteAll);

    app.use("/api/contacts", router);
};