import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import DetectView from './components/Detect';
import RoadsList from './components/Roads'
import HomeIcon from '@material-ui/icons/Home';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#000'
    }
  },
  typography: {
    fontFamily: [
      'Quicksand', 'sans-serif'
    ].join(','),
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100%'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    //minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'center',
  }
}));

export default function DenseAppBar(props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" color='secondary'>
          <Toolbar className={classes.toolbar} variant='dense'>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" href="/">
              <HomeIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Sign Detection
          </Typography>
          </Toolbar>
        </AppBar>
        <Router>
          <Switch>
            <Route exact path='/:id' component={DetectView} />
            <Route exact path='/' component={RoadsList} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}
