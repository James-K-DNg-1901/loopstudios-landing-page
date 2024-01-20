import CreationsRow1 from "../CreationsRow1";
import CreationsRow2 from "../CreationsRow2";
import "./creationspart.scss";

function CreationsPart() {
  return (
    <div className="creation-part">
      <h2>our creations</h2>
      <div className="see-all">see all</div>
      <div className="creations-img-list">
        <CreationsRow1 />
        <CreationsRow2 />
      </div>
    </div>
  );
}
export default CreationsPart;
