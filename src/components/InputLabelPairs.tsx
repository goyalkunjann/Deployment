import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type InputLabelPairsType = {
  className?: string;
  labelProjectName?: string;
  inputValuesPlaceholder?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
};

const InputLabelPairs: FunctionComponent<InputLabelPairsType> = ({
  className = "",
  propHeight,
  labelProjectName,
  propWidth,
  propFlex,
  inputValuesPlaceholder,
}) => {
  const inputLabelPairsStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const labelProjectStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const inputStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[10.2px] gap-[3.4px] text-left text-sm text-silver-100 font-text-sm-regular ${className}`}
      style={inputLabelPairsStyle}
    >
      <div
        className="w-[132px] relative leading-[24px] flex items-center shrink-0"
        style={labelProjectStyle}
      >
        {labelProjectName}
      </div>
      <div
        className="self-stretch rounded-md bg-gray1-400 border-silver-200 border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start py-[15px] px-3 shrink-0"
        style={inputStyle}
      >
        <input
          className="w-[185px] [border:none] [outline:none] font-geist text-sm bg-[transparent] h-4 relative text-base-white text-left flex items-center p-0"
          placeholder={inputValuesPlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default InputLabelPairs;
