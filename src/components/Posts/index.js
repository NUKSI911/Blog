import React from 'react'
import Post from './Post'
import Banner from '../Banner'
const Posts = ({ posts, title }) => {
  return (
    <section className="posts">
      <h3 className="post-title">{title}</h3>
      <div className="posts-center">
        {/* post column */}
        <article>
          {React.Children.toArray(posts?.map(post => <Post {...post} />))}
        </article>
        {/* banner column */}
        <article>
          <Banner />
        </article>
      </div>
    </section>
  )
}

export default Posts
