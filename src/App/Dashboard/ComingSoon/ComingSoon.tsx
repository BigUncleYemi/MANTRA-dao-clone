import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import "./comingSoon.scss";

const ComingSoon: React.FC = () => {

  return (
    <Grid container justify="center" alignItems="center" direction="column">
      <Grid item>
        <img src={"https://app.mantradao.com/static/media/coming-icon.3ab2db42.svg"} height="300" alt="coming soon" />
      </Grid>
      <Grid item>
        <Typography variant="h3" gutterBottom style={{fontWeight: "bolder", marginTop: 30}}>
          COMING SOON
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6" gutterBottom align="center">
          This Feature is already planned and will be implemented very soon! Stay tuned to our official channels for more announcements and info.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ComingSoon;
