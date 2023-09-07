import { Cloudinary } from "@cloudinary/url-gen";
import { createContext, PropsWithChildren, useMemo } from "react";

export const CloudinaryContext = createContext<{ cld: Cloudinary } | undefined>(
  undefined
);

export const CloudinaryProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const cld = useMemo(() => {
    return new Cloudinary({ cloud: { cloudName: "dkhnvnp8q" } });
  }, []);

  return (
    <CloudinaryContext.Provider value={{ cld }}>
      {children}
    </CloudinaryContext.Provider>
  );
};
