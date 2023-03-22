import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import styles from "./styles.module.css";
import Image from "next/image";
import { Loader } from "../Loader/Loader";
import axios from "axios";

type itemType = [
  {
    key: string;
    value: string;
  }
];

export default function Form() {
  const [files, setFiles] = useState<any>([]);
  const [showFileSizeError, setShowFileSizeError] = useState(false);
  const [data, setData] = useState<any>([]);
  const [isSame, setIsSame] = useState(false);
  const [state, setState] = useState("idle");
  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () =>
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const thumbs = files.map((file: any) => (
    <div className={styles.thumb} key={file.name}>
      <Image
        src={file.preview}
        onLoad={() => {
          URL.revokeObjectURL(file.preview);
        }}
        fill
        sizes="100px"
        alt={"preview image"}
      />
    </div>
  ));

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      setState("loading");
      let headersList = {
        Accept: "*/*",
      };

      let bodyContent = new FormData();
      bodyContent.append("file", files[0], "Test");

      let reqOptions = {
        url: "https://mlclassifyloadbalancer-464964149.us-east-1.elb.amazonaws.com/",
        method: "POST",
        headers: headersList,
        data: bodyContent,
      };

      let res = await axios.request(reqOptions);

      setData(res.data);
      setIsSame(true);
      setState("success");
    } catch (error) {
      setState("error");
    }
  };
  const color = ["orange", "green", "blue"];

  const renderData = (item: itemType) =>
    item.map(({ key, value }, i) => {
      // if (Number(value) < 75) return;
      return (
        <div key={`${key}-${value}`} className={styles.listResultItem}>
          <h3 className="capitalize font-mono">{key}</h3>
          <div className={styles.flexWrapper}>
            <div className="single-chart">
              <svg viewBox="0 0 36 36" className={`circular-chart ${color[i]}`}>
                <path
                  className="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  strokeDasharray={`${Math.round(
                    Math.ceil(Number(value))
                  )}, 100`}
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text
                  x="18"
                  y="20.35"
                  className="percentage capitalize text-white"
                >
                  {Math.round(Number(value))}%
                </text>
              </svg>
            </div>
          </div>
        </div>
      );
    });

  return (
    <form action="post" onSubmit={handleSubmit} className={styles.form}>
      {Boolean(files?.length) ? (
        <div className={styles.resultContainer}>
          <aside className={styles.thumbsContainer}>{thumbs}</aside>
          {state === "error" && (
            <div className="text-white font-bold text-2xl w-full my-auto ">
              Sorry, try again latter
            </div>
          )}
          {Boolean(data?.length) &&
            (state === "success" ? (
              <div className={styles.listResult}>{renderData(data)}</div>
            ) : (
              <Loader />
            ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <p>No pictures or images have been added yet</p>
        </div>
      )}

      <div className="flex justify-center">
        <button
          disabled={Boolean(!files?.length) || isSame}
          className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center focus:outline-none disabled:opacity-50"
        >
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Upload</span>
        </button>
      </div>
      <Dropzone
        minSize={1024}
        maxSize={7340032}
        maxFiles={1}
        multiple={false}
        onDropRejected={(rej) => setShowFileSizeError(true)}
        accept={{
          "image/png": [".png"],
          "image/jpeg": [".jpeg"],
        }}
        onDrop={(acceptedFiles) => {
          setShowFileSizeError(false);
          setIsSame(false);
          const newF = acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          );
          setFiles(newF);
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps({
              className: styles.dropzone,
            })}
          >
            <input
              {...getInputProps()}
              id={"file"}
              name={"file"}
              accept="image/png, image/jpeg"
            />
            <div className={styles.dropzoneContent}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
              </div>
              <em className={styles.dropzoneTitle}>
                Drag &apos;n&apos; drop some files here, or click to select
                files (Only *.jpeg and *.png images will be accepted)
              </em>
            </div>
          </div>
        )}
      </Dropzone>
    </form>
  );
}
