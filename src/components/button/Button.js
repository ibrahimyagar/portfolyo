import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab, download}) {
  const linkProps = {
    href,
    ...(newTab ? {target: "_blank", rel: "noreferrer"} : {}),
    ...(download ? {download: true} : {})
  };

  return (
    <div className={className}>
      <a className="main-button" {...linkProps}>
        {text}
      </a>
    </div>
  );
}
