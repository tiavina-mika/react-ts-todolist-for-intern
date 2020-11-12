import * as React from "react";
import { createUseStyles } from "react-jss";
import "./styles.css";

const useStyles = createUseStyles((theme: any) => ({
  root: {
    composes: 'flexColumn center justifyCenter',
    // backgroundColor: 'red',
    height: '100vh'
  },
  container: {

  },
  form: {
    // backgroundColor: theme.colors.primary,
    composes: 'flexColumn center justifyCenter',
    // height: 300,
    width: 300
  },
  input: {
    border: '1px solid grey',
    composes: 'stretchSelf',
    borderRadius: 3,
    padding: theme.spacing(3),
  },
  button: {
    composes: 'stretchSelf',
    border: '1px solid grey',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    marginTop: theme.spacing(2),
  },
  items: {
    composes: 'flexColumn center spaceBetween flex1 stretchSelf',
    marginTop: theme.spacing(3),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  item: {
    composes: 'flexRow center spaceBetween flex1 stretchSelf',
  },
  text: {
    fontFamily: 'Roboto, sans-serif'
  }
}))
const App = () => {
  const classes = useStyles();
  const [text, setText] = React.useState<string>('');
  const [items, setItems] = React.useState<string[]>([]);

  const handleChange = () => {

  };
  const handleSubmit = () => {

  };

  return (
      <div className={classes.root}>
        <div className={classes.container}>
          <form className={classes.form} onSubmit={handleSubmit}>
              <input 
                value={text} 
                onChange={handleChange} 
                className={classes.input}
                placeholder="Enter a text"
              />
              <button type="submit" className={classes.button}>Save</button>
          </form>
          <div className={classes.items}>
            <div className={classes.item}>
              <span className={classes.text}>Text Exemple</span>
              <button>x</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;