import { makeStyles } from '@material-ui/core/styles';

export default error =>
  makeStyles(theme => ({
    root: {
      display: 'flex',
      padding: '2px 0px 2px 10px',
      alignItems: 'center',
      justifyContent: 'space-between',
      border: error ? `solid ${theme.palette.error.main} 1px` : 'none'
    },
    input: { width: '100%' },
    errorTxt: {
      color: theme.palette.error.main
    }
  }))();
