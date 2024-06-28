import {
  ArrowRight,
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardDoubleArrowRight,
  AddCircleOutline,
  ContentCopy
} from "@mui/icons-material";
import React, { useState, useRef } from "react";
import Stepper from "./Stepper";



const Table = () => {
  const [keyDown, setKeyDown] = useState<boolean>(false);
  // const user = dammyUsers[0];
  // const currentStep = user?.steps?.find((step) => step.current === true);

  // const copyTextToClipboard = (text: string) => {
  //   navigator.clipboard.writeText(text)
  //   .then(function() {
  //     console.log('Async: Copying to clipboard was successful!');
  //   }, function(err) {
  //     console.error('Async: Could not copy text: ', err);
  //   });
  // }
  
  
  
  return (
    <table className="w-full  h-auto shadow-xl border-2">
      <thead className="rounded-2xl bg-sky-400 text-white h-12">
        <tr className=" rounded-2xl ">
          <th></th>
          <th className="w-64 border-r">企業名</th>
          <th className="border-r">業種</th>
          <th className="border-r">職種</th>
          <th className="border-r">開催地</th>
          <th className="border-r">開催日時</th>
          <th className="border-r">イベント</th>
          <th className="border-r">エントリー状況</th>
        </tr>
      </thead>

      <tbody className="">
        <tr className="text-gray-700 h-20 border-b-2">
          <th className="w-16 border-r">
            <button onClick={() => setKeyDown(!keyDown)}>
              {keyDown ? (
                <KeyboardArrowDown></KeyboardArrowDown>
              ) : (
                <KeyboardArrowRight></KeyboardArrowRight>
              )}
            </button>
          </th>
          <th className="border-r">株式k会社freee</th>
          <th className="border-r">
            <select name="" id="" className="w-10/12 bg-gray-100">
              <option value="">IT・情報通信</option>
              <option value="">IT・情報通信</option>
              <option value="">IT・情報通信</option>
            </select>
          </th>
          <th className="border-r">
            <select name="" id="" className="w-10/12 bg-gray-100">
              <option value="">エンジニア</option>
              <option value="">エンジニア</option>
              <option value="">エンジニア</option>
            </select>
          </th>
          <th className="border-r">東京</th>
          <th className="border-r">
            <div>
              <input
                type="date"
                name=""
                id=""
                className="bg-gray-200 text-gray-800"
              />
              <input type="time" className="bg-gray-200 text-gray-800" />
            </div>
            〜
            <div>
              <input
                type="date"
                name=""
                id=""
                className="bg-gray-200 text-gray-800"
              />
              <input type="time" className="bg-gray-200 text-gray-800" />
            </div>
          </th>
          <th className="border-r">
            <select name="" id="" className="w-10/12 bg-gray-100">
              <option value="">説明会</option>
            </select>
          </th>
          <th>選考中</th>
        </tr>

        {keyDown ? (
          <tr className="h-96">
            <th className="text-gray-700 relative">
              <div className="absolute top-0 w-screen h-96 py-1 flex-col">
                {/* マイページ */}
                <div className="w-11/12  ronded-md m-2 mb-5">
                  <h2 className="text-white bg-sky-300 rounded-md py-1 w-56">
                    マイページ
                  </h2>
                  <ul className="flex gap-24 text-left list-disc py-2 bg-white pl-8 items-center rounded-md shadow-md mt-1">
                    <li>
                      URL：
                      <a
                        href="https://mui.com/material-ui/react-stepper/"
                        className="text-blue-400 hover:text-purple-400"
                        target="blanck"
                      >
                        https://mui.com/material-ui/react-stepper/
                      </a>
                    </li>
                    <li>
                      ログインID：<span>aaaaa</span>
                    </li>
                    <li>
                      パスワード：<span>123456</span>
                    </li>
                  </ul>
                </div>

                {/* 選考フロー */}
                <Stepper />
              </div>
            </th>
          </tr>
        ) : (
          <></>
        )}
      </tbody>
    </table>
  );
};

export default Table;
