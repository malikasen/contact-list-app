import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

export const getContacts = () => db.any("SELECT * FROM contacts");
export const addContact = ({ name, email, phone, notes }) => 
  db.one("INSERT INTO contacts(name, email, phone, notes) VALUES(${name}, ${email}, ${phone}, ${notes}) RETURNING *", { name, email, phone, notes })

function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: "../.env" });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
