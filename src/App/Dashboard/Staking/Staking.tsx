import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import "./stacking.scss";
import { staking, wallet } from "../../../utils/Json";
import { TransitionProps } from '@material-ui/core/transitions';
import { Divider } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const useStyles = makeStyles((theme) => ({
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    [theme.breakpoints.up("sm")]: {
      flexWrap: "wrap",
      flexDirection: "row",
    },
  },
}));

const BuyOM: React.FC<{
  open: boolean;
  handleClose: () => void;
}> = ({handleClose, open}) => {
  return(
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle id="alert-dialog-slide-title">{"Buy OM"}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        Payment body
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Cancel
      </Button>
    </DialogActions>
  </Dialog>
  )
}

const ConnectWallet: React.FC<{
  open: boolean;
  handleClose: () => void;
}> = ({handleClose, open}) => {
  return(
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      maxWidth="xs"
      onClose={handleClose}
      className="text-center"
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
  >
    <DialogActions className="wallet-connect-action">
      <IconButton onClick={handleClose} color="default">
        <Icon style={{color: "#fff"}}>close</Icon>
      </IconButton>
    </DialogActions>
    <DialogTitle id="alert-dialog-slide-title">{"Blockchain Wallets"}</DialogTitle>
    <DialogContent className="pb-5">
      <DialogContentText id="alert-dialog-slide-description">
        Safely connect to your existing blockchain wallet and directly trade tokens in them.
      </DialogContentText>

      <Grid item xs={12}>
        <List>
          {wallet.map((i, index) => (
            <React.Fragment key={index}>
              <ListItem button className="col-sm-12">
                <ListItemAvatar>
                  <Avatar src={i.src} />
                </ListItemAvatar>
                <ListItemText
                  primary={i.name}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end">
                    <Icon>arrow_right_alt</Icon>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Grid>
    </DialogContent>
  </Dialog>
  )
}

const Staking: React.FC = () => {
  const classes = useStyles();
  const [openBuyOm, setBuyOmOpen] = React.useState(false);

  const handleBuyOmClickOpen = () => {
    setBuyOmOpen(true);
  };

  const handleBuyOmClose = () => {
    setBuyOmOpen(false);
  };

  const [openConnectWallet, setConnectWalletOpen] = React.useState(false);

  const handleConnectWalletClickOpen = () => {
    setConnectWalletOpen(true);
  };

  const handleConnectWalletClose = () => {
    setConnectWalletOpen(false);
  };
  return (
    <Grid container spacing={3}>
      <BuyOM open={openBuyOm} handleClose={handleBuyOmClose} />
      <ConnectWallet open={openConnectWallet} handleClose={handleConnectWalletClose} />
      <Grid
        item
        xs={12}
        className={classes.top}
      >
        <div className="staking-top order-sm-1 order-2">
          <span>Available balances:</span>
          {staking.map((i, index) => (
            <div key={index} className="curr-details col-sm-2 p-0 px-md-3 ml-0 ml-sm-1">
              <img
                className="curr-details_img"
                src={i.src}
                alt="currn"
                height="30"
                width="30"
              />
              <span className="curr-details_name">{i.name}</span>
              <span className="curr-details_value">{i.value}</span>
            </div>
          ))}
        </div>
        <div className="py-3 order-sm-2 order-1">
          <Button
            variant="outlined"
            color="default"
            style={{color: "#023750", borderColor: "#023750", borderRadius: 15}}
            endIcon={<Icon>navigate_next</Icon>}
            onClick={handleConnectWalletClickOpen}
          >
            Connect to a wallet
          </Button>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        className={classes.top}
      >
        <Paper variant="outlined" className="w-100 staking-paper" style={{minHeight: "80vh", borderRadius: 20}} >
          <div className="p-3 staking-bottom flex-md-row flex-column">
            <div className="d-flex flex-wrap align-items-md-center flex-md-row flex-column">
              <span className="text-white">Total Staked Value:</span>
              {staking.map((i, index) => (
                <div key={index} className="curr-details p-0 px-md-2 ml-0">
                  <span className="curr-details_value">{i.value}</span>
                  <span className="curr-details_name">{i.name}</span>
                </div>
              ))}
            </div>
            <div className="my-1">
              <Button variant="outlined" style={{color: "#fff", borderColor: "white", borderRadius: 15}} size={"small"} onClick={handleBuyOmClickOpen}>Buy OM</Button>
            </div>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Staking;
