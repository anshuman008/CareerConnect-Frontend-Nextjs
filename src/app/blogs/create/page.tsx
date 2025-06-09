'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Editor } from '@tinymce/tinymce-react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { uploadImage } from '@/utils/supabase';

export default function CreateBlogPage() {
  const router = useRouter();
  const editorRef = useRef<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPasswordModal, setShowPasswordModal] = useState(true);
  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
    excerpt: '',
    thumbnail: null as File | null,
    thumbnailPreview: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setBlogData(prev => ({
        ...prev,
        thumbnail: file,
        thumbnailPreview: URL.createObjectURL(file)
      }));
    }
  });

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin008') {
      setIsAuthenticated(true);
      setShowPasswordModal(false);
    } else {
      alert('Invalid password');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {


   console.log("blogData", blogData);

    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const content = editorRef.current?.getContent() || '';
      
      // Validate required fields
      if (!blogData.title.trim()) {
        throw new Error('Title is required');
      }
      if (!blogData.excerpt.trim()) {
        throw new Error('Excerpt is required');
      }
      if (!content.trim()) {
        throw new Error('Content is required');
      }

      let thumbnailUrl = '';

      // Upload thumbnail to Supabase if exists
      if (blogData.thumbnail) {
        try {
          thumbnailUrl = await uploadImage(blogData.thumbnail);
          console.log('Thumbnail uploaded successfully:', thumbnailUrl);
        } catch (err) {
          console.error('Error uploading thumbnail:', err);
          throw new Error('Failed to upload thumbnail. Please try again.');
        }
      }

      const response = await fetch('/api/blogs', {
        method: 'POST',
        body: JSON.stringify({
          title: blogData.title.trim(),
          content: content.trim(),
          excerpt: blogData.excerpt.trim(),
          thumbnail: thumbnailUrl || '/placeholder.jpg',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.details || data.error || 'Failed to create blog');
      }

      console.log('Blog created successfully:', data);
      router.push('/blogs');
    } catch (err) {
      console.error('Error creating blog:', err);
      setError(err instanceof Error ? err.message : 'Failed to create blog. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showPasswordModal) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full">
          <h2 className="text-2xl font-bold text-white mb-6">Admin Authentication</h2>
          <form onSubmit={handlePasswordSubmit}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-300 mb-2">
                Enter Admin Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Create New Blog Post</h1>
        {error && (
          <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-200">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={blogData.title}
              onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="excerpt" className="block text-sm font-medium mb-2">
              Excerpt
            </label>
            <textarea
              id="excerpt"
              value={blogData.excerpt}
              onChange={(e) => setBlogData({ ...blogData, excerpt: e.target.value })}
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Thumbnail
            </label>
            <div
              {...getRootProps()}
              className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors"
            >
              <input {...getInputProps()} />
              {blogData.thumbnailPreview ? (
                <div className="relative w-full h-48">
                  <Image
                    src={blogData.thumbnailPreview}
                    alt="Thumbnail preview"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ) : (
                <div className="text-gray-400">
                  <p>Drag and drop an image here, or click to select</p>
                  <p className="text-sm mt-2">Supports: JPG, PNG, WEBP</p>
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Content
            </label>
            <Editor
              apiKey="h1nos62wt2la5138xjadpf0bsgwyxlwr02cdo8ouj5lwsgmk"
              onInit={(evt:any, editor:any) => editorRef.current = editor}
              init={{
                height: 500,
                menubar: true,
                plugins: [
                  'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                  'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                  'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                ],
                toolbar: 'undo redo | blocks | ' +
                  'bold italic forecolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif; font-size: 14px; }',
                skin: 'oxide-dark',
                content_css: 'dark'
              }}
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.push('/blogs')}
              className="px-6 py-2 rounded bg-gray-700 hover:bg-gray-600 transition-colors"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded bg-blue-600 hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Publishing...' : 'Publish'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 