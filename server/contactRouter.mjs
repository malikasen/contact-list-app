import express from "express";

import * as db from "./db.mjs";

const contactRouter = express.Router();

contactRouter.get("/", async (request, response) => {
  const contacts = await db.getContacts();
  response.json(contacts);
});

contactRouter.use(express.json()); 

contactRouter.post("/", async (request, response) => {
  console.log("body", request.body);
  const params = {
    name: request.body.newContact.name,
    email: request.body.newContact.email,
    phone: request.body.newContact.phone,
    notes: request.body.newContact.notes,
  }
  const contact = await db.addContact(params);
  response.status(201).json(contact);
});

contactRouter.put("/:id", async (request, response) => {
  console.log("edit body", request.body);
  const params = {
    id: request.body.updatedContact.id,
    name: request.body.updatedContact.name,
    email: request.body.updatedContact.email,
    phone: request.body.updatedContact.phone,
    notes: request.body.updatedContact.notes
  }
  const contact = await db.editContact(params);
  response.status(201).json(contact);
})

export default contactRouter;