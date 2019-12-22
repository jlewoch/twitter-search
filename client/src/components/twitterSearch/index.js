import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchBar from '../searchBar';
import TweetCard from './TweetCard';
import { post } from '../../helpers/api';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    padding: '1em'
  }
}));

const TwitterSearch = () => {
  const classes = useStyles();

  // states
  const [tweets, setTweets] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState(null);

  // handler for changes in search input
  const inputChangeHandler = e => setSearchValue(e.target.value);

  // handler for search
  const searchHandler = async () => {
    try {
      // remove error state
      setError(null);
      // create local variable of search value
      let value = searchValue;

      // confrim there is a value to seach do not continue if blank
      if (!value.length) throw Error('No search value provided');

      // initiate search
      const { statuses, error } = await post('tweets', { search: value });

      // if an error is returned do not continue
      if (error) throw Error('error');

      //   set tweets array to the results provided from backend
      setTweets(statuses);
    } catch (error) {
      // set error if there is any exceptions
      setError(error.message);
    }
  };
  return (
    <Grid
      container
      justify="center"
      alignItems="flex-start"
      spacing={5}
      className={classes.root}
    >
      <SearchBar
        placeholder="Search eg @smashreality"
        onChange={inputChangeHandler}
        searchValue={searchValue}
        error={error}
        search={searchHandler}
      />
      {/* list of tweets */}
      <Grid
        wrap="nowrap"
        container
        direction="column"
        alignItems="center"
        spacing={2}
      >
        {tweets.map(TweetCard)}
      </Grid>
    </Grid>
  );
};
export default TwitterSearch;
