const express = require('express');
const app = express();

app.use(express.json());

let tasks = [];  // Tableau en mémoire des tâches

// Afficher toutes les tâches
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Ajouter une tâche
app.post('/tasks', (req, res) => {
  const task = {
    id: Date.now(),
    title: req.body.title || "Tâche sans titre"
  };
  tasks.push(task);
  res.status(201).json(task);
});

// Supprimer une tâche par id
app.delete('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.filter(task => task.id !== id);
  res.status(204).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
