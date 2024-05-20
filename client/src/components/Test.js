import React, { useEffect, useState } from "react";

const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    console.log(image);
  }, [image]);

  return (
    <div>
      <h1>Upload and Display Image</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && (
        <img
          src={image}
          alt="Selected"
          style={{ width: "200px", height: "auto", marginTop: "10px" }}
        />
      )}
    </div>
  );
};

export default ImageUploader;
