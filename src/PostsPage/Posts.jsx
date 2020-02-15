import React, { useEffect, useState, useContext } from 'react'
import { PostsContainer, Post } from './styles'
import Comments from '../common/Comments/Comments'
import { Link } from 'react-router-dom'
import useApiCall from '../common/hooks/useApiCall'

export default function Posts() {

    const [posts, setPosts] = useApiCall('http://www.mocky.io/v2/5e47dc373000005c002949f5', [])

    const addLike = (id) => {
        const newPosts = posts.map(p => {
            if (p.id === id) p.likes++
            return p
        })
        setPosts(newPosts)
    }

    return (
        <>
            <div>
                <Link to='/account'>Account</Link>
            </div>
            <PostsContainer>
                {posts.map(post => (
                    <Post key={post.id}>
                        <img src={post.picture} />
                        <div>{post.username}</div>
                        <button onClick={() => addLike(post.id)}>{post.likes}</button>
                        <div>Comentarios:</div>
                        <Comments comments={post.comments} />
                    </Post>
                ))}
            </PostsContainer>
        </>
    )
}
