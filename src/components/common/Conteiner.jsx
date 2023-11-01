
import clsx from "clsx";


const Container = ({ class: className, padding = "normal", children }) => {
    return (
      <div
        className={clsx(
          "mx-auto max-w-[1080px] px-[20px] lg:px-7",
          padding === "small" && "xl:px-10",
          padding === "normal" && "xl:px-[0px]",
          className
        )}
      >
        {children}
      </div>
    );
  }
  export default Container