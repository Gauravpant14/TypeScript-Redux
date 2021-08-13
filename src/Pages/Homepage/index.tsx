/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BtnContainer, Card, Container, OuterContainer, TitleCon } from './index.css'
import { getAllData } from '../../Redux/index'
import { State } from '../../Redux/Reducers';
import { Button } from '../../Auth/index.css';
import MUIModal from '../../Comman/Modal';

interface Props {
    post: any
}


const HomePage: React.FC<Props> = () => {
    const [open, setOpen] = React.useState(false);
    const [uId, setId] = React.useState('');
    const dispatch = useDispatch()
    // const { } = bindActionCreators()
    const { posts }: any = useSelector((state: State) => state.posts)
    console.log(posts);
    useEffect(() => {
        dispatch(getAllData())
    }, [dispatch])

    const handleOpen = (id:any) => {
        console.log(id,"post id")
        setOpen(true);
        setId(id);
    }

    const handleClose = () => {
        setOpen(false);
    };

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
                                <Button onClick={() => handleOpen(e._id)}>Delete</Button>
                            </BtnContainer>
                        </Card>)
                })

            }
            {
                open && (
                    <MUIModal open={open} handleClose={handleClose} uId={uId}/>
                )
            }

        </OuterContainer>
    )
}

export default HomePage
