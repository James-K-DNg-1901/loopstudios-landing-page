import deskInteractive from "../../assets/images/desktop/image-interactive.jpg";
import mobileInteractive from "../../assets/images/mobile/image-interactive.jpg";
import CreationsPart from "../CreationPart";

function Main() {
  return (
    <main>
      {/* main content */}
      <div className="interactive-container">
        <picture>
          <source media="(min-width: 600px)" srcSet={deskInteractive} />
          <img
            className="img-style"
            src={mobileInteractive}
            alt="image-interactive"
          />
        </picture>
        <div className="main-content">
          <h1>the leader in interactive vr</h1>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
      {/* creation */}
      <CreationsPart />
    </main>
  );
}
export default Main;
