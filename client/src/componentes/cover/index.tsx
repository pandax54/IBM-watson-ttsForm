import React, { useState, FormEvent, useEffect, useCallback } from 'react';
import { Container, FormContainer, PostContainer, TitleForm, Subtitle, Input, TextArea, Button, InputDiv, TitleList, ListContent } from './styles';
import PostList from '../PostList';

interface PostData {
    id: string;
    author: string;
    title: string;
    body: string;
    created_at: Date;
}


const Cover: React.FC = () => {


    const [inputAuthor, setInputAuthor] = useState('')
    const [inputTitle, setInputTitle] = useState('')
    const [inputBody, setInputBody] = useState('')

    const [posts, setPosts] = useState<PostData[]>([])

    const handleAddPost = useCallback(async (e: FormEvent) => {

        e.preventDefault()

        let xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://localhost:3333", true);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {

                // let response = this.responseText;
            }
        };
        let data = {
            author: inputAuthor,
            title: inputTitle,
            body: inputBody
        }
        xhttp.send(JSON.stringify(data));

        setInputAuthor("")
        setInputTitle("")
        setInputBody("")


        // const response = await api.post('/', {
        //     author: inputAuthor,
        //     title: inputTitle,
        //     body: inputBody
        // });

        // const post: PostData = response.data

    }, [inputAuthor, inputBody, inputTitle]);


    useEffect(() => {
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://localhost:3333", true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {

                // Parse this.responseText to JSON object
                let response = JSON.parse(this.responseText);
                setPosts(response)

            }
        };
        xhttp.send();

        // api.get('/').then(response => {
        //     console.log("the posts are", response.data)
        //     const posts = response.data
        //     setPosts(posts)
        // })
    }, [handleAddPost])


    // async function handleAddPost(e: FormEvent) {
    //     e.preventDefault()

    //     let xhttp = new XMLHttpRequest();
    //     xhttp.open("POST", "http://localhost:3333", true);
    //     xhttp.setRequestHeader("Content-Type", "application/json");
    //     xhttp.onreadystatechange = function () {
    //         if (this.readyState === 4 && this.status === 200) {

    //             // let response = this.responseText;
    //         }
    //     };
    //     let data = {
    //         author: inputAuthor,
    //         title: inputTitle,
    //         body: inputBody
    //     }
    //     xhttp.send(JSON.stringify(data));

    //     setInputAuthor("")
    //     setInputTitle("")
    //     setInputBody("")


    //     // const response = await api.post('/', {
    //     //     author: inputAuthor,
    //     //     title: inputTitle,
    //     //     body: inputBody
    //     // });

    //     // const post: PostData = response.data

    // }


    return (
        <Container>
            <FormContainer>
                <TitleForm>Transforme seu comentário em áudio</TitleForm>
                <Subtitle>A long URL is always a problem. It's hard to remember and share.</Subtitle>
                <InputDiv onSubmit={handleAddPost}>
                    <Input
                        placeholder="Autor do comentário"
                        value={inputAuthor}
                        onChange={(e) => { setInputAuthor(e.target.value) }}
                    />
                    <Input
                        placeholder="Título"
                        value={inputTitle}
                        onChange={(e) => { setInputTitle(e.target.value) }}
                    />
                    <TextArea
                        placeholder="Escreva seu comentário"
                        value={inputBody}
                        onChange={(e) => { setInputBody(e.target.value) }}
                    />
                    <Button type="submit">Cadastrar</Button>
                </InputDiv>
            </FormContainer>

            <PostContainer>
                <TitleList>Comentários</TitleList>
                <ListContent>
                    <PostList postdata={posts} />
                </ListContent>
            </PostContainer>

        </Container >
    )
}

export default Cover;