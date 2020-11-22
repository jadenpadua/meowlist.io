import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
  root: {
    width: "60%",
    height: "95%",
    marginTop: "2%",
  },
  title: {
    fontSize: 30,
  },
  pos: {
    marginBottom: 12,
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <div className="wrapper">
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              align="center"
            >
              Meow List
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default App;
