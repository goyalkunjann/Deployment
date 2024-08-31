import { FunctionComponent } from "react";

export type SidebarNavigationType = {
  className?: string;
};

const SidebarNavigation: FunctionComponent<SidebarNavigationType> = ({
  className = "",
}) => {
  return (
    <div
      className={`h-[1039px] w-40 bg-gray1-500 border-silver-300 border-r-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start mq1000:hidden ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-between py-0 pl-0 pr-5">
        <div className="flex flex-col items-start justify-start pt-8 px-0 pb-0 gap-6">
          <div className="flex flex-col items-start justify-start py-0 pl-6 pr-[25px]">
            <div className="w-8 h-8 flex flex-row items-start justify-start bg-[url('/public/logomark@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <img
                className="h-8 w-8 relative rounded-lg overflow-hidden shrink-0 hidden"
                alt=""
                src="/content.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pl-4 pr-[17px] gap-2">
            <div className="rounded-md bg-gray1-500 overflow-hidden flex flex-row items-start justify-start p-3">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/homeline.svg"
              />
            </div>
            <div className="rounded-md bg-whitesmoke-200 overflow-hidden flex flex-row items-start justify-start p-3">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/barchartsquare02.svg"
              />
            </div>
            <div className="rounded-md bg-gray1-600 overflow-hidden flex flex-row items-start justify-start p-3">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/layersthree01.svg"
              />
            </div>
            <div className="rounded-md bg-gray1-600 overflow-hidden flex flex-row items-start justify-start p-3">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/checkdone01.svg"
              />
            </div>
            <div className="rounded-md bg-gray1-600 overflow-hidden flex flex-row items-start justify-start p-3">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/piechart03.svg"
              />
            </div>
            <div className="rounded-md bg-gray1-600 overflow-hidden flex flex-row items-start justify-start p-3">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/users01.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-0 px-4 pb-6 gap-6">
          <div className="flex flex-col items-start justify-start py-0 pl-0 pr-px gap-2">
            <div className="rounded-md bg-gray1-600 overflow-hidden flex flex-row items-start justify-start p-3">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/lifebuoy01.svg"
              />
            </div>
            <div className="rounded-md bg-gray1-600 overflow-hidden flex flex-row items-start justify-start p-3">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/settings01.svg"
              />
            </div>
          </div>
          <img
            className="w-12 h-12 rounded-181xl object-cover"
            loading="lazy"
            alt=""
            src="/avatar@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarNavigation;
