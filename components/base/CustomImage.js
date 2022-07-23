import React from "react";

export default function CustomImage({
  src = "",
  title = "",
  alt = "",
  // width = "",
  ...props
}) {
  return (
    <img
      src={src ?? ""}
      alt={alt || title}
      {...props}
      // style={{ width: `${width}`}}
    />
  );
}
