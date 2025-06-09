import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for this blog.'],
    maxlength: [200, 'Title cannot be more than 200 characters'],
  },
  content: {
    type: String,
    required: [true, 'Please provide content for this blog.'],
  },
  excerpt: {
    type: String,
    required: [true, 'Please provide an excerpt for this blog.'],
    maxlength: [500, 'Excerpt cannot be more than 500 characters'],
  },
  thumbnail: {
    type: String,
    required: [true, 'Please provide a thumbnail for this blog.'],
  },
  author: {
    type: String,
    required: [true, 'Please provide an author name.'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema); 