import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/SearchSharp';
import style from './styles';

const SearchBar = ({ search, placeholder, searchValue, error, onChange }) => {
  // set styles
  const classes = style(error);
  useEffect(() => {
    const enterPressed = e => {
      // check if enter was pressed
      if (e.key !== 'Enter') return;
      // run search function
      search();
    };
    // add event listener for key press
    document.addEventListener('keypress', enterPressed);
    return () => {
      // cleanup for event listener
      document.removeEventListener('keypress', enterPressed);
    };
  });
  return (
    <Grid item lg={6} md={7} xs={11}>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          value={searchValue}
          onChange={onChange}
          placeholder={placeholder}
        />
        <IconButton onClick={search}>
          <Search />
        </IconButton>
      </Paper>
      <Typography className={classes.errorTxt} component="h6">
        {error}
      </Typography>
    </Grid>
  );
};

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  searchValue: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func
};

export default SearchBar;
