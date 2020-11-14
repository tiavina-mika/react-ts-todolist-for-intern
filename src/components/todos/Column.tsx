import * as React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { FaCheck, FaTimes, FaTrashAlt } from 'react-icons/fa';

import IconButton from './IconButton';
import { useTodoDispatch } from "../../store/context/TodoContext";
import { checkTodo, removeTodo, selectTodo } from "../../store/actions/TodoActions";
import { Todo as TodoI } from "../../store/reducers/TodoReducer";

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
  checkbox: {
    marginRight: theme.spacing(1),
    '&:hover': {
      cursor: 'pointer',
    }
  },
  text: {
    fontFamily: 'Roboto, sans-serif',
    textTransform: 'capitalize',
    letterSpacing: 0.5,
  },
  actions: {
    composes: 'flexRow center',
  },
}))

type Props = { 
  onSelect: () => void; 
  onCheck: () => void; 
  onDelete: () => void; 
  content?: string;
  checked: boolean; 
}
const Column = ({ onSelect, onCheck, onDelete, content, checked }: Props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
      <div className={classes.item}>
        <div>
          <input type="checkbox" className={classes.checkbox} onChange={onSelect} />
          {content && (
            <span className={classes.text}>
              {content}
            </span>
          )}
        </div>
        {/* ----------------- Button Actions ----------------------------- */}
        <div className={classes.actions}>
          <IconButton
            icon={checked ? FaCheck : FaTimes}
            color={checked ? (theme as any)?.colors.active : 'initial'}
            onClick={onCheck}
          
          />
          <IconButton
            icon={FaTrashAlt}
            size={18}
            onClick={onDelete}
          />
        </div>
      </div>
  );
}

export default Column;