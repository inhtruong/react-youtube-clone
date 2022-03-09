import React, { Component } from 'react'
import Grid from '@mui/material/Grid';

import youtube from './api/youtube'
import { SearchBar, VideoDetail, VideoList } from './components/index'


class App extends Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    handleSelectedVideo = (video) => {
        this.setState({ selectedVideo: video })
    }

    handleSubmit = async (searchTerm) => {
        const resp = await youtube.get('search', { 
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyCITbAJACylhJ7c8uihY9JDGP7bcR0N8u4',
                q: searchTerm
            }
        });

        console.log(resp.data.items);
        this.setState({ 
            videos: resp.data.items,
            selectedVideo: resp.data.items[0]
        });
    }

    render() {
        const { videos, selectedVideo } = this.state;

        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo}/>
                        </Grid>

                        <Grid item xs={4}>
                            <VideoList onVideoSelected={this.handleSelectedVideo} videos={videos}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;