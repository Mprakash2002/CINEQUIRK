const express = require('express');
const path = require('path');
const app = express();

// Serve static files (CSS, JS, images, videos)
app.use(express.static('public'));

// Movie list (you can move this to movies.json later)
const movies = [
  {
    id: "oppenheimer",
    title: "Oppenheimer",
    description: "CBFC: U/A 2023 ‧ Thriller/Historical drama ‧ 3 hours",
    video: "/videos/oppenheimer.mp4"
  },
  {
    id: "el-camino",
    title: "El Camino: A Breaking Bad Movie",
    description: "2019 ‧ Thriller/Crime ‧ 2h 2m",
    video: "/videos/el-camino.mp4"
  },
  {
    id: "Dune: Part Two",
    title: "Dune: Part Two",
    description: "2024 ‧ Sci-fi/Adventure ‧ 2h 46m",
    video: "/videos/Dune 2"
  }
];

// Movie route
app.get('/movie/:id', (req, res) => {
  const movie = movies.find(m => m.id === req.params.id);
  if (!movie) {
    return res.status(404).send('<h1>Movie Not Found</h1><a href="/">Go Back</a>');
  }

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${movie.title}</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body style="background-color: black; color: white; text-align: center;">
      <div style="padding: 50px;">
        <h1>${movie.title}</h1>
        <video width="700" controls>
          <source src="${movie.video}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <p style="margin-top: 20px;">${movie.description}</p>
        <a href="/" style="color: white;">⬅ Go Back</a>
      </div>
    </body>
    </html>
  `);
});

// Start the server
app.listen(3000, () => {
  console.log('✅ Server running at http://localhost:3000');
});