import React, { useEffect, useState } from 'react';

interface Comment {
  id: number;
  post_id: number;
  user: string;
  content: string;
  created_at: string;
  parent_id: number | null;
}

interface CommentBoxProps {
  postId: number;
}

const CommentBox: React.FC<CommentBoxProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/comments/${postId}`)
      .then(res => res.json())
      .then(setComments);
  }, [postId]);

  const handleSubmit = async () => {
    if (!input.trim()) return;
    const newComment = { post_id: postId, user: 'Me', content: input };

    const res = await fetch('http://localhost:3000/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newComment),
    });
    const savedComment = await res.json();
    setComments([...comments, savedComment]);
    setInput('');
  };

  return (
    <div>
      <h3>Comments</h3>
      <div>
        {comments.map(c => (
          <div key={c.id} style={{ marginLeft: c.parent_id ? 20 : 0 }}>
            <b>{c.user}</b>: {c.content} <small>{c.created_at}</small>
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
  );
};

export default CommentBox;