import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { blogPosts } from '../constants';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <section className='max-container text-center'>
        <Helmet>
          <title>Post Not Found</title>
        </Helmet>
        <h1 className='head-text'>Post Not Found</h1>
        <p className='mt-5'>Sorry, we couldn't find the post you're looking for.</p>
        <Link to='/blog' className='mt-5 inline-block text-blue-600 font-semibold'>
          &larr; Back to Blog
        </Link>
      </section>
    );
  }

  return (
    <section className='max-container'>
      <Helmet>
        <title>{post.seoTitle}</title>
        <meta name='description' content={post.seoDescription} />
      </Helmet>

      <div className='max-w-3xl mx-auto'>
        <h1 className='head-text dark:text-white'>{post.title}</h1>
        <p className='text-slate-500 mt-2'>{post.date}</p>

        <div 
          className='mt-10 prose lg:prose-xl max-w-none text-slate-600'
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <hr className='border-slate-200 my-10' />

        <Link to='/blog' className='text-blue-600 font-semibold'>
          &larr; Back to All Posts
        </Link>
      </div>
    </section>
  );
};

export default BlogPost;
