import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

function StarFill({ iter }) {
  iter = Math.floor(iter);
  return (
    <p className="star-review">
      {[...Array(iter)].map((e, i) => <BsStarFill key={i} />)}
      {!Number.isInteger(iter) && iter >= 0.5 ? <BsStarHalf /> && iter + 1 : null}
      {
                [...Array(5 - iter)].map((e, i) => <BsStar key={i} />)
                }
    </p>
  );
}

export default StarFill;
