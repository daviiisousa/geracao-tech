let users = [
  {
    id: 1,
    nome: "Davi",
    email: "davi@email.com",
  },
  {
    id: 2,
    nome: "Eduardo",
    email: "emailEduardo@teste.com",
  },
];

const getAllUsers = (_req, res) => {
  res.json(users);
};

module.exports = {
    getAllUsers
}
