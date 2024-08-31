import { FunctionComponent } from "react";

export type ButtonType = {
  className?: string;
  iconTrailing?: boolean;
  iconLeading?: boolean;
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  iconTrailing = false,
  iconLeading = false,
}) => {
  return (
    <div
      className={`rounded-lg overflow-hidden flex flex-row items-center justify-center py-2.5 px-[15px] gap-2 text-left text-sm text-base-white font-text-sm-regular ${className}`}
    >
      {iconLeading && (
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
          alt=""
          src="/placeholder1.svg"
        />
      )}
      <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[35px]">
        Docs
      </a>
      {iconTrailing && (
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
          alt=""
          src="/placeholder1.svg"
        />
      )}
    </div>
  );
};

export default Button;
