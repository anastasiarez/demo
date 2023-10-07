
const Header = (props) => {

  return (
    <div>
      <h3>{props.heading}</h3>
      
      <div className="layout">
        {props.children}
      </div>

    </div>
  );
};

export default Header;
