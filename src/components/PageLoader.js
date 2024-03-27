import React from "react";
import { Container, Fade } from "react-bootstrap";
import { Triangle, ThreeDots } from "react-loader-spinner";

function PageLoader({ loading, children }) {
  return (
    <Container fluid="lg">
      {loading && <TriangleLoader />}
      <Fade in={!loading}>
        <div
          style={{
            display: loading ? "none" : "block",
            background: "white",
            marginTop: 32,
            borderRadius: 4,
            padding: 16,
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          }}
        >
          {children}
        </div>
      </Fade>
    </Container>
  );
}

export default PageLoader;

export function TriangleLoader({size,color}) {
  return (
    <Triangle
      height={size || "80"}
      width={size || "80"}
      color={color ||"#212529"}
      ariaLabel="triangle-loading"
      wrapperStyle={size? {} :{
        width: "100%",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      wrapperClassName=""
      visible
    />
  );
}
