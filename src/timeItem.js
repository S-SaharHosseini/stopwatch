const Item = (props) => {
  return (
    <div className="timeItem">
      <p>{props.children}</p>
      <i className="fi fi-rr-cross"></i>
    </div>
  );
};
export default Item;
