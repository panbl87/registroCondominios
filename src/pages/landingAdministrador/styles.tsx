import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    Paper: {
      padding: '1.75rem',
      justifyContent: 'center',
      alignItems: 'center',
      '&:hover': {
        transform: 'scale(1.1)',
        transition: '0.35s ease-out',
      },
    },
    Container: {
      paddingTop: '1.75rem',
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);
