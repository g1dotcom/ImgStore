"use client";
import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";
import { useState } from "react";

export default function ImageUploader() {
  const [imageUrl, setImageUrl] = useState<string>("");

  return (
    <div>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          setImageUrl(res[0].url);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />

      {imageUrl.length ? (
        <div>
          {" "}
          <Image src={imageUrl} alt="" width={250} height={250} />{" "}
        </div>
      ) : null}
    </div>
  );
}
