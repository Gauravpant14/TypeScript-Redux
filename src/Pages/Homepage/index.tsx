/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BtnContainer, Card, Container, OuterContainer, TitleCon } from './index.css'
import { getAllData } from '../../Redux/index'
import { State } from '../../Redux/Reducers';
import { Button } from '../../Auth/index.css';

interface Props {
    post: any
}


const HomePage: React.FC<Props> = () => {
    const dispatch = useDispatch()
    // const { } = bindActionCreators()
    const { posts }: any = useSelector((state: State) => state.posts)
    console.log(posts);
    useEffect(() => {
        dispatch(getAllData())
    }, [dispatch])

    return (
        <OuterContainer>
            <h2 style={{ "textAlign": "center" }}>User Information</h2>
            {
                posts.posts?.map((e: any, index: number) => {
                    return (
                        // eslint-disable-next-line react/jsx-no-comment-textnodes
                        <Card key={index}>
                            <img src={e.photo} style={{ width: "100%", height: '300px' }}></img>
                            <Container>
                                <TitleCon>
                                    <label>Title :</label>
                                    <p>{e.title}</p>
                                </TitleCon>
                                <TitleCon>
                                    <label>Body :</label>
                                    <p>{e.body}</p>
                                </TitleCon>
                                <TitleCon>
                                    <label> User Name :</label>
                                    <p>{e.postedBy.name}</p>
                                </TitleCon>
                            </Container>
                            <BtnContainer>
                                <Button>Delete</Button>
                            </BtnContainer>
                        </Card>)
                })

            }

        </OuterContainer>
    )
}

export default HomePage
