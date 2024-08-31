import { FunctionComponent, ChangeEvent } from "react";

interface InputLabelPairsProps {
  labelProjectName: string;
  inputValuesPlaceholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  propHeight?: string;
  propWidth?: string;
  propFlex?: string;
}

const InputLabelPairs: FunctionComponent<InputLabelPairsProps> = ({
  labelProjectName,
  inputValuesPlaceholder,
  value,
  onChange,
  propHeight,
  propWidth,
  propFlex,
}) => {
  return (
    <div
      className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[10.2px] gap-[3.4px] text-left text-sm text-silver-100 font-text-sm-regular"
      style={{ height: propHeight, width: propWidth, flex: propFlex }}
    >
      <div className="w-[132px] relative leading-[24px] flex items-center shrink-0">
        {labelProjectName}
      </div>
      <div
        className="self-stretch rounded-md bg-gray1-400 border-silver-200 border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start py-[15px] px-3 shrink-0"
      >
        <input
          className="w-[185px] [border:none] [outline:none] font-geist text-sm bg-[transparent] h-4 relative text-base-white text-left flex items-center p-0"
          placeholder={inputValuesPlaceholder}
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputLabelPairs;
