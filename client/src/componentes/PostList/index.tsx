import React, { useState, useEffect } from 'react';
import { Post, PostTitle, ButtonPost } from './styles';
import { FiPlay, FiLoader } from 'react-icons/fi';

import dateFormat from 'dateformat';
// Basic usage
// dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
// Saturday, June 9th, 2007, 5:46:21 PM
// https://www.npmjs.com/package/dateformat

interface PostData {
    id: string;
    author: string;
    title: string;
    body: string;
    created_at: Date;
}

interface PropsData {
    postdata: Array<PostData>;
}


const PostList: React.FC<PropsData> = (props) => {

    const [posts, setPosts] = useState<PostData[]>([])
    const [audio, setAudio] = useState("")
    const [index, setIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setPosts(props.postdata)
    }, [props.postdata])


    async function loadAPI(body: string, id: any) {
        setIndex(id)
        setIsLoading(true)
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", `http://localhost:3333/api/v3/synthesize?text=${body}&id=${id}`, true);
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log("responseText", this.responseText)
                uploadAudio(this.responseText, id)
                setIsLoading(false)
                

            }
        };
        xhttp.send();

    }


    function uploadAudio(apiResponse: any, id: any) {

        // const linkSource = `data:application/pdf;base64,${pdf}`;
        const linkSource = `data:audio/wav;base64,${apiResponse}`;
        // http://www.iandevlin.com/blog/2012/09/html5/html5-media-and-data-uri/
        // https://cloud.google.com/speech-to-text/docs/base64-encoding#node.js
        setAudio(linkSource)
    }


    return (
        <>
            {
                posts.map(post => {
                    return (
                        <Post key={post.id}>
                            <PostTitle>
                                <h3>{post.title}</h3>
                                <span>{post.author}</span>
                                <ButtonPost onClick={() => loadAPI(post.body, post.id)} type="button">{' '}

                                { isLoading && index == Number(post.id)  ? 
                                    (<FiLoader className="loading" color="#fff" size={20} />) : 

                                    (<FiPlay color="#fff" size={20} />)
                                }
                                
                                </ButtonPost>
                            </PostTitle>
                            <p>{post.body}</p>
                            <span className="date">{dateFormat(post.created_at, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</span>

                            { isLoading ? "" : 
                             
                            index === Number(post.id) && 
                            (
                                    <audio controls autoPlay >
                                        <source src={audio} type="audio/wav" />
                                    </audio> 
                             ) 
                             }
                        </Post>
                    )
                })
            }
        </>
    )
}

export default PostList;