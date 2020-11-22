import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import cardStyles from './style-classes'
import "./style.less";


const CatCard = () => {
  const cardClass = cardStyles();
  return (
    <div className="wrapper">
      <Card className={cardClass.root}>
        <CardContent>
          <Typography
            className={cardClass.title}
            color="textSecondary"
            gutterBottom
            align="center"
          >
            Meow List
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CatCard;
