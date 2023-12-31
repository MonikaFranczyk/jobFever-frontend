import * as React from "react";
import {useState} from "react";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import {RedButtonStyled} from "../atoms/RedButton.styles";
import {Link} from "@mui/joy";
import Input from "@mui/joy/Input";
import {MailOutline} from "@material-ui/icons";
import {StyledEmailInputValidation} from "../organisms/CandidateRegisterRightContainer.styles";
import {sendEmailForPasswordChange} from "../../api/AuthApi";

export default function ChangePasswordModal() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState({
    });
    const onInputChange = e => {
        const {name, value} = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
    }
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleSave = async () => {
        await sendEmailForPasswordChange(input.email)
        setOpen(false);
    };

    return (
        <div>
<<<<<<< HEAD
            <Link sx={{left: '39%', color: 'rgb(255,79,79)'}} onClick={handleClickOpen}>Don't remember password?</Link>
=======
            <Link sx={{left: '39%'}} onClick={handleClickOpen}>You dont remember password?</Link>
>>>>>>> 4f23126
            <Dialog
                fullWidth
                maxWidth="sm"
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle sx={{textAlign: "center", fontWeight: 'bold'}} id="responsive-dialog-title">
                    Insert email
                </DialogTitle>
                            <StyledEmailInputValidation>
                                <Input
                                    type="text"
                                    name="email"
                                    placeholder='ex. jobFever@email.com'
                                    onChange={onInputChange}
                                />
                                <IconButton sx={{color: 'white'}}>
                                    <MailOutline/>
                                </IconButton>
                            </StyledEmailInputValidation>
                <DialogActions>
                    <RedButtonStyled onClick={handleClose}>
                        Discard
                    </RedButtonStyled>
                    <RedButtonStyled onClick={handleSave}>
                        Try
                    </RedButtonStyled>
                </DialogActions>
            </Dialog>
        </div>
    );

}