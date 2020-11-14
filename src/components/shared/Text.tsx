import * as React from "react";
import { ElementType } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  text: {
    fontFamily: 'Roboto, sans-serif',
    textTransform: 'capitalize',
    letterSpacing: 0.5,
  },
});

type Props = { text?: string; tagName?: 'span' | 'p' };
const Text = ({ text, tagName }: Props) => {
  const classes = useStyles();
  const Component: ElementType = tagName || 'span';

  return (
      <Component className={classes.text}>
        {text}
      </Component>
  );
}

export default Text;