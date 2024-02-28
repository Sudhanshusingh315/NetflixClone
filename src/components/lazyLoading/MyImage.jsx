import { LazyLoadImage } from "react-lazy-load-image-component";
const MyImage = ({ src, className, alt }) => {
  return (
    <LazyLoadImage src={src} effect="blur" className={className} alt={alt} />
  );
};

export default MyImage;
