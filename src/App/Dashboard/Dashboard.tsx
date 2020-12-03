import * as React from "react";
// import clsx from 'clsx';
import { Switch, Route, withRouter, NavLink } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";
import List from "@material-ui/core/List";
import Container from "@material-ui/core/Container";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import "./dashboard.scss";
import { routes } from "../../utils/Json";
import { Close } from "@material-ui/icons";
import ComingSoon from "./ComingSoon";

const drawerWidth = 211;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    justifyContent: "flex-end",
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    position: "absolute",
    width: "100%",
    top: 20,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 0,
    backgroundColor: "#023750",
    borderRadius: 10,
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    "&:hover": {
      backgroundColor: "#023750",
    },
  },
  menuButtonHidden: {
    // display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    backgroundColor: "#023750",
    justifyContent: "space-between",
    height: "98%",
    borderBottomRightRadius: 40,
    border: "none",
    position: "relative",
    whiteSpace: "nowrap",
    overflowX: "initial",
    overflowY: "initial",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(0),
    display: "none",
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(11),
      display: "flex",
    },
  },
  drawerPaperOpen: {
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100%",
      borderBottomRightRadius: 0,
      display: "block",
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(4),
    backgroundColor: "#ffffff",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  nav: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const DashboardListItem = withStyles((theme) => ({
  root: {
    flexDirection: "column",
    alignItems: "center",
    height: 70,
    padding: 20,
    paddingTop: 5,
    [theme.breakpoints.up("sm")]: {
      paddingTop: 20,
    },
  },
}))((props) => <ListItem id="nav-side-item" button {...props} />);

const DashboardListItemIcon = withStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
})((props) => <ListItemIcon id="nav-side_icon" {...props} />);

const mainListItems = (
  <div className="pb-5">
    <div style={{ paddingTop: 70 }} />
    {routes.map(({ path, Icon, name }, index) => (
      <NavLink exact to={path} key={index}>
        <div className="a">
          <div />
        </div>
        <DashboardListItem>
          <DashboardListItemIcon>
            <Icon title={name} />
          </DashboardListItemIcon>
          <ListItemText
            id="nav-side_text"
            style={{ color: "#ffffff" }}
            primary={name}
          />
        </DashboardListItem>
        <div className="b">
          <div />
        </div>
      </NavLink>
    ))}
    <div style={{ paddingTop: 50 }} />
  </div>
);

const Dashboard: React.FC<{
  location: any;
}> = ({ location }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            {open ? <Close /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(
            classes.drawerPaper,
            open && classes.drawerPaperOpen,
            open && "no-curve"
          ),
        }}
        open={open}
      >
        <List id="nav-side">{mainListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            <Route path="*" component={ComingSoon} />
          </Switch>
        </Container>
      </main>
    </div>
  );
};

export default withRouter(Dashboard);
