import Image from "assets/onboarding.jpeg";

export function SignInImage() {
  return (
    <div style={{ width: "100%" }}>
      <img
        src={Image}
        style={{ objectFit: "scale-down", width: "100%", height: "100%" }}
      />
    </div>
  );
}
