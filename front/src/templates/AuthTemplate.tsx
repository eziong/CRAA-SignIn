export function AuthTemplate({
  ImageComponent,
  ProcessComponent,
}: {
  ImageComponent: JSX.Element;
  ProcessComponent: JSX.Element;
}) {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {ImageComponent}
      </div>
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {ProcessComponent}
      </div>
    </div>
  );
}
