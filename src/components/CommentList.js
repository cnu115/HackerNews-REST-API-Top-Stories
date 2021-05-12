import axios from "axios";
import { useEffect, useState } from "react";

const CommentList = (props) => {

    const [comments, updateComments] = useState([]);

    useEffect(() => {
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${props.id}.json?print=pretty`)
            .then(res => {
                updateComments(res.data)
            }).catch(e => {
                console.log(e)
            })
    }, [props.id])  

    const getCommentHtml = () => {
        if (!comments) return false;
        return <div className="row d-flex justify-content-center">
        <div className="col-md-8">
            <div className="headings d-flex justify-content-between align-items-center mb-3">
                
            </div>
            <div className="card p-3">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="user d-flex flex-row align-items-center"> 
                    <span>
                        <small className="font-weight-bold" dangerouslySetInnerHTML={{__html: comments.text}}/>
                    </span>
                </div> 
                </div>
            </div>
        </div>
    </div>

    }
    return (
        <>
            {getCommentHtml()}
        </>
    )
}

export default CommentList;