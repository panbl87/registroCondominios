import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    buttonContainer: {
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'space-between',
    },
  })
);
