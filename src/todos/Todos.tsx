import * as React from "react";
import { ReactNode } from 'react';
import { createUseStyles, useTheme } from "react-jss";
import { FaCheck, FaTimes, FaTrashAlt } from 'react-icons/fa';

import { Todo } from '../App';
import IconButton from './IconButton';

const useStyles = createUseStyles((theme: any) => ({
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
  },
  actions: {
    composes: 'flexRow center',
  },
}))

type Props = { items: Todo[]; handleItems: (values: Todo[]) => void };
const Todos = ({ items, handleItems }: Props) => {
  const theme = useTheme();
  const classes = useStyles();
  
  const handleDelete = (index: number): void => {
    const newItems = items.filter((_, i: number) => i !== index);
    handleItems([...newItems]);
  }

  const handleCheck = (index: number): void => {
    const newItems = [...items];
    newItems.map((item: Todo, i: number): void | boolean => {
      if (i !== index) return false;
      item.checked = !item.checked;
      return false;
    })
    handleItems([...newItems]);
  }

  return (
    <div className={classes.items}>
      { items.length > 0
        ? [items.map((item: Todo, index: number): ReactNode => (
      // ----------------- List -----------------------------// 
        <div className={classes.item} key={item.text}>
          {/* ----------------- Text ----------------------------- */}
          <span className={classes.text}>
            {item.text}
          </span>
          {/* ----------------- Button Actions ----------------------------- */}
          <div className={classes.actions}>
            <IconButton
              icon={item.checked ? FaCheck : FaTimes}
              color={item.checked && (theme as any)?.colors.active}
              onClick={() => handleCheck(index)}
            
            />
            <IconButton
              icon={FaTrashAlt}
              size={18}
              onClick={() => handleDelete(index)}
            />
          </div>
        </div>
      ))]
      // ----------------- No Data -----------------------------// 
      : <span className={classes.text}>No Todo Yet </span>
    }
    </div>
  );
}

export default Todos;