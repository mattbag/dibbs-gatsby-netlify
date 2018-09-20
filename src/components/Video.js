/* global tw */
import { css } from "emotion";
import React , {Component} from 'react'
import PropTypes from 'prop-types'

const wrap = css(
  tw`bg-pink-lighter my-8 border-white relative`
);
const iframe = css(
  tw`absolute pin w-full h-full`
);

class Video extends Component {
  constructor(){
    super()
    this.state = {
      url : ''
    }
  }
  componentDidMount(){
    // this.setState({url: this.props.url})
    this.setState({url: 'https://www.youtube.com/embed/t5xhya-grlU'})
  }
  render() {
    return (
      <div className={wrap} style={{ paddingBottom: '48%', border: '2px solid' }}>
        {/* <iframe className={iframe} src={this.state.url} frameBorder="0"></iframe> */}
        <iframe className={iframe} src={this.state.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
    );
  }
}

Video.propTypes = {
  videoSource: PropTypes.string
}

export default Video
