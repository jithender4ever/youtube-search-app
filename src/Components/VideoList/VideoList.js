import React from 'react';
import VideoItem from "../VideoItem/VideoItem";

const VideoList = ({videos, onVideoSelect}) => (
    <div className={'ui relaxed divided list'}>
        {videos.map(video => <VideoItem video={video} key={video.id.videoId} onVideoSelect={onVideoSelect} />)}
    </div>
);

export default VideoList;
