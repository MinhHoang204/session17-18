import React from 'react';

const posts = [
  { id: 1, title: 'Accusamus beatae ad facilis', thumbnailUrl: 'https://via.placeholder.com/150/8f209a/FFFFFF?text=150+x+150' },
  { id: 2, title: 'Reprehenderit est deserunt', thumbnailUrl: 'https://via.placeholder.com/150/00ff00/FFFFFF?text=150+x+150' },
  { id: 3, title: 'Officia porro iure quia', thumbnailUrl: 'https://via.placeholder.com/150/ff00ff/FFFFFF?text=150+x+150' },
  { id: 4, title: 'Qui eius qui autem sed', thumbnailUrl: 'https://via.placeholder.com/150/008080/FFFFFF?text=150+x+150' },
  { id: 5, title: 'Epudiandae iusto deleniti', thumbnailUrl: 'https://via.placeholder.com/150/008000/FFFFFF?text=150+x+150' },
  { id: 6, title: 'Iusto sunt nobis quasi veritatis', thumbnailUrl: 'https://via.placeholder.com/600/ffff00/FFFFFF?text=600+x+600' },
];

export default function PostsPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Danh sách bài viết</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              overflow: 'hidden',
              width: '150px',
              textAlign: 'center',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img src={post.thumbnailUrl} alt={post.title} style={{ width: '100%' }} />
            <p style={{ padding: '10px', fontWeight: 'bold' }}>{post.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
