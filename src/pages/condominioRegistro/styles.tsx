import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: '1.75rem',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    backButton: {
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(4),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    Paper: {
      padding: '1.75rem',
      width: '45%',
    },
    Container: {
      //paddingTop: '1.75rem',
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    Boton: {
      marginTop: theme.spacing(4),
    },
    Select: {
      width: '100%',
    },
    selectGridContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    selectGridItem: {
      flexGrow: 1,
    },
    input: {
      display: 'none',
    },
    listaServicios: {
      listStyle: 'none',
      height: '50%',
      overflow: 'auto',
    },
    servicio: {
      height: '60px',
      padding: '0 20px',
      alignItems: 'center',
      color: '#4B4B4B',
      fontSize: '18px',
      display: 'flex',
      //gridTemplateColumns: 'auto 1fr auto',
      '&:hover': {
        opacity: '0.5',
      },
    },
    servicioTexto: {
      textAlign: 'left',
      width: '100%',
      paddingLeft: '5px',
    },
    servicioContenedorBotones: {
      display: 'flex',
    },
  })
);
