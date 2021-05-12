import axios from "axios";
import { useEffect, useState } from "react";
import CommentList from "./CommentList";

const Storie = (props) => {

    const [storie, updateStorie] = useState([]);
    const [comments, updateComments] = useState([]);

    useEffect(() => {
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${props.id}.json?print=pretty`)
            .then(res => {
                updateStorie(res.data)
            }).catch(e => {
                console.log(e)
            })
    }, [props.id])

    const getStorieHtml = () => {
        if (!storie) return false;
        return <div className="card text-center">
            <div className="card-body">
                <h5 className="card-title">by {storie.by}</h5>
                <p className="card-text">{storie.title}</p>
                <button onClick={()=>updateComments(storie.kids)} className="btn btn-sm btn-primary">Comments</button>
            </div>
        </div>
    }

    const getComments = () => {
        return comments.map((comment, index) => {
            return <CommentList key={index} id={comment}/>
        })
    }

    return (
        <div>
            <div className="container mt-5">
                {getStorieHtml()}
                {comments.length > 0  && getComments()}
            </div>
        </div>
    )

}

export default Storie;