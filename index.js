import express from 'express';
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);
const handleHome = (req, res) => res.send('home!');
const handleProfile = (req, res) => res.send('profile!');

const middleware = (req, res, next) => {
  console.log('middle');
  next();
};

app.get('/', middleware, handleHome);

// middleware globally
app.use(middleware)

app.get('/profile', handleProfile);


app.listen(PORT, handleListening);