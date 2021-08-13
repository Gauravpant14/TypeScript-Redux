import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../Redux';

interface Props {
    open: boolean,
    handleClose: () => void
    uId: any,
}

function getModalStyle() {
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const MUIModal: React.FC<Props> = ({ open, handleClose, uId}) => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const dispatch = useDispatch()
    const deleteMyPost = () => {
        dispatch(deletePost(uId))
    } 

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Are You Sure , you want to Delete this ?</h2>
            <div className="btn-container">
                <button onClick={() => deleteMyPost()}>Delete</button>
                <button >Cancel</button>
            </div>
        </div>
    );


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    )
}

export default MUIModal
