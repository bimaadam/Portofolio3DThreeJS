import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { blogPosts, projects } from '../constants';
import { CTA } from '../components';
import { arrow, threads } from '../assets/icons';

const Blog = () => {
  return (
    <section className='max-container'>
      <Helmet>
        <title>Blog | Bima Adam</title>
        <meta name='description' content='Read articles and tutorials about web development, 3D graphics, and technology from Bima Adam.' />
      </Helmet>

      <h1 className='head-text dark:text-white'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Blog</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 dark:text-white'>
        <p>Welcome to my corner of the internet. Here I share my thoughts, tutorials, and deep dives into the world of web development, 3D graphics, and everything in between. Enjoy your read!</p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {blogPosts.map((post) => (
          <div className='lg:w-[400px] w-full' key={post.id}>
            <div className='block-container w-12 h-12'>
              <div className='btn-back btn-back-blue rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={threads}
                  alt='Blog post icon'
                  className='w-1/2 h-1/2 object-contain'
                  loading='lazy'
                />
              </div>
            </div>

            

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl dark:text-white font-poppins font-semibold'>
                {post.title}
              </h4>
              <div className='mt-5'>
              <img
                src={post.image}
                alt={`Thumbnail for ${post.title}`}
                className='w-full h-45 object-cover rounded-lg shadow-md'
                loading='lazy'
              />
            </div>
              <p className='mt-2 dark:text-slate-300 text-slate-500'>{post.summary}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={`/blog/${post.id}`}
                  className='font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200'
                  aria-label={`Read more about ${post.title}`}
                >
                  Read More
                </Link>
                <img
                  src={arrow}
                  alt='Arrow icon indicating read more link'
                  className='w-4 h-4 object-contain'
                  loading='lazy'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200 dark:border-slate-700' />

      <CTA />
    </section>
  );
};

export default Blog;
