import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import youtube from "../../utils/youtube";
import VideoList from "../VideoList/VideoList";
import VideoDetail from "../VideoDetails/VideDetail";

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount() {
        this.onSubmitHandler('kids');
    }

    onSubmitHandler = async term => {
        const res = await youtube.get('/search', {
              params: {
                  q: term
              }
            });

        this.setState({
            videos: res.data.items,
            selectedVideo: res.data.items[0]
        });
    };

    handleVideoSelect = (video) => {
      this.setState({selectedVideo: video});
    };

    render() {
        return (
                <div className={'ui container'}>
                    <h2 className={'ui header'} style={{paddingTop: '16px'}}>Youtube Search</h2>
                    <SearchBar onSubmit={this.onSubmitHandler} />
                    <div className={'ui grid'}>
                        <div className={'ui row'}>
                             <div className={'eleven wide column'}>
                                {this.state.selectedVideo && <VideoDetail video={this.state.selectedVideo} />}
                             </div>
                            <div className={'five wide column'}>
                                <VideoList videos={this.state.videos} onVideoSelect={this.handleVideoSelect} />
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default App;
