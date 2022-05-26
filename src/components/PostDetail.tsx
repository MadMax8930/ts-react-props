import { Link } from 'react-router-dom';
import {PostData} from '../interfaces';
import './postDetail.css';

interface PostInfo {
    props: PostData | null;
}

const PostDetail: React.FC<PostInfo> = ({props}) => {
    return(
        <div className="post">
            <h1>Publication numéro: {props?.id}</h1>
            <h2>Titre: {props?.title}</h2>
            <p>{props?.body}</p>
            <Link to="/">Page Principale</Link>
        </div>
    )
}

export default PostDetail;