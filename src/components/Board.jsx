// data lives in events.js
// Board reads the data and renders it, so the data and the UI stay separate (edit events without touching JSX).
// .map() turns the array of event objects into an array of <Event /> elements.
// it's an expression, so it can sit directly inside JSX { } — unlike a for loop (a statement), which would have to build the array before the return.
// key={event.id} gives React a stable, unique id per card so it can track each one efficiently when the list changes (required for mapped lists).
// {...event} spreads every field as a prop, so Board doesn't need to know the fields; Event just destructures the ones it uses.
// Net result: to add/remove/edit an event, change only events.js. Board and Event stay generic

import events from '../data/events';
import Event from './Event';

const Board = () => {
  return (
    <div className="board">
      {events.map((event) => (
        <Event key={event.id} {...event} />
      ))}
    </div>
  );
};

export default Board;
