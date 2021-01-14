import React, { useState, createContext } from "react";
export const PostContext = createContext();

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([]);
    const [searchTerms, setSearchTerms] = useState("");

    const getPosts = () => {
        return fetch("/api/post")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    };

    const addPost = (postObj) => {
        return fetch("/api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postObj),
        })
            .then((res) => res.json())
            .then(getPosts);
    };

    const getPostById = (id) => {
        return fetch(`/api/post/${id}`).then((res) => res.json());
    };

    const getPostByUserId = (id) => {
        return fetch(`/api/post/getbyuser/${id}`).then((res) => res.json());
    };

    const searchPosts = (searchString, inOrder) => {
        return fetch(`/api/post/search?q=${searchString}&sortDesc=${inOrder}`)
            .then((res) => res.json())
            .then((data) => setPosts(data));
    };

    return (
        <PostContext.Provider
            value={{
                posts,
                getPosts,
                addPost,
                searchPosts,
                setSearchTerms,
                searchTerms,
                getPostById,
                getPostByUserId,
            }}
        >
            {props.children}
        </PostContext.Provider>
    );
};
