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

export default contactRouter;