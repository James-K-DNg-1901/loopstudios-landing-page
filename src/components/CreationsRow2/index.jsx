import Creation from "../Creatrion";
import deskFromAbove from "../../assets/images/desktop/image-from-above.jpg";
import mobileFromAbove from "../../assets/images/mobile/image-from-above.jpg";
import deskPocket from "../../assets/images/desktop/image-pocket-borealis.jpg";
import mobilePocket from "../../assets/images/mobile/image-pocket-borealis.jpg";
import deskCuriosity from "../../assets/images/desktop/image-curiosity.jpg";
import mobileCuriosity from "../../assets/images/mobile/image-curiosity.jpg";
import deskFisheye from "../../assets/images/desktop/image-fisheye.jpg";
import mobileFisheye from "../../assets/images/mobile/image-fisheye.jpg";
import "./creations2.scss";

function Createtions() {
  const creationState = [
    {
      id: 1,
      desktop: deskFromAbove,
      mobile: mobileFromAbove,
      imgAlt: "img-from-above",
      title: "from up above vr",
    },
    {
      id: 2,
      desktop: deskPocket,
      mobile: mobilePocket,
      imgAlt: "img-pocket",
      title: "pocket borealis",
    },
    {
      id: 3,
      desktop: deskCuriosity,
      mobile: mobileCuriosity,
      imgAlt: "img-curiosity",
      title: "the curiosity",
    },
    {
      id: 4,
      desktop: deskFisheye,
      mobile: mobileFisheye,
      imgAlt: "img-fisheye",
      title: "make it fisheye",
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
