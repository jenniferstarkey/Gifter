import React from "react";
import { Switch, Route } from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";
import { PostSearch } from "./PostSearch";
import { PostProvider } from "./PostProvider";

const ApplicationViews = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <PostProvider>
                    <PostSearch />
                    <PostList />
                </PostProvider>
            </Route>

            <Route path="/posts/add">
                <PostProvider>
                    <PostForm />
                </PostProvider>
            </Route>

            {/* <Route path="/posts/:id">
                <PostProvider>
                    <PostDetails />
                </PostProvider>
            </Route>

            <Route path="/user/:id">
                <PostProvider>
                    <UserPosts />
                </PostProvider>
            </Route> */}
        </Switch>
    );
};

export default ApplicationViews;