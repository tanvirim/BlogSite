const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create a new Express app
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Set up body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/my-blog', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

// Define a Mongoose schema for a blog post
const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    
  },
  content: {
    type: String,
    
  },
});

// Define a Mongoose model for a blog post
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

// Define a route for creating a new blog post
app.post('/api/posts', async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = new BlogPost({ title, content });
    await newPost.save();
    res.json(newPost);
  } catch (error) {
    console.error('Error creating blog post', error);
    res.status(500).send('Server error');
  }
});

// Define a route for getting all blog posts
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await BlogPost.find();
    res.json(posts);
  } catch (error) {
    console.error('Error getting blog posts', error);
    res.status(500).send('Server error');
  }
});

// Start the app
app.listen(8080, () => {
  console.log('Server started on port 8080');
});