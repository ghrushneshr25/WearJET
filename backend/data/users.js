import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Poorva Witchare",
    email: "poorva@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Anisha Mahadik",
    email: "Anisha@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
