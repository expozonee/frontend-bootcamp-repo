import "./Spinner.css";

type SpinnerProps = {
  type: string;
  done: boolean;
};

export default function Spinner({ type, done }: SpinnerProps) {
  if (done) return null;

  return (
    <>
      {type === "spinner" ? (
        <>
          <div className="spinner"></div>
          <div className="cirlce"></div>
        </>
      ) : type === "dots-blink" ? (
        <div className="dots-blink">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      ) : (
        <div className="dots-scale">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      )}
    </>
  );
}
