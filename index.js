const express = require('express');
const app = express();
const routes = require('./routes/userRoute'); 
const db = require('./config/dbconnection'); 
const cors = require('cors');
app.use(cors());
app.use(cors({
  origin: 'https://task-manager-kappa-silk-75.vercel.app'
}));


app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.use(express.json());
app.use('/api', routes);

app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
});
