import React from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

function StarFill({ iter }) {
  const iters = Math.floor(iter);
  return (
    <p className="star-review">
      {[...Array(iters)].map((e, i) => <BsStarFill key={i} />)}
      {!Number.isInteger(iters) && iters >= 0.5 ? <BsStarHalf /> && iters + 1 : null}
      {
                [...Array(5 - iters)].map((e, i) => <BsStar key={i} />)
                }
    </p>
  );
}

export default StarFill;
