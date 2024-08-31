import { FunctionComponent, useState } from "react";
import SidebarNavigation from "../components/SidebarNavigation";
import SectionHeader from "../components/SectionHeader";
import InputLabelPairs from "../components/InputLabelPairs";
import Price from "../components/Price";
import AvatarAddButton from "../components/AvatarAddButton";

const Assignment: FunctionComponent = () => {
  const [port, setPort] = useState<string>("");
  const [command, setCommand] = useState<string>("");
  const [argumentsValue, setArgumentsValue] = useState<string>("");
  const [envVariables, setEnvVariables] = useState<string>("");
  const [selectedPriceId, setSelectedPriceId] = useState<number | null>(null);

  const handleDeploy = () => {
    console.log("Port:", port);
    console.log("Command:", command);
    console.log("Arguments:", argumentsValue);
    console.log("Environment Variables:", envVariables);
    console.log("Selected Price ID:", selectedPriceId);

    if (!port || !command || !argumentsValue || !envVariables || selectedPriceId === null) {
      alert("Please ensure all fields are filled and a pricing plan is selected.");
      return;
    }

    alert("Successfully deployed.");
  };

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
                  value={port}
                  onChange={(e) => setPort(e.target.value)}
                />
                <InputLabelPairs
                  propHeight="unset"
                  labelProjectName="Command"
                  propWidth="132px"
                  propFlex="unset"
                  inputValuesPlaceholder="npm start"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                />
                <InputLabelPairs
                  propHeight="unset"
                  labelProjectName="Arguments"
                  propWidth="132px"
                  propFlex="unset"
                  inputValuesPlaceholder="--production"
                  value={argumentsValue}
                  onChange={(e) => setArgumentsValue(e.target.value)}
                />
                <InputLabelPairs
                  propHeight="147.2px"
                  labelProjectName="Environment Variables"
                  propWidth="160px"
                  propFlex="1"
                  inputValuesPlaceholder="NODE_ENV=production"
                  value={envVariables}
                  onChange={(e) => setEnvVariables(e.target.value)}
                />
                <div className="w-[755.9px] flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[5px] max-w-full">
                  <div className="w-40 relative leading-[24px] flex items-center">
                    Pricing Configuration
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start max-w-full text-lightsalmon">
                    <div className="flex-1 flex flex-row items-start justify-start gap-2.5 max-w-full mq750:flex-wrap">
                      <Price
                        small="Micro"
                        vCPU="1 vCPU"
                        gBRAM="1 GB RAM"
                        selected={selectedPriceId === 1}
                        onClick={() => setSelectedPriceId(1)}
                      />
                      <Price
                        small="Small"
                        vCPU="2 vCPU"
                        gBRAM="2 GB RAM"
                        selected={selectedPriceId === 2}
                        onClick={() => setSelectedPriceId(2)}
                      />
                      <Price
                        small="Large"
                        vCPU="4 vCPU"
                        gBRAM="4 GB RAM"
                        selected={selectedPriceId === 3}
                        onClick={() => setSelectedPriceId(3)}
                      />
                    </div>
                  </div>
                </div>
                <button
                  className="cursor-pointer [border:none] pt-0 px-0 pb-0 bg-[transparent] self-stretch h-[49px] rounded-t-none rounded-b-8xs [background:linear-gradient(90deg,_rgba(26,_115,_232,_0.05),_rgba(240,_40,_73,_0.05)_54%,_rgba(133,_59,_206,_0.05)_98.5%)] flex flex-row items-start justify-start box-border max-w-full"
                  onClick={handleDeploy}
                >
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
