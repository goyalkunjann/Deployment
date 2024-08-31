import { FunctionComponent } from "react";

export type AvatarAddButtonType = {
  className?: string;
};

const AvatarAddButton: FunctionComponent<AvatarAddButtonType> = ({
  className = "",
}) => {
  return (
    <div
      className={`h-[41px] w-[41px] rounded-xl bg-base-white border-gray-300 border-[1px] border-dashed box-border flex flex-row items-start justify-start py-1.5 pl-1.5 pr-[5px] shrink-0 ${className}`}
    >
      <div className="rounded-xl overflow-hidden flex flex-row items-center justify-center p-1">
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/plus.svg"
        />
      </div>
    </div>
  );
};

export default AvatarAddButton;
