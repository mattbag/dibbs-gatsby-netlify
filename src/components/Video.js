/* global tw */
import { css } from "emotion";
import React, { Component } from "react";
import PropTypes from "prop-types";
import Img from 'gatsby-image'

const video = {
  wrap: css(tw`bg-pink-lighter my-8 border-white relative`),
  overlay: css(tw`absolute pin w-full h-full`),
  poster: css`
  .gatsby-image-wrapper{
    height:100%;
  }
  `,
  play: css(
    tw`absolute pin m-auto bg-center bg-no-repeat bg-cover cursor-pointer z-10`
  ),
  icon: css`${tw`absolute pin m-auto`}`,
  svg:
    '<svg aria-hidden="true" data-prefix="fal" data-icon="play-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-play-circle fa-w-16 fa-3x"><path fill="currentColor" d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zM40 256c0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216zm331.7-18l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM192 335.8V176.9c0-4.7 5.1-7.6 9.1-5.1l134.5 81.7c3.9 2.4 3.8 8.1-.1 10.3L201 341c-4 2.3-9-.6-9-5.2z"></path></svg>'
};

class Video extends Component {
  state = {
    play: false
  }

  // componentDidMount() {
  //   // this.setState({url: this.props.url})
  //   // this.setState({url: 'https://www.youtube.com/embed/t5xhya-grlU'})
  // }
  render() {
    // const bg = this.props.poster ? { backgroundImage: `url(${this.props.poster})` } : {}
    const bg = {};
    return (
      <div
        className={video.wrap}
        style={{ paddingBottom: "48%", border: "2px solid" }}
      >
        {!this.state.play ? (
          <div
            onClick={() => this.setState({ play: true })}
            className={video.play}
            style={bg}
          >
            <div className={`${video.overlay} ${video.poster}`}>
              <Img fluid={this.props.poster} />
            </div>
            <div
              className={video.icon}
              style={{ height: "10%" }}
              dangerouslySetInnerHTML={{ __html: video.svg }}
            />
          </div>
        ) : (
            <iframe
              title={"Dive Bell Video from " + this.props.videoSource}
              className={video.overlay}
              src={this.props.videoSource + "?autoplay=1"}
              frameBorder="0"
              allow="autoplay encrypted-media"
              allowFullScreen
            />
          )}

      </div>
    );
  }
}

Video.propTypes = {
  videoSource: PropTypes.string,
  poster: PropTypes.object
};

export default Video;
