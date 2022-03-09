import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';

const VideoItem = ({ video, onVideoSelected }) => {
  return (
    <Grid item xs={12}>
      <Paper 
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
        onClick={() => onVideoSelected(video)}
      >
        <img 
          style={{ marginRight: '15px' }}
          alt="thumbnail" 
          src={video.snippet.thumbnails.medium.url}
        />

        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default VideoItem