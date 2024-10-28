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

export const getAllUsers = (_req, res) => {
  res.json(users);
};

export const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);

  const user = users.find((u) => {
    return u.id == userId;
  });

  if (!user) {
    const error = new Error("usuario não cadastrado");
    error.statusCode = 404;
    res.send("Usuário não encontrado");
  }
  res.json(user);
};

export const createUser = (req, res) => {
  const { nome, email } = req.body;
  if (!nome || !email) {
    return res.status(400).json({ error: "Nome e email sao obrigatorios" });
  }
  const newUser = {
    id: users.length + 1,
    nome,
    email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
};

export const updateUser = (req, res) => {
  const userId = parseInt(req.params.id)
  const {nome, email} = req.body

  const userIndex = users.findIndex((u) => u.id == userId)
  if(userIndex === -1){
    return res.status(404).json({error: 'usuario nao encontrado'})
  }
  if(nome) users[userIndex].nome = nome
  if(email) users[userIndex].email = email

  res.json(users[userIndex])
};

export const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id)
  users = users.find((u) => {
    return u.id !== userId
  })
  res.json({message: 'deu certo'})
}
