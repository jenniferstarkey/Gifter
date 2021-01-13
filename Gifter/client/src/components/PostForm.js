import React, { useEffect, useState } from 'react';
import { Form, FormGroup, Label, Input, Card, Button } from 'reactstrap';

const PostForm = () => {
    const [event, setEvent] = useState([]);
    const [userProfileId, setUserProfileId] = useState("");
    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [caption, setCaption] = useState("");

    const NewPost = (post) => {
        return fetch('/api/post', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json());
    }

    const submitPost = (event) => {
        const post = {
            title, imageUrl, caption, userProfileId,
        };
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <Card>
                    <Form>
                        <FormGroup>
                            <Label for="userId">User Id</Label>
                            <Input id="userId" onChange={(e) => setUserProfileId(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input id="title" onChange={(e) => setTitle(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="imageUrl">URL</Label>
                            <Input id="imageUrl" onChange={(e) => setImageUrl(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="caption">Caption</Label>
                            <Input id="caption" onChange={(e) => setCaption(e.target.value)} />
                        </FormGroup>
                    </Form>
                    <Button onClick={submitPost}>Create New Post</Button>
                </Card>
            </div>
        </div>
    )

}
export default PostForm;