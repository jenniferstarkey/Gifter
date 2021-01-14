import React, { useEffect, useContext } from "react";
import { PostContext } from "./PostProvider";
import Post from "./Post";

const PostList = () => {
    const { posts, getPosts, searchTerms, searchPosts } = useContext(PostContext);

    useEffect(() => {
        if (searchTerms !== "") {
            searchPosts(searchTerms, true);
        } else {
            getPosts();
        }
    }, [searchTerms]);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="cards-column">
                    {posts.map((post) => (
                        <Post
                            key={post.id}
                            post={post}
                            comments={post.comments}
                            comments={post.comments}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostList;