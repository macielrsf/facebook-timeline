import React, { useState } from 'react';

import data from '../assets/data.json';

import PostItem from './PostItem';

function PostList() {
    const [posts,] = useState(data);

    return (
        <div className="postlist">
            {posts.map(post => (
                <PostItem key={post.id} {...post} />
            ))}
        </div>
    );
};

export default PostList;
