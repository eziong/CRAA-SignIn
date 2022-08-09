export function AuthTemplate({
  ImageComponent,
  ProcessComponent,
}: {
  ImageComponent: JSX.Element;
  ProcessComponent: JSX.Element;
}) {
  return (
    <div>
      <div>{ImageComponent}</div>
      <div>{ProcessComponent}</div>
    </div>
  );
}
