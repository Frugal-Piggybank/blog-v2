import React, { FC } from 'react';
import { Post } from '../../interfaces/post';

const Blog: FC<{ post: Post }> = ({ post }) => {
  return (
    <article>
      <header>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
      </header>
      <section dangerouslySetInnerHTML={{ __html: post.content }}></section>
      <hr />
      <footer>Bio component</footer>
    </article>
  );
};

export default Blog;
