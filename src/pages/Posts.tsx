import { useEffect, useState } from 'react';
import {PostData} from '../interfaces';
import Postslist from '../components/Postslist';
import './posts.css';

const Posts: React.FC = () => {
    const [allPosts, setAllPosts] = useState<PostData[] | null>(null);
    const [numberOfPosts, setNumberOfPosts] = useState<number>(3);

    const localOrStateNumber = () => localStorage.getItem('number') || numberOfPosts;
    const localOrStateNum = localOrStateNumber();

    useEffect(() => {
        const getPosts = async() => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${localOrStateNum}`);
            const data: PostData[] = await response.json();
            console.log(data);
            setAllPosts(data);
        }
        getPosts();
    }, [localOrStateNum]);

    // Convertion de String en Number avec un +
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumberOfPosts(+e.target.value);
        localStorage.setItem('number', e.target.value); //stocké au niveau du navigateur
    }

    return (
    <div className="post-container">
        <h1>Page Principale</h1>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <label htmlFor="posts">Nombre de publication {localOrStateNum}</label>
            <input type="range" min={1} max={20} onChange={onChange} defaultValue={localOrStateNum}/>
            <Postslist props={allPosts}/>
        </div>
    </div>
    )
}

export default Posts;