import clsx from "clsx";

const MAX_WIDTH = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  default: "max-w-7xl",
  full: "max-w-full",
};

function Container({
  children,
  className = "",
  size = "default",
  as: Component = "div",
}) {
  return (
    <Component
      className={clsx(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        MAX_WIDTH[size] || MAX_WIDTH.default,
        className
      )}
    >
      {children}
    </Component>
  );
}

export default Container;