import styled from 'styled-components';
import { shade } from 'polished';

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

export const Post = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 1px solid #fff0f2;
    padding-bottom: 10px;
    margin-bottom: 10px;
    margin-top: 30px;
    width: 600px;
    border: 1px solid rgba(110, 125, 139, 0.2 );
    padding: 16px 36px 32px 42px;
    border-radius: 8px;
    margin-right: 20px;

    a {
        text-decoration: none;
        color: #605c5c;
        font-size: 20px;
        margin-top: 20px;
    }

    p {
        color: #4B343D;
        text-align: left;
        font-size: 14px;
        line-height: 21px;
        margin-bottom: 16px;
        opacity: 0.7;
    }

    span {
        text-align: left;
        color: #6E7D8B;
        font-size: 14px;
        margin-right: 20px;

    }

    span.date {
        font-size: 12px;
    }

    audio {
        margin-top: 20px;
    }
`

export const ButtonPost = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 47px;
    border: none;
    width: 47px;
    border-radius: 50%;
    margin-left: 32px;
    margin-top: 16px;
    background: #FE9FA9;
    color: #fff0f2;


    svg {
        margin-left: 4px;
        fill: #fff;
    }

    &:hover {
        background: ${shade(0.1, '#f6435d')};
    }
`


export const PostTitle = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    h3 {
        color: #3C1F32;
        padding-right: 8px;
        font-size: 20px;
    }

    span {
        color: #6E7D8B;
        font-size: 16px;
    }

    button {
        margin-left: auto;
        align-self: center;
    }
`
