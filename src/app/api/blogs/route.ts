import { NextResponse } from 'next/server';
import connectDB from '@/utils/mongodb';
import Blog from '@/models/Blog';

export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find({}).sort({ date: -1 });
    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json();
    
    // Validate required fields
    if (!data.title || !data.content || !data.excerpt) {
      return NextResponse.json(
        { error: 'Missing required fields', details: 'Title, content, and excerpt are required' },
        { status: 400 }
      );
    }

    // Create new blog post
    const blog = await Blog.create({
      title: data.title,
      content: data.content,
      excerpt: data.excerpt,
      thumbnail: data.thumbnail || '/placeholder.jpg',
      author: 'Admin',
      date: new Date(),
    });

    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { 
        error: 'Failed to create blog',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 