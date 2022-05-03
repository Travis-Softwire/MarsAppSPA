import React, {Fragment} from "react";

const Info = (props: any) => {
  const title = props.title;
  const para1Text = props.para1;
  const para2Text = props.para2;
  const imageURL = props.imageURL;
  const imageAlt = props.imageAlt;
  return (
      <Fragment>
          <title>{title}</title>
          <p>{para1Text}</p>
          <p>{para2Text}</p>
          <img src={imageURL} alt={imageAlt} />
      </Fragment>
  )
};

export default Info;