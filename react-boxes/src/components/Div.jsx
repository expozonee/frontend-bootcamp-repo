import PropTypes from "prop-types";

export function Div({ flexDirection, background, width, height, children }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        background: background,
        width: `${width}px`,
        height: `${height}px`,
        ...(flexDirection && {
          flexDirection: flexDirection,
        }),
      }}
    >
      {children}
    </div>
  );
}

Div.propTypes = {
  flexDirection: PropTypes.string,
  background: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  children: PropTypes.node,
};
