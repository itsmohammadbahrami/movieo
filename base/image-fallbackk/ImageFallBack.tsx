import Image, { ImageProps } from "next/image";

import { useState } from "react";

interface Props extends ImageProps {
  fallbackSrc: string;
}

const ImageWithFallback: React.FC<Props> = ({
  src,
  fallbackSrc,
  alt,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallbackSrc)}
      loading="lazy"
    />
  );
};

export default ImageWithFallback;
