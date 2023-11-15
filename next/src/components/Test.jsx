import * as React from 'react'

export default function Test(props) {
  return (
    <div className="bg-white flex flex-col items-center">
      <div className="justify-between items-stretch bg-white self-stretch flex w-full gap-5 pl-7 pr-11 py-6 max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7c68cef-809e-447e-b765-f98f039849cf?apiKey=70d61d68dd3145c4942b1ff60da53db0&"
          className="aspect-[2.43] object-contain object-center w-[146px] overflow-hidden shrink-0 max-w-full"
        />
        <div className="items-start self-center flex justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="text-indigo-500 text-center text-base self-center my-auto">
            Flights
          </div>
          <div className="text-slate-400 text-center text-base self-center my-auto">
            Hotels
          </div>
          <div className="text-slate-400 text-center text-base self-center my-auto">
            Packages
          </div>
          <div className="text-slate-400 text-center text-base self-center my-auto">
            Sign in
          </div>
          <div className="text-neutral-50 text-base whitespace-nowrap items-center bg-indigo-500 self-stretch grow px-5 py-4 rounded">
            Sign up
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1390px] mt-16 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[65%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-indigo-500 text-3xl font-bold self-stretch whitespace-nowrap -mr-5 max-md:max-w-full">
                Passenger information
              </div>
              <div className="text-slate-400 text-xl self-stretch -mr-5 mt-7 max-md:max-w-full">
                Enter the required information for each traveler and be sure
                that it exactly matches the government-issued ID presented at
                the airport.
              </div>
              <div className="text-slate-500 text-xl font-semibold self-stretch whitespace-nowrap -mr-5 mt-12 max-md:max-w-full max-md:mt-10">
                Passenger 1 (Adult)
              </div>
              <div className="self-stretch flex items-stretch justify-between gap-5 -mr-5 mt-8 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <div className="justify-center text-black text-lg items-stretch border-[color:var(--grey-300,#A1B0CC)] bg-white grow px-3.5 py-2.5 rounded border-[1.11px] border-solid">
                  Sophia
                </div>
                <div className="justify-center text-slate-400 text-lg items-stretch border-[color:var(--grey-300,#A1B0CC)] bg-white grow px-3.5 py-2.5 rounded border-[1.11px] border-solid">
                  Middle
                </div>
                <div className="justify-center text-gray-700 text-lg items-stretch border-[color:var(--grey-300,#A1B0CC)] bg-white grow px-3.5 py-2.5 rounded border-[1.11px] border-solid max-md:pr-px">
                  Knowles
                </div>
              </div>
              <div className="flex w-[528px] max-w-full justify-between gap-5 mt-7 self-start max-md:flex-wrap">
                <div className="justify-center text-slate-400 text-lg items-stretch border-[color:var(--grey-300,#A1B0CC)] bg-white grow px-3.5 py-2.5 rounded border-[1.11px] border-solid">
                  Suffix
                </div>
                <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                  <div className="justify-center text-gray-700 text-lg max-w-[253px] items-stretch border-[color:var(--grey-300,#A1B0CC)] bg-white px-3.5 py-2.5 rounded border-[1.11px] border-solid max-md:pr-px">
                    11/11/1989
                  </div>
                  <div className="text-slate-400 text-xs whitespace-nowrap mt-2">
                    MM/DD/YY
                  </div>
                </div>
              </div>
              <div className="self-stretch flex items-stretch justify-between gap-5 -mr-5 mt-7 pr-16 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <div className="justify-center text-gray-700 text-lg items-stretch border-[color:var(--grey-300,#A1B0CC)] bg-white grow px-3.5 py-2.5 rounded border-[1.11px] border-solid">
                  sophiaknowles89@tripma.com
                </div>
                <div className="justify-center text-gray-700 text-lg items-stretch border-[color:var(--grey-300,#A1B0CC)] bg-white grow px-3.5 py-2.5 rounded border-[1.11px] border-solid">
                  123-456-7890
                </div>
              </div>
              <div className="self-stretch flex items-stretch justify-between gap-5 -mr-5 mt-7 pr-16 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <div className="justify-center text-slate-400 text-lg items-stretch border-[color:var(--grey-300,#A1B0CC)] bg-white grow px-3.5 py-2.5 rounded border-[1.11px] border-solid">
                  Redress number
                </div>
                <div className="justify-center text-gray-700 text-lg items-stretch border-[color:var(--grey-300,#A1B0CC)] bg-white grow px-3.5 py-2.5 rounded border-[1.11px] border-solid">
                  123456789
                </div>
              </div>
              <div className="text-slate-500 text-xl font-semibold self-stretch whitespace-nowrap -mr-5 mt-16 max-md:max-w-full max-md:mt-10">
                Emergency contact information
              </div>
              <div className="items-center flex w-[197px] max-w-full gap-2.5 mt-9 self-start">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1ea0358-6d30-4674-8a60-2cc0f0c40d9f?apiKey=70d61d68dd3145c4942b1ff60da53db0&"
                  className="aspect-square object-contain object-center w-[17px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto"
                />
                <div className="text-slate-500 text-base self-stretch whitespace-nowrap">
                  Same as Passenger 1
                </div>
              </div>
              <div className="self-stretch flex items-stretch justify-between gap-5 -mr-5 mt-8 pr-16 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <div className="justify-center text-gray-700 text-lg items-stretch border-[color:var(--grey-300,#A1B0CC)] bg-white grow px-3.5 py-2.5 rounded border-[1.11px] border-solid">
                  Sophia
                </div>
                <div className="justify-center text-gray-700 text-lg items-stretch border-[color:var(--grey-300,#A1B0CC)] bg-white grow px-3.5 py-2.5 rounded border-[1.11px] border-solid">
                  Knowles
                </div>
              </div>
              <div className="self-stretch flex items-stretch justify-between gap-5 -mr-5 mt-7 pr-16 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <div className="justify-center text-gray-700 text-xl underline items-stretch border-[color:var(--grey-300,#A1B0CC)] bg-white grow px-3.5 py-2.5 rounded border-[1.11px] border-solid">
                  <a href="mailto:sophiaknowles89@tripma.com" target="_blank">
                    Email address*
                  </a>
                </div>
                <div className="justify-center text-gray-700 text-lg items-stretch border-[color:var(--grey-300,#A1B0CC)] bg-white grow px-3.5 py-2.5 rounded border-[1.11px] border-solid">
                  123-456-7890
                </div>
              </div>
              <div className="text-slate-500 text-xl font-semibold self-stretch whitespace-nowrap -mr-5 mt-14 max-md:max-w-full max-md:mt-10">
                Bag information
              </div>
              <div className="text-indigo-500 text-xl self-stretch -mr-5 mt-6 max-md:max-w-full">
                <span className="text-slate-400">
                  Each passenger is allowed one free carry-on bag and one
                  personal item. First checked bag for each passenger is also
                  free. Second bag check fees are waived for loyalty program
                  members. See the
                </span>
                <span className="text-indigo-500"> full bag policy</span>
                <span className="text-slate-400">.</span>
              </div>
              <div className="flex w-[515px] max-w-full justify-between gap-5 mt-12 self-start max-md:flex-wrap max-md:mt-10">
                <div className="flex grow basis-[0%] flex-col items-stretch">
                  <div className="text-slate-400 text-xl font-semibold whitespace-nowrap">
                    Passenger 1
                  </div>
                  <div className="text-slate-500 text-xl font-semibold whitespace-nowrap mt-7">
                    Sophia Knowles
                  </div>
                </div>
                <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                  <div className="text-slate-400 text-xl font-semibold whitespace-nowrap">
                    Checked bags
                  </div>
                  <div className="flex items-center justify-between gap-5 mt-3.5 max-md:justify-center">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e469f78d-5f05-4239-8cff-8733eb071eec?apiKey=70d61d68dd3145c4942b1ff60da53db0&"
                      className="aspect-square object-contain object-center w-9 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
                    />
                    <div className="justify-center text-slate-500 text-center text-xl my-auto">
                      1
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9afde63-f66c-4f49-893e-71e494591e4e?apiKey=70d61d68dd3145c4942b1ff60da53db0&"
                      className="aspect-square object-contain object-center w-9 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="items-stretch flex w-[358px] max-w-full justify-between gap-5 mt-20 self-start max-md:mt-10">
                <div className="text-indigo-500 text-lg whitespace-nowrap items-stretch border-[color:var(--Purple-Blue,#605DEC)] grow px-5 py-3.5 rounded border-[1.11px] border-solid max-md:px-0.5">
                  Save and close
                </div>
                <div className="text-neutral-50 text-lg whitespace-nowrap items-stretch bg-indigo-500 grow px-5 py-3.5 rounded max-md:px-0.5">
                  Select seats
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col mt-48 max-md:max-w-full max-md:mt-10">
              <div className="items-stretch border-[color:var(--Purple-Extra-Light,#E9E8FC)] bg-white self-stretch flex flex-col px-4 py-7 rounded-xl border-[1.11px] border-solid max-md:max-w-full">
                <div className="items-stretch self-center flex gap-3 max-md:justify-center">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e167011c-c49b-4868-a325-8f5a93b380f6?apiKey=70d61d68dd3145c4942b1ff60da53db0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e167011c-c49b-4868-a325-8f5a93b380f6?apiKey=70d61d68dd3145c4942b1ff60da53db0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e167011c-c49b-4868-a325-8f5a93b380f6?apiKey=70d61d68dd3145c4942b1ff60da53db0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e167011c-c49b-4868-a325-8f5a93b380f6?apiKey=70d61d68dd3145c4942b1ff60da53db0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e167011c-c49b-4868-a325-8f5a93b380f6?apiKey=70d61d68dd3145c4942b1ff60da53db0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e167011c-c49b-4868-a325-8f5a93b380f6?apiKey=70d61d68dd3145c4942b1ff60da53db0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e167011c-c49b-4868-a325-8f5a93b380f6?apiKey=70d61d68dd3145c4942b1ff60da53db0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e167011c-c49b-4868-a325-8f5a93b380f6?apiKey=70d61d68dd3145c4942b1ff60da53db0&"
                    className="aspect-square object-contain object-center w-[45px] justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
                  />
                  <div className="items-stretch flex grow basis-[0%] flex-col self-start">
                    <div className="text-slate-800 text-base">
                      Hawaiian Airlines
                    </div>
                    <div className="text-slate-400 text-base mt-1.5">
                      FIG4312
                    </div>
                  </div>
                  <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-slate-800 text-right text-base">
                      16h 45m (+1d)
                    </div>
                    <div className="text-slate-800 text-right text-base mt-1.5">
                      7:00 AM - 4:15 PM
                    </div>
                    <div className="text-slate-400 text-right text-base mt-1">
                      2h 45m in HNL
                    </div>
                  </div>
                </div>
                <div className="items-stretch bg-white flex flex-col mt-5 py-1">
                  <div className="bg-violet-100 flex shrink-0 h-0.5 flex-col" />
                </div>
                <div className="items-stretch self-center flex gap-3 mt-5 max-md:justify-center">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a579d8cc-6f55-4969-ae29-3e534500f999?apiKey=70d61d68dd3145c4942b1ff60da53db0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a579d8cc-6f55-4969-ae29-3e534500f999?apiKey=70d61d68dd3145c4942b1ff60da53db0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a579d8cc-6f55-4969-ae29-3e534500f999?apiKey=70d61d68dd3145c4942b1ff60da53db0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a579d8cc-6f55-4969-ae29-3e534500f999?apiKey=70d61d68dd3145c4942b1ff60da53db0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a579d8cc-6f55-4969-ae29-3e534500f999?apiKey=70d61d68dd3145c4942b1ff60da53db0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a579d8cc-6f55-4969-ae29-3e534500f999?apiKey=70d61d68dd3145c4942b1ff60da53db0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a579d8cc-6f55-4969-ae29-3e534500f999?apiKey=70d61d68dd3145c4942b1ff60da53db0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a579d8cc-6f55-4969-ae29-3e534500f999?apiKey=70d61d68dd3145c4942b1ff60da53db0&"
                    className="aspect-[1.02] object-contain object-center w-[45px] justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
                  />
                  <div className="items-stretch flex grow basis-[0%] flex-col self-start">
                    <div className="text-slate-800 text-base">
                      Hawaiian Airlines
                    </div>
                    <div className="text-slate-400 text-base mt-1">FIG4312</div>
                  </div>
                  <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-slate-800 text-right text-base">
                      16h 45m (+1d)
                    </div>
                    <div className="text-slate-800 text-right text-base mt-1">
                      7:00 AM - 4:15 PM
                    </div>
                    <div className="text-slate-400 text-right text-base mt-1.5">
                      2h 45m in HNL
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-between items-stretch flex w-[227px] max-w-full gap-5 mr-4 mt-5 self-end max-md:mr-2.5">
                <div className="items-stretch flex grow basis-[0%] flex-col px-5">
                  <div className="text-slate-800 text-right text-base font-semibold -mr-5">
                    Subtotal
                  </div>
                  <div className="text-slate-800 text-right text-base font-semibold -mr-5 mt-2.5">
                    Taxes and Fees
                  </div>
                  <div className="text-slate-800 text-right text-base font-semibold -mr-5 mt-2.5">
                    Total
                  </div>
                </div>
                <div className="items-stretch flex basis-[0%] flex-col px-5">
                  <div className="text-slate-800 text-right text-base font-semibold whitespace-nowrap -mr-5">
                    $503
                  </div>
                  <div className="text-slate-800 text-right text-base font-semibold whitespace-nowrap -mr-5 mt-2.5">
                    $121
                  </div>
                  <div className="text-slate-800 text-right text-base font-semibold whitespace-nowrap -mr-5 mt-2.5">
                    $624
                  </div>
                </div>
              </div>
              <div className="text-neutral-50 text-lg whitespace-nowrap items-center bg-indigo-500 w-[154px] max-w-full mt-14 px-5 py-3.5 rounded self-end max-md:mt-10">
                Select seats
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ba833f6-5ce9-4f76-939b-1efd3a76769d?apiKey=70d61d68dd3145c4942b1ff60da53db0&"
                className="aspect-[0.74] object-contain object-center w-full overflow-hidden ml-5 mt-28 self-start max-md:max-w-full max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="items-stretch bg-white self-stretch flex w-full flex-col mt-16 pt-20 pb-8 max-md:max-w-full max-md:mt-10">
        <div className="justify-between self-center flex w-[1390px] gap-5 pr-14 pb-6 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/845aa180-802c-4498-990b-209a15124af2?apiKey=70d61d68dd3145c4942b1ff60da53db0&"
            className="aspect-[2.42] object-contain object-center w-[145px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="self-stretch max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[23%] max-md:w-full max-md:ml-0">
                <div className="items-stretch flex flex-col my-auto max-md:mt-10">
                  <div className="text-slate-500 text-lg font-bold">About</div>
                  <div className="text-slate-400 text-base mt-4">
                    About Tripma
                  </div>
                  <div className="text-slate-400 text-base mt-5">
                    How it works
                  </div>
                  <div className="text-slate-400 text-base mt-5">Careers</div>
                  <div className="text-slate-400 text-base mt-5">Press</div>
                  <div className="text-slate-400 text-base mt-4">Blog</div>
                  <div className="text-slate-400 text-base mt-5">Forum</div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col mt-6 max-md:mt-10">
                  <div className="text-slate-500 text-lg font-bold">
                    Partner with us
                  </div>
                  <div className="text-slate-400 text-base mt-4">
                    Partnership programs
                  </div>
                  <div className="text-slate-400 text-base mt-5">
                    Affiliate program
                  </div>
                  <div className="text-slate-400 text-base mt-5">
                    Connectivity partners
                  </div>
                  <div className="text-slate-400 text-base mt-5">
                    Promotions and events
                  </div>
                  <div className="text-slate-400 text-base mt-4">
                    Integrations
                  </div>
                  <div className="text-slate-400 text-base mt-5">Community</div>
                  <div className="text-slate-400 text-base mt-5">
                    Loyalty program
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[23%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex flex-col my-auto max-md:mt-10">
                  <div className="text-slate-500 text-lg font-bold">
                    Support
                  </div>
                  <div className="text-slate-400 text-base mt-4">
                    Help Center
                  </div>
                  <div className="text-slate-400 text-base mt-5">
                    Contact us
                  </div>
                  <div className="text-slate-400 text-base mt-5">
                    Privacy policy
                  </div>
                  <div className="text-slate-400 text-base mt-5">
                    Terms of service
                  </div>
                  <div className="text-slate-400 text-base mt-4">
                    Trust and safety
                  </div>
                  <div className="text-slate-400 text-base mt-5">
                    Accessibility
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[27%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex flex-col pt-6 max-md:mt-10">
                  <div className="text-slate-500 text-lg font-bold">
                    Get the app
                  </div>
                  <div className="text-slate-400 text-base mt-4">
                    Tripma for Android
                  </div>
                  <div className="text-slate-400 text-base mt-5">
                    Tripma for iOS
                  </div>
                  <div className="text-slate-400 text-base mt-5">
                    Mobile site
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/57a3672b-3ef4-48d9-9cea-1171d0ac2710?apiKey=70d61d68dd3145c4942b1ff60da53db0&"
                    className="aspect-[4.93] object-contain object-center w-[222px] overflow-hidden mt-9"
                  />
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fbff97e1-9000-42e2-8a73-0cd5817d4aeb?apiKey=70d61d68dd3145c4942b1ff60da53db0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbff97e1-9000-42e2-8a73-0cd5817d4aeb?apiKey=70d61d68dd3145c4942b1ff60da53db0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbff97e1-9000-42e2-8a73-0cd5817d4aeb?apiKey=70d61d68dd3145c4942b1ff60da53db0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbff97e1-9000-42e2-8a73-0cd5817d4aeb?apiKey=70d61d68dd3145c4942b1ff60da53db0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbff97e1-9000-42e2-8a73-0cd5817d4aeb?apiKey=70d61d68dd3145c4942b1ff60da53db0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbff97e1-9000-42e2-8a73-0cd5817d4aeb?apiKey=70d61d68dd3145c4942b1ff60da53db0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbff97e1-9000-42e2-8a73-0cd5817d4aeb?apiKey=70d61d68dd3145c4942b1ff60da53db0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbff97e1-9000-42e2-8a73-0cd5817d4aeb?apiKey=70d61d68dd3145c4942b1ff60da53db0&"
                    className="aspect-[4.93] object-contain object-center w-[222px] overflow-hidden mt-3.5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center items-stretch bg-white flex w-full flex-col mt-11 max-md:max-w-full max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cdcc033-ac35-4661-a805-cca864bd04a0?apiKey=70d61d68dd3145c4942b1ff60da53db0&"
            className="aspect-[1598] object-contain object-center w-full stroke-[1.11px] stroke-slate-300 overflow-hidden max-md:max-w-full"
          />
        </div>
        <div className="justify-between items-stretch self-center flex w-full max-w-[1334px] gap-5 mt-8 px-5 py-2.5 max-md:max-w-full max-md:flex-wrap">
          <div className="items-stretch flex justify-between gap-5 max-md:justify-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4137ea12-d2d7-483e-854f-1525022b009e?apiKey=70d61d68dd3145c4942b1ff60da53db0&"
              className="aspect-square object-contain object-center w-[26px] overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ee92f27-0211-4231-8bd8-582e330646ee?apiKey=70d61d68dd3145c4942b1ff60da53db0&"
              className="aspect-[1.04] object-contain object-center w-[27px] overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b27a8559-3721-43e1-92a0-5401b8007adb?apiKey=70d61d68dd3145c4942b1ff60da53db0&"
              className="aspect-[1.04] object-contain object-center w-[27px] overflow-hidden shrink-0 max-w-full"
            />
          </div>
          <div className="text-slate-400 text-right text-xl whitespace-nowrap">
            © 2020 Tripma incorporated
          </div>
        </div>
      </div>
    </div>
  )
}
