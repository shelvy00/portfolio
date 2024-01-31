import Lottie from "lottie-react";
import cat from "./cat-404.json";

interface Props {
  notFound?: boolean;
}

// Find generic error page for non 404
const NotFound = ({ notFound }: Props) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <Lottie
      animationData={notFound ? cat : cat}
      loop={true}
      style={{ width: "50%" }}
    />
  </div>
);

export default NotFound;
