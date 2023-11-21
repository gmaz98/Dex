'use client';
import {
  SettingOutlined,
  DownOutlined,
  ArrowDownOutlined
} from '@ant-design/icons';
import { Popover, Radio, RadioChangeEvent, Input, Modal } from 'antd';
import { useState } from 'react';
import tokenList from 'src/app/tokenList.json';

type Token = {
  ticker: string;
  img: string;
  name: string;
  address: string;
  decimals: number;
};

const Swap = () => {
  const [slippage, setSlippage] = useState(2.5);
  const [tokenOneAmount, setTokenOneAmount] = useState('');
  const [tokenTwoAmount, setTokenTwoAmount] = useState('');
  const [tokenOne, setTokenOne] = useState(tokenList[0]);
  const [tokenTwo, setTokenTwo] = useState(tokenList[1]);
  const [isOpen, setIsOpen] = useState(false);
  const [changeToken, setChangeToken] = useState(1);

  function handleSlippageChange(e: RadioChangeEvent) {
    setSlippage(e.target.value);
  }

  function changeAmount(e: React.ChangeEvent<HTMLInputElement>) {
    setTokenOneAmount(e.target.value);
  }

  function switchTokens() {
    setTokenOne(tokenTwo);
    setTokenTwo(tokenOne);
  }

  function openModal(asset: 1 | 2) {
    setChangeToken(asset);
    setIsOpen(true);
  }

  function modifyToken(i: number) {
    if (changeToken === 1) {
      setTokenOne(tokenList[i]);
    } else {
      setTokenTwo(tokenList[i]);
    }
    setIsOpen(false);
  }

  const settings = (
    <>
      <div>Slippage tolerance</div>
      <div>
        <Radio.Group value={slippage} onChange={handleSlippageChange}>
          <Radio.Button value={0.5}>0.5%</Radio.Button>
          <Radio.Button value={2.5}>2.5%</Radio.Button>
          <Radio.Button value={5}>5%</Radio.Button>
        </Radio.Group>
      </div>
    </>
  );

  return (
    <>
      <Modal
        open={isOpen}
        footer={null}
        onCancel={() => setIsOpen(false)}
        title="Select a token"
      >
        <div className="flex-col ">
          {tokenList?.map((e: Token, i: number) => {
            return (
              <div
                className="flex mt-4 hover:cursor-pointer hover:bg-indigo-700 transition "
                key={i}
                onClick={() => modifyToken(i)}
              >
                <img className="w-8 h-8 mt-3" src={e.img} alt={e.ticker} />
                <div className="flex-col ml-3 mb-6 h-8 items-center ">
                  <div className=" font-bold text-lg">{e.name}</div>
                  <div className="">{e.ticker}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Modal>
      <div className="mt-3 h-96 w-1/2 font-bold bg-zinc-300 border-2 border-solid border-zinc-300/75 rounded-xl p-8 flex flex-col relative">
        <div className="flex justify-between mb-4">
          <h4>Swap</h4>
          <Popover
            placement="bottomRight"
            title="Settings"
            trigger="click"
            content={settings}
          >
            <SettingOutlined className="transition duration-300 ease-in-out hover:cursor-pointer hover:text-indigo-300" />
          </Popover>
        </div>
        <div className="flex-col h-full">
          <div className="relative">
            <Input
              className="h-28 mb-3 text-2xl font-bold bg-zinc-800 rounded-xl pr-10"
              placeholder="0"
              value={tokenOneAmount}
              onChange={changeAmount}
            />
            <div className="absolute h-10 transform -translate-y-1/2 left-1/2 -translate-x-1/2 z-10">
              <div
                className="bg-zinc-500  border-solid border-[3px] border-zinc-300 rounded-md p-1 flex items-center justify-center cursor-pointer"
                onClick={switchTokens}
              >
                <ArrowDownOutlined className="text-white" />
              </div>
            </div>
            <div
              onClick={() => openModal(1)}
              className="absolute top-1/2 transform -translate-y-1/2 right-0 flex items-center text-xl pr-3 gap-2 bg-zinc-700 mr-3 rounded-2xl"
            >
              <img
                className="w-8 h-8"
                src={tokenOne.img}
                alt="assetOneLogo"
              ></img>
              {tokenOne.ticker}
              <DownOutlined></DownOutlined>
            </div>
          </div>
        </div>
        <div className="relative">
          <Input
            className=" h-28 mb-3 text-2xl font-bold bg-zinc-800 rounded-xl pr-10"
            placeholder="0"
            value={tokenTwoAmount}
          />
          <div
            onClick={() => openModal(2)}
            className="absolute top-1/2 transform -translate-y-1/2 right-0 flex items-center text-xl pr-3 gap-2 bg-zinc-700 mr-3 rounded-2xl"
          >
            <img
              className="w-8 h-8"
              src={tokenTwo.img}
              alt="assetTwoLogo"
            ></img>
            {tokenTwo.ticker}
            <DownOutlined></DownOutlined>
          </div>
        </div>
        <div
          className={`bg-zinc-800 rounded-xl mt-2 h-28 flex mb-5 items-center justify-center ${
            tokenOneAmount && 'hover:bg-indigo-500'
          }`}
        >
          <button
            className={`h-10 ${tokenOneAmount && 'cursor-not-allowed'}`}
            disabled={!tokenOneAmount}
          >
            Swap
          </button>
        </div>
      </div>
    </>
  );
};

export default Swap;
