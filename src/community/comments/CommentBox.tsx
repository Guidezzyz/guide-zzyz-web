import React, { useEffect, useState } from "react"

interface Comment {
  id: number
  content: string
}

interface CommentBoxProps {
  postId: string
}

const CommentBox: React.FC<CommentBoxProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([])
  const [input, setInput] = useState("")
  useEffect(() => {
    fetch(`http://localhost:3000/comments/${postId}`)
      //the link should be specified in the .env file, and the server should be started separately
      .then(res => res.json())
      .then(setComments)
  }, [postId])

  const handleSubmit = async () => {
    if (!input.trim()) return

    const res = await fetch(
      `http://localhost:3000/comments/${postId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: input })
      }
    )

    const savedComment: Comment = await res.json()

    setComments(prev => [...prev, savedComment])
    setInput("")
  }

  return (
    <div>
      <h3>Comments</h3>

      <div>
        {comments.map(c => (
          <div key={c.id}>
            {c.content}
          </div>
        ))}
      </div>

      <div>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Write a comment..."
        />
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  )
}

export default CommentBox