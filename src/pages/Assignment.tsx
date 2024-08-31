import { FunctionComponent } from "react";
import SidebarNavigation from "../components/SidebarNavigation";
import SectionHeader from "../components/SectionHeader";
import InputLabelPairs from "../components/InputLabelPairs";
import Price from "../components/Price";
import AvatarAddButton from "../components/AvatarAddButton";

const Assignment: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-base-white overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq1000:pl-5 mq1000:pr-5 mq1000:box-border">
      <SidebarNavigation />
      <main className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border max-w-[calc(100%_-_160px)] mq1000:max-w-full">
        <SectionHeader />
        <section className="self-stretch h-[971px] bg-gray1-500 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[130px] px-[31px] pb-[58px] box-border gap-[134px] max-w-full text-left text-sm text-base-white font-text-sm-regular mq450:gap-[33px] mq450:pt-[55px] mq450:pb-[25px] mq450:box-border mq1000:gap-[67px] mq1000:pt-[84px] mq1000:pb-[38px] mq1000:box-border mq1050:h-auto">
          <div className="mt-[-136px] w-[1278px] flex flex-row items-start justify-start gap-12 shrink-0 max-w-full mq750:gap-6 mq1050:flex-wrap">
            <div className="w-[358px] flex flex-col items-start justify-start gap-[26.5px] min-w-[358px] max-w-full mq450:min-w-full mq1050:flex-1">
              <div className="flex flex-row items-start justify-start py-0 px-0.5">
                <div className="rounded-lg overflow-hidden flex flex-row items-start justify-start py-2.5 px-0 gap-[7px]">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                    loading="lazy"
                    alt="" 
                    src="/arrowleft.svg"
                  />
                  <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[34px]">{`Back `}</a>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                    alt=""
                    src="/placeholder1.svg"
                  />
                </div>
              </div>
              <div className="h-[82px] flex flex-row items-start justify-start py-0 pl-px pr-1 box-border max-w-full text-xs text-silver-100 mq450:h-auto">
                <div className="w-[353px] rounded-lg bg-darkorchid-500 border-darkorchid-100 border-[1px] border-solid box-border flex flex-row items-center justify-start py-3 pl-[19px] pr-0 gap-3.5 max-w-full shrink-0 mq450:flex-wrap mq450:pr-[19px] mq450:box-border">
                  <div className="h-[58px] w-[58px] rounded-[9999px] bg-darkslateblue border-darkorchid-100 border-[1px] border-solid box-border flex flex-row items-center justify-center py-[10.5px] px-[9px] gap-[9px] shrink-0">
                    <div className="overflow-hidden flex flex-col items-center justify-center p-px">
                      <img
                        className="w-9 h-[35px] relative"
                        loading="lazy"
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                    <div className="hidden flex-row items-center justify-start gap-[3px]">
                      <div className="h-[5px] w-[5px] relative rounded-[50%] bg-darkorchid-100" />
                      <div className="h-[5px] w-[5px] relative rounded-[50%] bg-darkorchid-200" />
                      <div className="h-[5px] w-[5px] relative rounded-[50%] bg-darkorchid-300" />
                      <div className="h-[5px] w-[5px] relative rounded-[50%] bg-darkorchid-400" />
                    </div>
                    <img
                      className="h-6 w-6 relative hidden"
                      alt=""
                      src="/svg.svg"
                    />
                  </div>
                  <div className="w-[279px] flex flex-row items-center justify-start gap-9 shrink-0 mq450:gap-[18px]">
                    <div className="flex-1 flex flex-col items-start justify-center gap-1">
                      <div className="self-stretch relative">
                        Git repository
                      </div>
                      <div className="relative text-base tracking-[-0.03px] text-base-white inline-block min-w-[116px]">
                        expressjs-cn8x
                      </div>
                    </div>
                    <div className="w-[103px] flex flex-col items-start justify-center gap-1">
                      <a className="[text-decoration:none] self-stretch relative text-[inherit]">
                        Deploying
                      </a>
                      <div className="w-[71px] flex flex-row items-center justify-start gap-[3px] text-base text-base-white">
                        <img
                          className="h-[13px] w-[13px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/frame.svg"
                        />
                        <a className="[text-decoration:none] flex-1 relative font-medium text-[inherit]">
                          Other
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3.5 max-w-full text-3xl text-ghostwhite-100">
                <div className="self-stretch h-[70px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full">
                  <h3 className="m-0 self-stretch relative text-inherit leading-[26.4px] font-medium font-[inherit] mq450:text-lg mq450:leading-[21px]">
                    You're almost done.
                  </h3>
                  <div className="w-[338px] h-[49px] relative text-sm text-ghostwhite-300 flex items-center shrink-0 max-w-full">
                    Please follow the steps to configure your Project and deploy
                    it.
                  </div>
                </div>
                <div className="self-stretch h-0 relative" />
                <div className="w-[274px] flex flex-col items-start justify-center gap-[5px] text-gray1-700">
                  <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 pr-[22px] gap-[13px] text-lg">
                    <div className="h-[46px] w-[46px] rounded-181xl border-mediumseagreen border-[1px] border-solid box-border flex flex-row items-center justify-center py-[3px] px-0.5">
                      <div className="h-10 w-10 rounded-181xl [background:linear-gradient(166.13deg,_rgba(99,_193,_116,_0.1),_rgba(99,_193,_116,_0))] flex flex-col items-center justify-center p-2 box-border">
                        <img
                          className="w-6 h-6 relative overflow-hidden shrink-0"
                          alt=""
                          src="/frame-1.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-center">
                      <div className="self-stretch relative tracking-[-0.5px] font-medium">
                        Configure GitHub
                      </div>
                    </div>
                  </div>
                  <div className="rounded-181xl flex flex-row items-center justify-center py-1 px-[21px]">
                    <div className="flex flex-col items-center justify-center gap-0.5">
                      <div className="w-1 h-[3px] relative rounded-[50%] bg-royalblue-100" />
                      <div className="w-1 h-[3px] relative rounded-[50%] bg-royalblue-300" />
                      <div className="w-1 h-[3px] relative rounded-[50%] bg-royalblue-400" />
                      <div className="w-1 h-[3px] relative rounded-[50%] bg-royalblue-500" />
                      <div className="w-1 h-[3px] relative rounded-[50%] bg-royalblue-600" />
                      <div className="w-1 h-[3px] relative rounded-[50%] bg-royalblue-700" />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[13px] text-base-white">
                    <div className="w-[46px] rounded-181xl border-royalblue-100 border-[1px] border-solid box-border flex flex-row items-center justify-center py-px px-0.5">
                      <div className="h-10 w-10 rounded-181xl [background:linear-gradient(166.13deg,_rgba(255,_255,_255,_0.1),_rgba(153,_153,_153,_0))] flex flex-col items-center justify-center py-2 px-[13px] box-border">
                        <div className="relative tracking-[-0.36px] leading-[24px] font-medium inline-block min-w-[14px] mq450:text-lg mq450:leading-[19px]">
                          2
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-1 text-lg text-ghostwhite-100">
                      <div className="relative tracking-[-0.5px] font-medium">
                        Configure Deployment
                      </div>
                      <div className="relative text-xs tracking-[-0.5px] text-gray1-800">
                        Specify how Exopods will build your site. 
                      </div>
                    </div>
                  </div>
                  <div className="rounded-181xl flex flex-row items-center justify-center py-1 px-[21px]">
                    <div className="flex flex-col items-center justify-center gap-0.5">
                      <div className="w-1 h-[3px] relative rounded-[50%] bg-royalblue-100" />
                      <div className="w-1 h-[3px] relative rounded-[50%] bg-royalblue-300" />
                      <div className="w-1 h-[3px] relative rounded-[50%] bg-royalblue-400" />
                      <div className="w-1 h-[3px] relative rounded-[50%] bg-royalblue-500" />
                      <div className="w-1 h-[3px] relative rounded-[50%] bg-royalblue-600" />
                      <div className="w-1 h-[3px] relative rounded-[50%] bg-royalblue-700" />
                    </div>
                  </div>
                  <div className="w-[261px] flex flex-row items-center justify-start gap-[13px] text-gray1-900">
                    <div className="rounded-181xl flex flex-row items-center justify-center p-[3px]">
                      <div className="h-10 w-10 rounded-181xl [background:linear-gradient(166.13deg,_rgba(255,_255,_255,_0.1),_rgba(153,_153,_153,_0))] flex flex-col items-center justify-center py-2 px-3 box-border">
                        <div className="relative tracking-[-0.36px] leading-[24px] font-medium inline-block min-w-[15px] mq450:text-lg mq450:leading-[19px]">
                          3
                        </div>
                      </div>                                    
                    </div>
                    <div className="flex-1 relative text-lg tracking-[-0.5px] font-medium text-ghostwhite-200">
                      Go Live
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[62px] px-0 pb-0 box-border min-w-[567px] max-w-full text-silver-100 mq450:pt-[26px] mq450:box-border mq750:min-w-full mq1000:pt-10 mq1000:box-border">
              <div className="self-stretch rounded-[9px] bg-gray1-500 border-silver-300 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[30px] pl-[31px] pr-[30px] gap-[17.8px] max-w-full mq1000:pt-5 mq1000:pb-5 mq1000:box-border">
                <div className="w-[428px] flex flex-col items-start justify-start max-w-full text-5xl text-whitesmoke-100 font-geist">
                  <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.47px] leading-[36px] font-semibold font-[inherit] mq450:text-[19px] mq450:leading-[29px]">
                    Configure Deployment (optional)
                  </h2>
                  <div className="self-stretch h-[27px] relative text-sm font-text-sm-regular text-ghostwhite-300 flex items-center shrink-0">
                    Please follow the steps to configure your Project and deploy
                    it.
                  </div>
                </div>
                <InputLabelPairs
                  labelProjectName="Port"
                  inputValuesPlaceholder="8088"
                />
                <InputLabelPairs
                  propHeight="unset"
                  labelProjectName="Command"
                  propWidth="132px"
                  propFlex="unset"
                  inputValuesPlaceholder="My-deployment"
                />
                <InputLabelPairs
                  propHeight="unset"
                  labelProjectName="Arguments "
                  propWidth="132px"
                  propFlex="unset"
                  inputValuesPlaceholder="My-deployment"
                />
                <InputLabelPairs
                  propHeight="147.2px"
                  labelProjectName="Environment Variables "
                  propWidth="160px"
                  propFlex="1"
                  inputValuesPlaceholder="ENV_NAME=ENV_VALUE"
                />
                <div className="self-stretch h-[77px] relative hidden">
                  <div className="absolute top-[0px] left-[0px] leading-[24px] flex items-center w-[98px] h-6">
                    Select Branch
                  </div>
                  <div className="absolute w-full top-[calc(50%_-_12.5px)] right-[-1px] left-[0px] rounded-md bg-gray1-400 border-silver-200 border-[1px] border-solid box-border h-[49px] overflow-x-auto flex flex-row items-center justify-start py-4 px-3 gap-2.5 text-whitesmoke-100 font-geist">
                    <img
                      className="h-[11.4px] w-[11.4px] relative shrink-0"
                      alt=""
                      src="/vector-1.svg"
                    />
                    <div className="h-5 w-[707px] relative overflow-hidden shrink-0">
                      <div className="absolute top-[-0.4px] left-[0px] leading-[20px] flex items-center w-[36.9px]">
                        Other
                      </div>
                    </div>
                    <img
                      className="h-[18px] w-[18px] relative shrink-0"
                      alt=""
                      src="/svg1.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch h-[175.6px] relative rounded-md bg-gray1-500 border-silver-200 border-[1px] border-solid box-border hidden">
                  <div className="absolute w-[calc(100%_-_1.6px)] top-[0.8px] right-[0.8px] left-[0.8px] h-12">
                    <div className="absolute top-[12.2px] left-[12.2px] leading-[24px] flex items-center w-[177px] h-6">
                      Environment Variables
                    </div>
                  </div>
                  <div className="absolute w-[calc(100%_-_25.6px)] top-[60.8px] right-[12.8px] left-[12.8px] h-[106px] text-smi text-darkgray">
                    <div className="absolute w-full top-[0.2px] right-[0.2px] left-[0.2px] h-[82px]">
                      <div className="absolute h-[calc(100%_+_8px)] w-[calc(100%_-_104px)] top-[0.2px] right-[103.8px] bottom-[-8.2px] left-[0.2px]">
                        <div className="absolute w-[calc(100%_-_335px)] top-[0px] right-[335px] left-[0px] h-[81px]">
                          <div className="absolute top-[-0.2px] left-[-0.2px] leading-[24px] capitalize flex items-center w-[27px] h-6">
                            Key
                          </div>
                          <div className="absolute w-full top-[32px] right-[-0.2px] left-[0px] rounded-8xs bg-gray1-400 border-silver-300 border-[1px] border-solid box-border h-[49px] overflow-hidden text-sm text-base-white">
                            <div className="absolute w-[calc(100%_-_11.6px)] top-[calc(50%_-_13.5px)] right-[0.8px] left-[10.8px] h-[26px] overflow-hidden">
                              <div className="absolute w-full top-[4px] right-[0px] left-[0px] h-[17.6px] overflow-hidden">
                                <div className="absolute top-[0.8px] left-[0px] flex items-center w-[114px] h-[17px]">
                                  EXAMPLE_NAME
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute w-[calc(100%_-_356px)] top-[0px] right-[0px] left-[356px] h-[81px]">
                          <div className="absolute top-[-0.2px] left-[0.2px] leading-[24px] capitalize flex items-center w-[152.3px] h-6">{`Value `}</div>
                          <div className="absolute w-[calc(100%_+_0.2px)] top-[calc(50%_-_8.7px)] right-[0px] left-[-0.2px] rounded-8xs bg-gray1-400 border-silver-200 border-[1px] border-solid box-border h-[49px] text-sm text-base-white">
                            <div className="absolute w-[calc(100%_-_1.6px)] top-[calc(50%_-_18.7px)] right-[0.8px] left-[0.8px] h-[38.4px] overflow-auto">
                              <div className="absolute top-[6.8px] left-[9.8px] leading-[23.8px] flex items-center w-36 h-6">
                                I9JU23NF394R6HH
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[755.9px] flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[5px] max-w-full">
                  <div className="w-40 relative leading-[24px] flex items-center">
                    Pricing Configuration
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start max-w-full text-lightsalmon">
                    <div className="flex-1 flex flex-row items-start justify-start gap-2.5 max-w-full mq750:flex-wrap">
                      <div className="flex-1 rounded-md border-royalblue-100 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[15px] px-4 pb-4 gap-[3.5px] min-w-[184px]">
                        <div className="w-[49px] rounded-md bg-gray1-300 border-darkred border-[1px] border-solid box-border flex flex-row items-start justify-start py-px px-[7px] text-xs">
                          <a className="[text-decoration:none] relative leading-[18px] font-medium text-[inherit] inline-block min-w-[33px]">
                            Micro
                          </a>
                        </div>
                        <div className="flex flex-col items-start justify-start text-darkgray">
                          <div className="w-[61.7px] relative leading-[21px] flex items-center">
                            1 vCPU
                          </div>
                          <div className="relative leading-[21px] inline-block min-w-[65.2px]">
                            1 GB RAM
                          </div>
                        </div>
                        <div className="w-[168px] relative leading-[21px] flex items-center text-forestgreen">
                          <span className="w-full">
                            <span className="font-semibold">{`$0.027777 `}</span>
                            <span className="text-gray1-100">/ hours</span>
                          </span>
                        </div>
                      </div>
                      <Price small="Small" vCPU="2 vCPU" gBRAM="2 GB RAM" />
                      <Price
                        propBackgroundColor="rgba(26, 115, 232, 0.15)"
                        propBorder="1px solid #1a73e8"
                        small="Large"
                        propColor="#1a73e8"
                        vCPU="4 vCPU"
                        propWidth="unset"
                        gBRAM="4 GB RAM"
                        propFlex="unset"
                        propDisplay="inline-block"
                        propMinWidth="75px"
                      />
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] pt-0 px-0 pb-0 bg-[transparent] self-stretch h-[49px] rounded-t-none rounded-b-8xs [background:linear-gradient(90deg,_rgba(26,_115,_232,_0.05),_rgba(240,_40,_73,_0.05)_54%,_rgba(133,_59,_206,_0.05)_98.5%)] flex flex-row items-start justify-start box-border max-w-full">
                  <div className="flex-1 rounded-md border-royalblue-100 border-[1px] border-solid box-border flex flex-row items-start justify-center py-[13px] pl-[21px] pr-5 max-w-full">
                    <div className="w-[91px] relative text-base leading-[20px] font-medium font-text-sm-regular text-base-white text-center flex items-center justify-center shrink-0">
                      Deploy
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <AvatarAddButton />
        </section>
      </main>
    </div>
  );
};

export default Assignment;
