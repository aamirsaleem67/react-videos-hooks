import React from "react";

class VideoDetail extends React.Component {
  render() {
    const { video } = this.props;

    if (!video) {
      return <div>Loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
      <div style={{ marginTop: "10px" }}>
        <div className="ui embed">
          <iframe src={videoSrc}></iframe>
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
    // return (
    //   <iframe
    //     title="youtube video"
    //     width="500"
    //     height="315"
    //     src={`https://www.youtube.com/embed/${video.id.videoId}`}
    //     frameBorder="0"
    //   ></iframe>
    // );
  }
}

export default VideoDetail;
