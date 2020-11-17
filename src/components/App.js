import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  render() {
    return (
      <div style={{ marginTop: "10px" }} className="ui container">
        <SearchBar onSubmit={(term) => this.onSubmit(term)} />
        <div className="ui grid stackable">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.onSubmit("react js");
  }

  async onSubmit(term) {
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0],
    });
  }

  onVideoSelect = (video) => {
    console.log("video", video);
    this.setState({ selectedVideo: video });
  };
}

export default App;
