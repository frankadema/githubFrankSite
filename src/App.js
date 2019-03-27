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
  TextField,
  Avatar,
  ListItemAvatar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import FolderIcon from '@material-ui/icons/Folder';
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
            <Grid item className="grid" lg={7}>
              <Typography className="paperTitle">Even voorstellen...</Typography>
              <Typography className="paperConent">
                Hallo, mijn naam is Frank Adema. In mijn dagelijks leven houdt ik mij bezig met software ontwikkelingen op het gebied van applicaties. Op dit moment ben ik werkzaam bij The Learning Network in Emmen en Kampen. Binnen deze organisatie leer ik de fijne kneepjes van senior developers op het gebied van React, React Hooks, Redux en meer nieuwe technieken. Binnen deze oraganisatie ben ik samen met veel collega's verantwoordelijk voor het creëren van vette applicaties...
              </Typography>
              {/* <Typography className="paperConent">
                Op dit moment ben ik werkzaam als developer bij The Learning Network gevestigd in Nederland (Amsterdam, Kampen en Emmen) en Beglie. Binnen deze organisatie leer ik de fijne kneepjes van senior developers op het gebied van React, React Hooks, Redux en meer nieuwe technieken. Binnen deze oraganisatie ben ik samen met veel collega's verantwoordelijk voor het creeeren van vette applicaties.
              </Typography> */}
              <Button className="button">Lees meer</Button>
            </Grid>
            <Grid item className="grid" lg={5}>
              <Avatar alt="Frank Adema" src="https://media.licdn.com/dms/image/C5603AQES4-38Bu1McQ/profile-displayphoto-shrink_200_200/0?e=1559174400&v=beta&t=b8hSvlv0CWvXBcWlPK1WdFZIpifHHaZfeMdu0zACwH0" className="avatar"/>
            </Grid>
            <Grid item className="grid2" lg={5}>
              <img src="https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/03/14163859/Wrench-Transparent-PNG-1024x995.png" alt="d" title="a" className="experienceHomepage"/>
            </Grid>
            <Grid item className="grid2" lg={7}>
              <Typography className="paperTitle">Ervaring</Typography>
              <Typography className="paperConent">
                Ik heb ervaring opgedaan op diverse manieren (opleidingen, cursussen, workshops, werkervaring en hobbymatig).
              </Typography>
              <div className="listView">
                <List dense="true" className="listHomepage">
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Vormgeving"
                        secondary="..., ..., ..., etc, etc"
                      />                     
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Design"
                        secondary="..., ..., ..., etc, etc"
                      />                     
                    </ListItem>
                    <ListItem >
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Overig"
                        secondary="Jest, Material Ui, Bootstrap, etc, etc"
                      />                     
                    </ListItem>
                </List>
              </div>
              <Button variant="contained" className="button">Meer zien?</Button>
            </Grid>
            {/* <Grid item className="grid" lg={12}>
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
            </Grid> */}
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
