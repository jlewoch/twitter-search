import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import { getShortMonthDay } from '../../helpers/time';

const TweetCard = ({ created_at, text, user, extended_entities }, idx) => {
  // destructure user info required for the card
  const { name, profile_image_url_https, screen_name } = user;
  // function to select what media component to use if there is media
  const selectMedia = entities => {
    // if no media return null
    if (!entities) return;
    // set url to media object
    let url = entities['media'][0];
    // check if the media is a video
    if (url.video_info) {
      // return video component
      return (
        <CardMedia
          autoPlay
          component="video"
          image={url.video_info.variants[0].url}
        />
      );
    } else {
      // default return as image
      return (
        <CardMedia
          image={url.media_url}
          style={{ height: 0, paddingTop: '56%' }}
        />
      );
    }
  };

  return (
    <Grid key={idx} item lg={5} md={7} xs={11} style={{ width: 'inherit' }}>
      <Card>
        <CardHeader
          avatar={<Avatar src={profile_image_url_https} />}
          title={`${name} @${screen_name} - ${getShortMonthDay(created_at)}`}
          subheader={text}
        />
        {selectMedia(extended_entities)}
      </Card>
    </Grid>
  );
};

TweetCard.propTypes = {
  idx: PropTypes.number,
  created_at: PropTypes.string,
  text: PropTypes.string,
  user: PropTypes.object,
  extended_entities: PropTypes.object
};

export default TweetCard;
