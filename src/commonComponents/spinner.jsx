function Spinner({ text }) {
  return (
    <div className="center-flex">
      <div className="spinner">
        {text}
        <div className="spinner-sector spinner-sector-red" />
        <div className="spinner-sector spinner-sector-blue" />
        <div className="spinner-sector spinner-sector-green" />
      </div>
    </div>
  );
}

export default Spinner;
