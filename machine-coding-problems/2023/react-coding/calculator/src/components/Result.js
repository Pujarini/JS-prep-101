const Result = ({ result }) => {
  return (
    <div className="display_component">
      <p>{result ? result : "0"}</p>
    </div>
  );
};

export default Result;
