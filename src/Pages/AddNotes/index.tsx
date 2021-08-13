import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postUserData } from '../../Redux/Action-creators/postDataAction';
import { BtnContainer, Button, Card, Container, Input, OuterContainer, TitleCon } from './index.css'

const AddNotes: React.FC = () => {
    const [postBody, setPostBody] = useState({
        title: "",
        body: "",
    });
    const [image, setImage] = useState<any>({});
    const [url, setUrl] = useState("");
    const dispatch = useDispatch();

    const getItems = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostBody({
            ...postBody,
            [e.target.name]: e.target.value,
        });
    };
    const getImage = (e: any) => {
        setImage(e.target.files[0]);
    };
    const postDetails = async () => {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "insta-clone");
        data.append("cloud_name", "itsgaurav14");

        try {
            const response = await fetch(
                "https://api.cloudinary.com/v1_1/itsgaurav14/image/upload",
                {
                    method: "post",
                    body: data,
                }
            );
            const result = await response.json()
            console.log(result, "now check it");

            if (response.status === 200) {
                setUrl(result.secure_url);
                dispatch(
                    postUserData({
                    title: postBody.title,
                    body: postBody.body,
                    photo: result.secure_url,
                  })
                );
                console.log(result.secure_url)
            }
        } catch (error) {
            console.log(error);
            alert(error);
        }
    };
    return (
        <OuterContainer>
            <Card>
                <Container>
                       <h2 style={{textAlign: "center"}}>Add Items</h2>
                    <TitleCon>
                        <Input type="text" name="title" value={postBody.title} placeholder="title" onChange={(e) => getItems(e)} />
                    </TitleCon>
                    <TitleCon>
                        <Input type="text" name="body" value={postBody.body} placeholder="body" onChange={(e) => getItems(e)} />
                    </TitleCon>
                    <TitleCon>
                        <Input type="file" placeholder="upload image" onChange={(e) => getImage(e)} />
                    </TitleCon>
                </Container>
                <BtnContainer>
                    <Button onClick={() => postDetails()}>Add</Button>
                </BtnContainer>
            </Card>
        </OuterContainer>
    )
}

export default AddNotes
