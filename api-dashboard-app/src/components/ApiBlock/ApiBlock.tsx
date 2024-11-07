/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./ApiBlock.css";
type ApiBlockProps = {
  headingText: string;
  color?: string;
  url: string;
  image?: boolean;
  imageWithMsg?: boolean;
  programming?: boolean;
};

type Data = {
  data: any | undefined;
  error: boolean;
};

export default function ApiBlock({
  headingText,
  color,
  url,
  image,
  imageWithMsg,
  programming,
}: ApiBlockProps) {
  const [result, setResult] = useState<Data | undefined>(undefined);
  const [error, setError] = useState<any | undefined>(undefined);

  async function getData(url: string) {
    if (image) {
      setResult({
        data: url,
        error: false,
      });
    } else {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          setResult({
            data: undefined,
            error: true,
          });
        } else {
          setError(undefined);
          const data = await res.json();
          setResult({
            data,
            error: false,
          });
        }
      } catch (error) {
        setError(error);
      }
    }
  }

  return (
    <div className="block">
      <h1 style={{ color: color }}>{headingText}</h1>
      <button
        style={{ backgroundColor: color, color: "white" }}
        className="send-request-btn"
        onClick={async () => {
          await getData(url);
        }}
      >
        <i></i>
        Send Request
      </button>
      <div className="result">
        {error ? (
          <p>{error.message}</p>
        ) : result && result?.data ? (
          image ? (
            <img src={result.data} alt="image" />
          ) : imageWithMsg ? (
            <img src={result.data.message} alt="image" />
          ) : programming ? (
            <div>
              <p>{result.data.setup}</p>
              <p>{result.data.delivery}</p>
            </div>
          ) : (
            <p>{result.data.fact}</p>
          )
        ) : result?.error ? (
          <p style={{ color: "red" }}>Error occured! please try again</p>
        ) : (
          <p style={{ color: color }}>Api Result Here</p>
        )}
      </div>
    </div>
  );
}
