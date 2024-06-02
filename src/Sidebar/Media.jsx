/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button, Tooltip, Popover, Zoom } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import { CiCirclePlus } from "react-icons/ci";
import { ReactSVG } from 'react-svg';
import facebook1 from '../Assets/facebook.svg'
import instagram1 from '../Assets/instagram.svg'
import { useState, useEffect } from 'react';

const Media = ({ onMediaPlatform}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [showPopover, setShowPopover] = useState(false);
    const [submittedIcons, setSubmittedIcons] = useState([]);
    const [mediaPlatform, setMediaPlatform] = useState([]);

    let [facebook, instagram] = mediaPlatform;
    console.log(mediaPlatform);

    const handleSelectIconAndSendToParent = (icon) => {
        const index = mediaPlatform.indexOf(icon);
        let updatedIcons = [...mediaPlatform];
        if (index === -1) {
            updatedIcons.push(icon);
        } else {
            updatedIcons.splice(index, 1);
        }
        setMediaPlatform(updatedIcons);
        console.log(updatedIcons);
        onMediaPlatform(updatedIcons, extractIconNames(updatedIcons));
    };

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setShowPopover(true);
    };

    const extractIconNames = (iconPaths) => {
        return iconPaths.map(path => {
            if (typeof path !== 'string') {
                console.error('Invalid path:', path);
                return ''; 
            }
            const fileName = path.split('/').pop(); 
            const iconName = fileName.split('.')[0]; 
            return iconName.replace('icons8-', ''); 
        }).join(",");
    };

    const iconNames = extractIconNames(mediaPlatform);
    console.log(iconNames);

    const handlePopoverClose = () => {
        if (showPopover) {
            setShowPopover(false);
            setMediaPlatform(submittedIcons);
        }
    };

    const handleSubmit = () => {
        setSubmittedIcons(mediaPlatform);
        setShowPopover(false);
        console.log(mediaPlatform);
        onMediaPlatform(mediaPlatform, extractIconNames(mediaPlatform));
    };

    const handelCancel = () => {
        if (showPopover) {
            setShowPopover(false);
            setMediaPlatform(submittedIcons);
            onMediaPlatform(submittedIcons, extractIconNames(submittedIcons));
        }
    }   

    return (
        <div>
            <Tooltip TransitionComponent={Zoom} enterDelay={100} leaveDelay={100}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {submittedIcons.length === 0 && (
                        <div style={{ display: 'flex', alignItems: 'center', minWidth: '120px' }}>
                            <span style={{ fontSize: '14px', color: 'black' }}>Select Social Media</span>
                        </div>
                    )}
                    <IconButton>
                        <CiCirclePlus style={{ fontSize: '35px' }} onClick={handlePopoverOpen} />
                    </IconButton>
                    {submittedIcons.map((icon, index) => (
                        <div key={index} className="selected-icon" style={{ marginLeft: '10px', margin: '4px' }}>
                            <img src={icon} alt={`Selected Icon ${index}`} style={{ width: '35px', maxWidth: '100%', maxHeight: '100%' }} />
                        </div>
                    ))}
                </div>
                <Popover
                    open={showPopover}
                    anchorEl={anchorEl}
                    onClose={handlePopoverClose}
                    PaperProps={{
                        style: {
                            borderRadius: '10px',
                            padding: '10px',
                            width: '330px',
                            overflow: 'auto',
                            height: '230px',
                        },
                    }}
                >
                    <Typography sx={{ p: 2, maxWidth: '350px' }}>
                        <Tooltip style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                <IconButton style={{ display: 'flex', flexDirection: 'column', paddingRight: '20px', marginBottom: '10px', backgroundColor: mediaPlatform.includes(facebook1) ? '#f0f1f3' : 'transparent', borderRadius: '0' }}>
                                    <ReactSVG src={facebook1} onClick={() => handleSelectIconAndSendToParent(facebook1)} name="mediaPlatform" values={facebook}></ReactSVG>
                                    <span style={{ fontSize: '14px', color: 'black' }}>FaceBook</span>
                                </IconButton>
                                <IconButton style={{ display: 'flex', flexDirection: 'column', paddingRight: '20px', marginBottom: '10px', backgroundColor: mediaPlatform.includes(instagram1) ? '#f0f1f3' : 'transparent', borderRadius: '0' }}>
                                    <ReactSVG src={instagram1} onClick={() => handleSelectIconAndSendToParent(instagram1)} name="mediaPlatform" values={instagram}></ReactSVG>
                                    <span style={{ fontSize: '14px', color: 'black' }}>Instagram</span>
                                </IconButton>
                            </div>
                        </Tooltip>
                    </Typography>
                    <Button variant="outlined" color="error" style={{ marginTop: 'auto', padding: '5px 10px', transform: 'translate(10px,0px)' }} onClick={handelCancel} >
                        Cancel
                    </Button>
                    <Button variant="contained" style={{ marginTop: 'auto', padding: '5px 10px', transform: 'translate(140px,0px)' }} onClick={handleSubmit}  >
                        Submit
                    </Button>
                </Popover>
            </Tooltip>
        </div>
    )
}

export default Media