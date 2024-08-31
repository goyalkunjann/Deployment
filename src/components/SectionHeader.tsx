import { FunctionComponent } from "react";
import Button from "./Button";

export type SectionHeaderType = {
  className?: string;
};

const SectionHeader: FunctionComponent<SectionHeaderType> = ({
  className = "",
}) => {
  return (
    <header
      className={`self-stretch bg-gray1-500 border-silver-300 border-b-[1px] border-solid box-border flex flex-col items-start justify-center pt-[7.5px] px-0 pb-[19px] max-w-full text-left text-sm text-gray-600 font-text-sm-regular ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-8 box-border max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full">
          <div className="w-[278px] hidden flex-row items-center justify-start">
            <div className="h-7 flex-1 flex flex-row items-center justify-start gap-2">
              <div className="rounded-md flex flex-row items-start justify-start p-1">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/homeline-1.svg"
                />
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src="/chevronright.svg"
              />
              <div className="self-stretch flex-1 rounded-md flex flex-row items-center justify-center py-1 px-2">
                <div className="self-stretch flex-1 relative leading-[20px] font-medium">
                  Settings
                </div>
              </div>
              <input
                className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                type="checkbox"
              />
              <div className="self-stretch rounded-md flex flex-row items-center justify-center py-1 px-[7px]">
                <div className="self-stretch relative leading-[20px] font-medium">
                  ...
                </div>
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src="/chevronright.svg"
              />
              <div className="self-stretch rounded-md hidden flex-row items-center justify-center py-1 px-2">
                <div className="self-stretch relative leading-[20px] font-medium whitespace-nowrap">
                  Another link
                </div>
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/chevronright.svg"
              />
              <div className="rounded-md bg-gray-50 flex flex-row items-center justify-center py-1 px-2 text-gray-700">
                <div className="relative leading-[20px] font-semibold">
                  Team
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-4 max-w-full text-base-white">
            <div className="flex-1 flex flex-col items-start justify-start gap-1 min-w-[666px] max-w-full text-11xl mq1000:min-w-full">
              <h1 className="m-0 self-stretch relative text-inherit leading-[38px] font-semibold font-[inherit] mq450:text-lg mq450:leading-[23px] mq1000:text-5xl mq1000:leading-[30px]">
                Welcome, Kunjan
              </h1>
              <div className="w-[445px] relative text-base leading-[24px] text-gray-600 hidden max-w-full">
                Manage your team members and their account permissions here.
              </div>
            </div>
            <div className="h-10 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-crimson-200 overflow-hidden hidden flex-row items-center justify-center py-2.5 px-4 box-border gap-2">
              <img
                className="h-2.5 w-2.5 relative overflow-hidden shrink-0"
                alt=""
                src="/-dot.svg"
              />
              <div className="self-stretch relative leading-[20px]">
                <span>
                  <span className="font-medium">Stopped:</span>
                  <span className="font-semibold text-crimson-100">{` `}</span>
                </span>
                <span className="font-semibold text-crimson-100">
                  <span>10</span>
                </span>
              </div>
              <img
                className="h-3 w-3 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/gginfo.svg"
              />
            </div>
            <div className="h-10 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-mediumspringgreen-200 overflow-hidden hidden flex-row items-center justify-center py-2.5 px-4 box-border gap-2">
              <img
                className="h-2.5 w-2.5 relative overflow-hidden shrink-0"
                alt=""
                src="/-dot-1.svg"
              />
              <div className="self-stretch relative leading-[20px]">
                <span>
                  <span className="font-medium">Running:</span>
                  <span className="font-semibold text-mediumspringgreen-100">{` `}</span>
                </span>
                <span className="font-semibold text-mediumspringgreen-100">
                  <span>10</span>
                </span>
              </div>
              <img
                className="h-3 w-3 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/gginfo.svg"
              />
            </div>
            <div className="shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-mediumspringgreen-200 overflow-hidden flex flex-row items-center justify-center py-2.5 px-4 gap-2">
              <img
                className="h-2.5 w-2.5 relative overflow-hidden shrink-0"
                alt=""
                src="/-dot-1.svg"
              />
              <a className="[text-decoration:none] relative leading-[20px] inline-block min-w-[98px] text-[inherit]">
                <span>
                  <span className="font-medium">Credits:</span>
                  <span className="font-semibold text-mediumspringgreen-100">{` `}</span>
                </span>
                <span className="font-semibold text-mediumspringgreen-100">
                  <span>5 USD</span>
                </span>
              </a>
              <img
                className="h-3 w-3 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/gginfo.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-start gap-3">
              <div className="self-stretch rounded-lg bg-primary-50 border-primary-50 border-[1px] border-solid overflow-hidden hidden flex-row items-center justify-center py-2.5 px-[15px] gap-2 text-primary-700">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                  alt=""
                  src="/placeholder.svg"
                />
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Secondary
                </div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                  alt=""
                  src="/placeholder.svg"
                />
              </div>
              <div className="shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-lightseagreen overflow-hidden hidden flex-row items-center justify-center py-2.5 px-4 gap-2 whitespace-nowrap">
                <img
                  className="h-2.5 w-2.5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/-dot-3.svg"
                />
                <div className="relative leading-[20px] whitespace-nowrap">
                  <span>
                    <span className="font-medium">Credits:</span>
                    <span className="font-semibold text-mediumspringgreen-100">{` `}</span>
                  </span>
                  <span className="font-semibold text-mediumspringgreen-100">
                    <span>0 USD</span>
                  </span>
                </div>
              </div>
              <Button iconTrailing iconLeading />
              <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-gray1-200 border-royalblue-200 border-[1px] border-solid overflow-hidden hidden flex-row items-center justify-center py-2.5 px-[15px] gap-2">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                  alt=""
                  src="/refreshccw02.svg"
                />
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Docs
                </div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                  alt=""
                  src="/placeholder2.svg"
                />
              </div>
            </div>
            <div className="h-11 w-80 hidden flex-col items-start justify-start gap-2 text-gray-700">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-1.5">
                <div className="w-[47px] relative leading-[20px] font-medium hidden">
                  Search
                </div>
                <div className="self-stretch flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-base-white border-gray-300 border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-2.5 px-[13px] text-base text-gray-500">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[7px]">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/searchlg.svg"
                    />
                    <div className="self-stretch relative leading-[24px]">
                      Search
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch relative leading-[20px] text-gray-600 hidden">
                This is a hint text to help user.
              </div>
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/divider.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default SectionHeader;
