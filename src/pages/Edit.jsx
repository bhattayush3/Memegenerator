import React, { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Text from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";
import * as htmlToImage from "html-to-image";
import { toPng } from "html-to-image";
import download from "downloadjs";
function Edit() {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeRef = useRef();
  const Addtext = () => {
    setCount(count + 1);
  };
  const handleSaveAsPng = () => {
    if (!memeRef.current) return;
    htmlToImage
      .toPng(memeRef.current)
      .then((dataUrl) => {
        download(dataUrl, "meme.png");
      })
      .catch((err) => {
        console.error("Error saving image:", err);
      });
  };
  return (
    <div>
      <div
        ref={memeRef}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "500px", // or any height you want
          position: "relative",
          background: "#fff", // background color for proper export
        }}
      >
        <img
          src={params.get("url")}
          alt="meme"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
        {Array(count)
          .fill(0)
          .map((_, i) => (
            <Text key={i} />
          ))}
      </div>
      <Button onClick={Addtext}>Add text</Button>
      <Button variant="success" onClick={handleSaveAsPng}>
        Save
      </Button>
    </div>
  );
}

export default Edit;
