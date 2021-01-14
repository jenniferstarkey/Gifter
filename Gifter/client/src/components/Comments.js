import React from "react";

const Comment = ({ comment }) => {
    return (
        <div>
            <p>{comment.message}</p>
        </div>
    );
};

export default Comment;