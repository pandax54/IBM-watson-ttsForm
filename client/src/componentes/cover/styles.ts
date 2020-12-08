import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    width: 95%;
    min-width: 780px;
    padding-bottom: 100px;
`

export const PostContainer = styled.div`
display: flex;
flex: 1;
flex-direction: column;
justify-content: start;
align-items: center;
text-align: center;
margin-top: 60px;
margin-right: 30px;
`

export const FormContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    text-align: center;
    margin-top: 60px;
    margin-right: 30px;
    margin-left: 30px;
`
export const TitleForm = styled.h1`
    color: #33333;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 44px;
    font-weight: 400;
    margin-bottom: 18px;
`

export const Subtitle = styled.h2`
    color: #f9f2f2;
    color: #fff0f2;
    /* max-width: 500px; */
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 70px;
`
export const InputDiv = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Input = styled.input`
    width: 480px;
    height: 47px;
    border-radius: 4px 0 0 4px;
    border: none;
    padding: 0 18px;
    margin-bottom: 16px; 

    &::placeholder {
        font-size: 16px;
        color: #605c5c;
    }

`

export const TextArea = styled.textarea`
    width: 480px;
    height: 130px;
    border-radius: 4px 0 0 4px;
    border: none;
    padding: 10px 18px;
    margin-bottom: 16px; 

    &::placeholder {
        /* padding-top: 10px; */
        font-size: 16px;
        color: #605c5c;
    }
`

export const Button = styled.button`
    height: 47px;
    border: none;
    width: auto;
    padding: 6px 16px;
    margin-top: 16px;
    background: #f6435d;
    /* color: #f9f2f2; */
    color: #fff0f2;
    font-size: 1.2rem;
    font-weight: 500;
    border-radius: 4px;
    /* position: absolute; */

    &:hover {
        background: ${shade(0.2, '#f6435d')};
    }
`


// LISTA DE POSTS 

export const ListContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin-bottom: 50px;
    margin-left: 40px;

`

export const TitleList = styled.h1`
    color: #605c5c;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 44px;
    font-weight: 400;
    margin-bottom: 18px;
`


