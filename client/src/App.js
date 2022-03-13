import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {/* //Material ui is a library that provides a set of components that can be used to build user interfaces.
        //The AppBar component is used to create a fixed-positioned header for the application.
        //The Typography component is used to display text.
        //Typography consists of a set of text styles that can be applied to the text.
        //The VideoPlayer component is used to display the video.
       */}
      <AppBar className={classes.appBar} position="static" color="inherit">
        {/* In this we created AppBar which is a toolbar
            //The position attribute specifies where the toolbar should be positioned.
            //The color attribute specifies the color of the toolbar.
        */}
        <Typography variant="h2" align="center">Video Chat</Typography>
        {/* //The Typography component is used to display text.
        //The variant attribute specifies the type of text.
        //The align attribute specifies the alignment of the text.
         */}
      </AppBar>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
  );
};

export default App;
