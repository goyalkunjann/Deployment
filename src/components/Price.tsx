import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type PriceType = {
  className?: string;
  small?: string;
  vCPU?: string;
  gBRAM?: string;
  selected?: boolean;
  onClick?: () => void;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
  propColor?: CSSProperties["color"];
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Price: FunctionComponent<PriceType> = ({
  className = "",
  propBackgroundColor,
  propBorder,
  small,
  propColor,
  vCPU,
  propWidth,
  gBRAM,
  propFlex,
  propDisplay,
  propMinWidth,
  selected = false,
  onClick,
}) => {
  const frameStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: selected ? "#D1E7FF" : propBackgroundColor,
      border: selected ? "2px solid #1a73e8" : propBorder,
    };
  }, [propBackgroundColor, propBorder, selected]);

  const smallStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const gBRAMStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propFlex, propDisplay, propMinWidth]);

  return (
    <div
      className={`flex-1 rounded-md border-silver-200 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[15px] px-4 pb-4 gap-[0.1px] min-w-[184px] text-left text-sm text-darkgray font-text-sm-regular ${className}`}
      onClick={onClick}
    >
      <div className="w-12 flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border text-xs text-darkorchid-100">
        <div
          className="flex-1 rounded-md bg-darkorchid-600 border-darkorchid-100 border-[1px] border-solid flex flex-row items-start justify-start py-px px-[7px]"
          style={frameStyle}
        >
          <div
            className="relative leading-[18px] font-medium inline-block min-w-[32px]"
            style={smallStyle}
          >
            {small}
          </div>
        </div>
      </div>
      <div className="w-[61.7px] relative leading-[21px] flex items-center">
        {vCPU}
      </div>
      <div
        className="w-[77px] flex flex-row items-start justify-start pt-0 px-0 pb-[3.9px] box-border"
        style={frameDivStyle}
      >
        <div className="flex-1 relative leading-[21px]" style={gBRAMStyle}>
          {gBRAM}
        </div>
      </div>
      <div className="w-[168px] relative leading-[21px] flex items-center text-forestgreen">
        <span className="w-full">
          <span className="font-semibold">{`$0.027777 `}</span>
          <span className="text-gray1-100">/ hours</span>
        </span>
      </div>
    </div>
  );
};

export default Price;
