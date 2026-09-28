import logoFull from "../assets/logo.png";
import logoIcon from "../assets/logo-icon.png";

/**
 * <Logo />
 * variant = "full" | "icon"
 * height  = CSS string (ex: "44px")
 */
export default function Logo({ variant = "full", height = "44px", alt = "OKLA Digital" }) {
  const src = variant === "icon" ? logoIcon : logoFull;
  return (
    <img
      src={src}
      alt={alt}
      style={{
        height,
        width: "auto",
        maxWidth: "100%",
        objectFit: "contain",
        display: "block",
      }}
    />
  );
}