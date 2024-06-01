import React, { useEffect, useRef } from "react";
import styles from "./ImagePicker.module.css";

const ImagePicker = ({ onImageChange, clearImage }) => {
  const fileInputRef = useRef();

  const cloud_name = "dyno3yyw6";
  const preset_key = "hotel-hub";

  const imageChangeHandler = (e) => {
    const file = e.target.files[0];
    const imageFormData = new FormData();

    imageFormData.append("file", file);
    imageFormData.append("upload_preset", preset_key);
    fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
      method: "POST",
      body: imageFormData,
    })
      .then((res) => res.json())
      .then((data) => {
        const transformedUrl = transformImageUrl(data.secure_url);
        onImageChange(transformedUrl);
      })
      .catch((err) => console.log(err));
  };

  const transformImageUrl = (url) => {
    const transformation = "c_fill,w_867,ar_1.0,g_auto,q_auto,f_auto";
    const urlParts = url.split("/upload/");
    return `${urlParts[0]}/upload/${transformation}/${urlParts[1]}`;
  };

  useEffect(() => {
    if (clearImage && fileInputRef.current.value !== null) {
      fileInputRef.current.value = null;
    }
  }, [clearImage]);

  return (
    <div className={styles.container}>
      <input type="file" ref={fileInputRef} onChange={imageChangeHandler} />
    </div>
  );
};

export default ImagePicker;
