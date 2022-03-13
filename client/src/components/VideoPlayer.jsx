import React, { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';

import { SocketContext } from '../Context';

const useStyles = makeStyles((theme) => ({
/*   //in this makeStyles function we can use the theme object to style the components
  //we will first give the grid container a class of gridContainer
  //and then will define the layout of the paper
  //after that we will give the video a class of video
  //and then will give it a width let's say 550px */
  video: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
}));

const Layout = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  /* //we used useContext to get the values from the context
  //and then we'll change the layout of the page based on the values using
  //the classes defined in the makeStyles function
   */
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {/* grid is default contatiner in material-ui core
        //we will use the grid container to center the video
        //and then we will use the grid item to display the video
        //and then we will use the paper to give the video a border
        //and then we will use the typography to display the name of the user
      */}
      {/* //stream is the stream of the video that is being played by the user
      //and we will use the stream to display the video
       */}
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            {/* we defined the size of the grid here
              //we will use the grid item to display the video
            */}
            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
            {/* //we displayed the Name using the typograpgy component */}
            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
      {/*
      //callAccepted is the boolean value that is set by the server
      //if the call is accepted then we will display the video of the other user
      //and we will use the callAccepted to display the video
       */}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default Layout;
