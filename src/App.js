import React, { Component } from 'react';
import {
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  TextField
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import LinkedinIcon from '@material-ui/icons/Link';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      left: false,
      emailAddress: '',
      subject: ''
    }
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      // https://material-ui.com/demos/drawers/
      // fix for moblie
      <React.Fragment>        
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            <div className="list">
              <List className="fullList">
              <ListItem button key="Home">
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItem>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                  ))}
            </List>
            </div>
          </div>
        </Drawer>
        <div className="root">
        {/* Voor header */}
        <AppBar className="header">
          <Toolbar>
            <IconButton className="menuButton" aria-label="Open drawer">
              <MenuIcon onClick={this.toggleDrawer('left', true)}/>
            </IconButton>
            <Typography className="title" noWrap>
              Frank Adema
            </Typography>
            <div className="icons">
              <MailIcon />
              <LinkedinIcon />
            </div>
          </Toolbar>
        </AppBar>
        {/* slot header */}
        {/* voor content herhaalbaar */}
        <div className="content">
          <Grid container spacing={24}>
            <Grid item className="grid" xs={7}>
              <Typography className="paperTitle">Who am I...</Typography>
              <Typography className="paperConent">
                  Hallo, mijn naam is Frank Adema. Op dit moment heb ik mijn opleiding "Informatica (Software Eingineering)" aan Stenden Hogeschool afgerond.
              </Typography>
              <Typography className="paperContent">
                Verder ben ik momenteel werkzaam als Junior Developer bij The Learning Network (voorheen Van Dijk Educatie)
              </Typography>
                <Button variant="contained" className="button" fullWidth>Go To Page</Button>
            </Grid>
            <Grid item className="grid" xs={5}>
              <div className="center">
                <img alt="Frank Adema" src="https://pbs.twimg.com/profile_images/1540990013/1167628415_5_ItRW_1_400x400.jpeg"/>
              </div>
            </Grid>
            <Grid item className="grid" xs={5}>
              <div className="center">
                <img  height="25%" width="45%" alt="Frank Adema" src="https://pbs.twimg.com/media/DVl5fOwX4AErw4f.jpg"/>
              </div>
            </Grid>
            <Grid item className="grid" xs={7}>
              <Typography className="paperTitle">Experience</Typography>
              <Typography className="paperConent">
                  Wat heb ik opgedaan tijdens mijn studie en in mijn vrije tijd etc.
              </Typography>
              <Typography className="paperContent">
                Verder ben ik momenteel werkzaam als Junior Developer bij The Learning Network (voorheen Van Dijk Educatie)
              </Typography>
              <Button variant="contained" className="button" fullWidth>Go To Page</Button>
            </Grid>
            <Grid item className="grid" xs={12}>
              <Typography className="paperTitle">Contact</Typography>
              <form className="formContainer" noValidate autoComplete="off">
                <TextField
                  id="outlined-name"
                  label="Email"
                  className="formTextField"
                  value={this.state.emailAddress}
                  onChange={this.handleChange('emailAddress')}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                /><br />
                <TextField
                  id="outlined-multiline-static"
                  // label="Subject"
                  multiline
                  placeholder="Mail subject"
                  rows="4"
                  value={this.state.subject}
                  onChange={this.handleChange('subject')}
                  className="formTextField"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
                <Button variant="contained" className="buttonForm" fullWidth>Send mail</Button>
              </form>
            </Grid>
          </Grid>
        </div>
        {/*slot contetn */}
        {/* eventueel plek voor footer */}
        {/* slot footer */}
      </div>
    </React.Fragment>
    );
  }
}

export default App;
