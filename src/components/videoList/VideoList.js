import React from 'react'
import Grid from '@mui/material/Grid';

import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelected }) => {
    const listOfVideos = videos.map((video, index) => <VideoItem key={index} video={video} onVideoSelected={onVideoSelected}/>)

    return (
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    );
}

export default VideoList