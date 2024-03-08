const express = require('express');
const app = express();

// Dados dos filmes
const movies = [
  { title: 'Pulp Fiction', year: 1994, gener: 'crime' },
  { title: 'Fight Club', year: 1999, gener: 'drama' },
  { title: 'Pulp Fiction', year: 1994, gener: 'crime' },
  { title: 'Fight Club', year: 1999, gener: 'drama' },
  { title: 'Forrest Gump', year: 1994, gener: 'drama' },
  { title: 'Inception', year: 2010, gener: 'sci-fi' },
  { title: 'The Matrix', year: 1999, gener: 'action' },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003, gener: 'fantasy' },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, gener: 'fantasy' },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002, gener: 'fantasy' },
  { title: 'The Shawshank Redemption', year: 1994, gener: 'drama' },
  { title: 'The Godfather', year: 1972, gener: 'sci-fi' },
  { title: 'The Godfather: Part II', year: 1974, gener: 'comedy' },
  { title: 'The Dark Knight', year: 2008, gener: 'action' },
  { title: 'The Science of Sleep', year: 2006, gener: 'drama' },
  { title: 'The Departed', year: 2006, gener: 'crime' },
  { title: 'Schindler\'s List', year: 1993, gener: 'drama' },
  { title: 'Goodfellas', year: 1990, gener: 'crime' },
  { title: 'The Silence of the Lambs', year: 1991, gener: 'thriller' },
  { title: 'Saving Private Ryan', year: 1998, gener: 'war' },
  { title: 'The Green Mile', year: 1999, gener: 'drama' },
  { title: 'The Usual Suspects', year: 1995, gener: 'crime' }
];

// Rota para obter todos os filmes
app.get('/api/movies', (req, res) => {
  res.json(movies);
});

// Inicie o servidor na porta 3000
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} 🤬`);
});
