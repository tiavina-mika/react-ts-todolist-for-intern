import * as React from "react";
import { ElementType } from 'react';
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  iconButton: {
    composes: 'flexRow center',
    backgroundColor: 'transparent',
    border: 'none',
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  }
}))

type Props = { icon: any; onClick: () => void; size?: number; color?: string };
const IconButton = ({ icon, onClick, size, color }: Props) => {
  const classes = useStyles();

  const Icon: ElementType = icon;
  
  return (
      <button 
        className={classes.iconButton} 
        type="button"
        onClick={onClick}
      >
        {/* {item.checked 
          ? <FaCheck size={22} color={(theme as any)?.colors.active} /> 
          : <FaTimes size={22} />
        } */}
        <Icon size={size || 22} color={color} />
      </button>
  );
}

export default IconButton;