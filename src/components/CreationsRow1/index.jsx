import Creation from "../Creatrion";
import deskEarth from "../../assets/images/desktop/image-deep-earth.jpg";
import mobileEarth from "../../assets/images/mobile/image-deep-earth.jpg";
import deskNight from "../../assets/images/desktop/image-night-arcade.jpg";
import mobileNight from "../../assets/images/mobile/image-night-arcade.jpg";
import deskSoccer from "../../assets/images/desktop/image-soccer-team.jpg";
import mobileSoccer from "../../assets/images/mobile/image-soccer-team.jpg";
import deskGrid from "../../assets/images/desktop/image-grid.jpg";
import mobileGrid from "../../assets/images/mobile/image-grid.jpg";
import "./creations1.scss";

function Createtions() {
  const creationState = [
    {
      id: 1,
      desktop: deskEarth,
      mobile: mobileEarth,
      imgAlt: "img-earth",
      title: "deep earth",
    },
    {
      id: 2,
      desktop: deskNight,
      mobile: mobileNight,
      imgAlt: "img-night",
      title: "night arcade",
    },
    {
      id: 3,
      desktop: deskSoccer,
      mobile: mobileSoccer,
      imgAlt: "img-soccer",
      title: "soccer team vr",
    },
    {
      id: 4,
      desktop: deskGrid,
      mobile: mobileGrid,
      imgAlt: "img-grid",
      title: "the grid",
    },
  ];

  return (
    <div className="creattions-style">
      {creationState.map((creationState) => (
        <div key={creationState.id}>
          <Creation
            desktopImage={creationState.desktop}
            mobileImage={creationState.mobile}
            imageAlt={creationState.imgAlt}
            title={creationState.title}
          />
        </div>
      ))}
    </div>
  );
}
export default Createtions;
