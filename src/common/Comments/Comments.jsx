import React from 'react'

export default function Comments(props) {
    return (
        <div>
            {props.comments.map((comment, key) => (
                <div key={key}>
                    <div>{comment.username}</div>
                    <div>{comment.content}</div>
                </div>
            ))}
        </div>
    )
}
