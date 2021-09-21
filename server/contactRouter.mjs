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
    name: request.body.name,
    email: request.body.email,
    phone: request.body.phone,
    notes: request.body.notes,
  }
  const contact = await db.addContact(request.body);
  response.status(201).json(contact);
});

export default contactRouter;