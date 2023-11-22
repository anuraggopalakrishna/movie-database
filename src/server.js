// require('dotenv').config();
// process.env.MONGODB_URI = "mongodb+srv://generic_user:gL5nSaycAzXKNaBf@cluster0.ftxrjk8.mongodb.net/movieDB?retryWrites=true&w=majority";
// process.env.PORT = 3000;
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
// const port = process.env.PORT || 3000;
const port = 3000;

mongoose.connect("mongodb+srv://generic_user:gL5nSaycAzXKNaBf@cluster0.ftxrjk8.mongodb.net/movieDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
