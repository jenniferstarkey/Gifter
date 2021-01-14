import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";

const Post = ({ post }) => {
    return (
        <Card className="m-4">
            <p className="text-left px-2"><strong>{post.title}</strong> Posted by: {post.userProfile.name} </p>
            <CardImg top src={post.imageUrl} alt={post.title} />
            <CardBody>
                <p>{post.caption}</p>
                <p>
                    <strong>Comments:</strong>
                </p>
                {post.comment.map((comment) => {
                    return <div key={comment.id}>{comment.message}</div>
                })}

            </CardBody>
        </Card>
    );
};

export default Post;