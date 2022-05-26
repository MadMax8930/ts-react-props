import { useNavigate } from 'react-router-dom';
import {PostData} from '../interfaces';
import './postsList.css';

interface PostsListProps {
    props: PostData[] | null;
}

const Postslist: React.FC <PostsListProps> = ({props}) => {

    const navigate = useNavigate();

    return (
        <ul className="posts">
            {props?.map(post => (
                <li key={post.id} onClick={() => navigate(`/${post.id}`)}>
                    <h2>{post.title}</h2>
                    <p>Lire l'article</p>
                </li>
            ))}
        </ul>
    )
}

export default Postslist;