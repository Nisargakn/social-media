/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogActions, Grid, Button, Tooltip, Popover, Zoom, DialogTitle, DialogContentText } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import MoodOutlinedIcon from '@mui/icons-material/MoodOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import EmojiPicker from "emoji-picker-react";
import Media from './Media'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axiosInstance from "../Helper/AxiosInstance";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Post = ({ onClose }) => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const [open, setOpen] = useState(true);
    const [open1, setOpen1] = useState(false);
    const [file, setFile] = useState(null);
    const [fileType, setFileType] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [scheduleDateTime, setScheduleDateTime] = useState(null);
    const [caption, setCaption] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorEl1, setAnchorEl1] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [confirmCloseOpen, setConfirmCloseOpen] = useState(false);
    const [shareButtonDisabled, setShareButtonDisabled] = useState(true);
    const [commentValue, setCommentValue] = useState('');
    const [changesMade, setChangesMade] = useState(false);
    const [selectedIcons, setSelectedIcons] = useState([]);
    const [mediaPlatform, setMediaPlatform] = useState([]);

    const handleSelectIconAndSendToParent = (selectedIcons, mediaPlatform) => {
        setSelectedIcons(selectedIcons);
        setMediaPlatform(mediaPlatform);
    };

    const closeDialog = () => {
        setOpen(false);
        setFile(null);
        setFileType('');
        setSelectedOption('');
        setScheduleDateTime(null);
        setCaption('');
        setCommentValue('');
        setMediaPlatform([]);
        onClose();
        // navigate("/")
    };

    const handleConfirmCloseOpen = () => {
        // navigate("/")
        if (changesMade) {
            console.log("ps:hit");
            onClose()
            setConfirmCloseOpen(true);
        } else {
            console.log("ps:hit");
            onClose()
            closeDialog();
        }
    };

    const handleChangesMade = () => {
        setChangesMade(true);
    };

    const handleSubmit = async () => {
        setOpen1(false);
        const loadingToast = toast.loading(`Posting to ${mediaPlatform}`);

        if (!mediaPlatform || (!mediaPlatform.includes('facebook') && !mediaPlatform.includes('instagram'))) {
            toast.error('Please select a social media platform.');
            toast.dismiss(loadingToast);
            return;
        }

        try {
            let facebookResponse, instagramResponse;
            if (mediaPlatform.includes('facebook')) {
                try {
                    const facebookEndpoint = '/quantum-share/post/file/facebook';
                    const formData = new FormData();
                    formData.append('mediaFile', file);
                    formData.append('caption', caption);
                    const params = {
                        mediaPlatform: mediaPlatform
                    };
                    facebookResponse = await axiosInstance.post(facebookEndpoint, formData, {
                        headers: {
                            'Accept': 'application/json',
                            Authorization: `Bearer ${token}`
                        },
                        params: params
                    });
                    console.log(facebookResponse.data);
                    if (Array.isArray(facebookResponse.data)) {
                        facebookResponse.data.forEach(response => {
                            if (response.status === "success" && response.platform === "facebook") {
                                toast.success(response.message)
                            }
                        })
                    }
                } catch (facebookError) {
                    console.error('Facebook request failed:', facebookError)
                    if (facebookError.response) {
                        const responseData = facebookError.response.data
                        if (Array.isArray(responseData)) {
                            responseData.forEach(error => {
                                if (error.code === 404 && error.platform === 'facebook') {
                                    toast.error(error.message)
                                    console.log('Error response from backend:', error.message)
                                }
                            })
                        } else if (responseData.code) {
                            if (responseData.code === 115) {
                                const errorMessage = responseData.message;
                                toast.error("token expired, please login again");
                                setTimeout(() => {
                                    navigate("/login")
                                }, 4000);
                            }
                        }
                    } else {
                        toast.error('An error occurred while processing your Facebook request.');
                    }
                }
            }

            if (mediaPlatform.includes('instagram')) {
                try {
                    const instagramEndpoint = '/quantum-share/post/file/instagram';
                    const formData = new FormData();
                    formData.append('mediaFile', file);
                    formData.append('caption', caption);
                    const params = {
                        mediaPlatform: mediaPlatform
                    };
                    instagramResponse = await axiosInstance.post(instagramEndpoint, formData, {
                        headers: {
                            'Accept': 'application/json',
                            Authorization: `Bearer ${token}`
                        },
                        params: params
                    });
                    if (instagramResponse.data.success && instagramResponse.data.success.message) {
                        toast.success(instagramResponse.data.success.message);
                    }
                } catch (instagramError) {
                    console.error('Instagram request failed:', instagramError);
                    if (instagramError.response && instagramError.response.data && instagramError.response.data.structure) {
                        const errorResponse = instagramError.response.data.structure.message;
                        toast.error(errorResponse)
                        console.log('Error response from backend:', errorResponse);
                    }
                    else {
                        toast.error('An error occurred while processing your Instagram request.');
                    }
                }
            }
            // Reset the state variables after a successful post
            setFile(null);
            setFileType('');
            setSelectedOption('');
            setScheduleDateTime(null);
            setCaption('');
            setCommentValue('');
            setMediaPlatform([]);
            toast.dismiss(loadingToast);
        } catch (error) {
            toast.dismiss(loadingToast);
            console.error('Request failed:', error);
        }
        toast.dismiss(loadingToast);
    };

    const handleChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setFileType(selectedFile?.type.startsWith('image') ? 'image' : 'video');
        setShareButtonDisabled(false)
        handleChangesMade();
        console.log('File selected:', e.target.files[0]);
    };

    const handle = (event) => {
        setSelectedOption(event.target.value);
        handleChangesMade();
    };

    const handleTextChange = (e) => {
        setCaption(e.target.value);
        handleChangesMade();
    };

    const addEmoji = (e) => {
        if (e.unified.startsWith('1F1E6')) {
            const codePoints = e.unified.split('-').map((code) => parseInt(code, 16));
            const flagEmoji = String.fromCodePoint(...codePoints);
            setCaption((prevText) => prevText + flagEmoji);
        } else {
            const sym = e.unified.split('_');
            const codeArray = sym.map((el) => parseInt(el, 16));
            const emoji = String.fromCodePoint(...codeArray);
            setCaption((prevText) => prevText + emoji);
        }
        handleChangesMade();
    };

    const handleEmojiIconClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosePopover = () => {
        setAnchorEl(null);
    };

    const handleHashtagIconClick = (event) => {
        setAnchorEl1(event.currentTarget);
    };

    const handleClosePopover1 = () => {
        setAnchorEl1(null);
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);

        const filtered = suggestions.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredSuggestions(filtered);
        handleChangesMade();
    };

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion.name);
        setFilteredSuggestions([]);
    }

    const handleTextAreaKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            setInputValue(inputValue + ' #')
        }
    }

    const handleSendClick = () => {
        if (inputValue.trim() !== '') {
            setCaption((prevValue) => prevValue + ' #' + inputValue.trim());
            setInputValue('');
        }
        setAnchorEl1(null);
    }

    const handleClickOpen = () => {
        setOpen1(true);
    };

    const handleClose = () => {
        setOpen1(false);
    };

    return (
        <>
            <Dialog className="postContent" open={open} onClose={closeDialog} fullWidth maxWidth="lg">
                <DialogContent>
                    <Grid container spacing={1}>
                        <Grid item lg={7} md={7} xs={12} sx={{ border: 1, borderStyle: 'ridge' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h4 id="newPost">New Post</h4>
                                <Media onMediaPlatform={handleSelectIconAndSendToParent} initialMediaPlatform={mediaPlatform} />
                            </div>
                            <div className="choose">
                                <textarea className="area" rows={12} placeholder="Type your text here..." value={caption} name="caption" onChange={handleTextChange}
                                    style={{ width: '98%', border: '1px solid #ccc', borderRadius: '5px', resize: 'none', outline: 'none' }} id="textHere" />
                                <div>
                                    <Stack direction="row" alignItems="center" spacing={1} sx={{ flexWrap: 'wrap' }}>
                                        <Tooltip TransitionComponent={Zoom} title="Attach Photo or Video" enterDelay={100} leaveDelay={100} placement="top-end">
                                            <IconButton component="label" htmlFor="fileInput">
                                                <AddPhotoAlternateOutlinedIcon />
                                                <input
                                                    id="fileInput"
                                                    type="file"
                                                    accept="image/*, video/*"
                                                    style={{ display: "none" }}
                                                    onChange={handleChange}
                                                    name="mediaFile" />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip TransitionComponent={Zoom} title="Add emojis" enterDelay={100} leaveDelay={100} placement="top-end">
                                            <IconButton>
                                                <MoodOutlinedIcon onClick={handleEmojiIconClick} />
                                                <Popover
                                                    open={Boolean(anchorEl)}
                                                    anchorEl={anchorEl}
                                                    onClose={handleClosePopover}
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'center',
                                                    }}

                                                    transformOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'center',
                                                    }}
                                                >
                                                    <EmojiPicker onEmojiClick={addEmoji} />
                                                </Popover>
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip TransitionComponent={Zoom} title="Add Location" enterDelay={100} leaveDelay={100} placement="top-end">
                                            <IconButton>
                                                <FmdGoodOutlinedIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip TransitionComponent={Zoom} title="Hashtag" enterDelay={100} leaveDelay={100} placement="top-end">
                                            <IconButton>
                                                <TagOutlinedIcon onClick={handleHashtagIconClick} />
                                                <Popover
                                                    open={Boolean(anchorEl1)}
                                                    anchorEl={anchorEl1}
                                                    onClose={handleClosePopover1}
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'center',
                                                    }}
                                                    transformOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'center',
                                                    }}
                                                    PaperProps={{
                                                        style: {
                                                            width: '300px',
                                                            height: '185px',
                                                            background: '#f5f5f5'
                                                        },
                                                    }}
                                                >
                                                    <div style={{ padding: '10px', width: '100px', display: 'flex', flexDirection: 'column' }}>
                                                        <textarea
                                                            type="text"
                                                            value={inputValue}
                                                            onChange={handleInputChange}
                                                            onKeyDown={handleTextAreaKeyPress}
                                                            placeholder="Enter text only"
                                                            style={{ width: '280px', resize: 'none', border: '0.5px solid grey', outline: 'none', borderRadius: '10px', paddingTop: '5px' }}
                                                        />
                                                        {filteredSuggestions.length > 0 && (
                                                            <div>
                                                                {filteredSuggestions.map((suggestion, index) => (
                                                                    <div key={index} onClick={() => handleSuggestionClick(suggestion)} style={{ cursor: 'pointer', padding: '5px 0', display: 'flex', justifyContent: 'space-between' }}>
                                                                        <div>{suggestion.name}</div>
                                                                        <div>{suggestion.view}</div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                        <Button onClick={handleSendClick} variant="contained" style={{ marginTop: 'auto', padding: '5px 10px', transform: 'translate(200px,80px)' }} >
                                                            Add
                                                        </Button>
                                                    </div>
                                                </Popover>
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip TransitionComponent={Zoom} title="Tag People" enterDelay={100} leaveDelay={100} placement="top-end">
                                            <IconButton>
                                                <SellOutlinedIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </Stack>
                                    <FormControl className="option" sx={{ mt: 3, width: 300, maxWidth: '100%' }}>
                                        <InputLabel id="demo-select-small-label">Select an Option</InputLabel>
                                        <Select
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            value={selectedOption}
                                            onChange={handle}
                                            label="Select an Option"
                                            sx={{ fontSize: '16px', mb: 1 }}
                                        >
                                            <MenuItem value={10}>Post Now</MenuItem>
                                            <MenuItem disabled value={20}>Schedule Specific Date and Time</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                {selectedOption === 20 && (
                                    <div className="datetime-picker" style={{ width: 300, maxWidth: '100%', marginBottom: '10px' }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DateTimePicker
                                                value={scheduleDateTime}
                                                onChange={(newValue) => setScheduleDateTime(newValue)}
                                                sx={{ mt: 1 }}
                                            />
                                        </LocalizationProvider>
                                    </div>
                                )}
                            </div>
                        </Grid>
                        <Grid item lg={5} md={5} xs={12} sx={{ border: 1, borderStyle: 'ridge', display: 'flex', flexDirection: 'column', background: '#f5f5f5' }}>
                            <div className="preview" style={{ padding: '8px' }}>
                                <h4 id="newPost">Media Preview</h4>
                            </div>
                            <div style={{ background: '#fff', width: '95%', maxWidth: '100%', height: '100%', borderRadius: '10px' }}>
                                <div className="main-preview" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px', background: '#fff' }}>
                                    <div className="file-preview-container" style={{ height: 'auto', width: '350px', padding: '1px', maxWidth: '100%', textAlign: 'center' }}>
                                        {fileType === 'image' && file && (
                                            <img src={URL.createObjectURL(file)} alt="File Preview" className="file-preview" style={{ maxHeight: '100%', maxWidth: '100%' }} />
                                        )}
                                        {fileType === 'video' && file && (
                                            <video controls className="file-preview" style={{ maxHeight: '100%', maxWidth: '100%' }}>
                                                <source src={URL.createObjectURL(file)} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        )}
                                        {fileType !== 'image' && fileType !== 'video' && (
                                            <p id="imgPreview" style={{ marginTop: '100px', color: '#808080', }}>Image Preview</p>
                                        )}
                                    </div>
                                </div>
                                <div className="text-preview" style={{ wordBreak: 'break-all', padding: '10px' }}>{caption.split('\n').map((line, index) => (
                                    <div key={index}>{line}</div>
                                ))}</div>
                            </div>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions className="action">
                    <div>
                        <Button onClick={handleConfirmCloseOpen} color="error">
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            disabled={shareButtonDisabled}
                            endIcon={<SendIcon />}
                            onClick={handleClickOpen}
                            sx={{ borderRadius: '20px' }}
                        >
                            Share
                        </Button>
                        <Dialog
                            open={open1}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                            fullWidth
                        >
                            {/* <DialogTitle id="alert-dialog-title">{"Are you sure you want to Post ?"}</DialogTitle> */}
                            <DialogContent>
                                <DialogContentText sx={{ color: 'black', fontSize: '18px' }}>
                                    Are you sure you want to Post?
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={handleSubmit} color="primary" autoFocus>
                                    Yes
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </DialogActions>
            </Dialog>
            <ToastContainer />
        </>
    );
};

export default Post;  