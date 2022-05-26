import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostDetail from "../components/PostDetail";
import { PostData } from "../interfaces";
import './post.css';

type PostParams = {
    id: string;
}
const Post = () => {
    const { id }= useParams<PostParams>();
    const [onePost, setOnePost] = useState<PostData | null>(null);

    useEffect(() => {
        const getPost = async() => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data: PostData = await response.json();
            setOnePost(data);
        }
        getPost();
    }, [id]);
    console.log(onePost);

    return (
        <div className="post-container">
            <h1>Detail de la publication</h1>
            <PostDetail props={onePost}/>
        </div>
    )
}

export default Post;