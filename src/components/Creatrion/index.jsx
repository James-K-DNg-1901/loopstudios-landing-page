import "./creation.scss";

function creation(props) {
  return (
    <div className="creation-style">
      <picture>
        <source media="(min-width: 849px)" srcSet={props.desktopImage} />
        <img src={props.mobileImage} alt={props.imageAlt} />
      </picture>
      <h3>{props.title}</h3>
    </div>
  );
}
export default creation;
