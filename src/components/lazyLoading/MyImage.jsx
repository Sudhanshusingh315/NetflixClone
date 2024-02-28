import { LazyLoadImage } from "react-lazy-load-image-component";
const MyImage = ({ src, className }) => {
  return (
    <div>
      <LazyLoadImage src={src} effect="blur" className={className || ""} />
    </div>
  );
};

export default MyImage;
