import React from "react";
function Post({ key, image, content, user }) {
  return (
    <React.Component key={key}>
      {image && <img src={URL.createObjectURL(image)} alt="Post cover" />}
      <p>{content}</p>
      <div>{user}</div>
    </React.Component>
  );
}

export default Post;
