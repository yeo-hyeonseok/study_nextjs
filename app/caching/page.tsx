"use client";

import SuperItemCard from "../src/components/common/superItemCard";
import SuperButton from "../src/components/common/superButton";

export default function Caching() {
  return (
    <div className="flex items-center flex-col pt-8 pb-8">
      <div className="w-1/3">
        <div>
          <h2 className="text-stone-100 text-xl font-semibold border border-stone-100 p-2">
            캐싱이 뭐임
          </h2>
          <div className="text-stone-100 text-lg border border-stone-100 p-2">
            <p>
              결과를 잠깐 저장해두고 재사용하는 거임. 즉, 특정 페이지의 완성본을
              잠깐 저장해두고 필요할 때마다 유저한테 그대로 보여주는 건데 페이지
              뿐만 아니라 GET 요청 결과 데이터도 캐싱이 가능함. 참고로 캐싱된
              데이터는 하드용량을 차지하게 됨.
            </p>
            <p className="mt-3">
              근데 사실 fetch 쓰면 자동으로 캐싱 해주긴 함. 굳이 뭐 안 써줘도
              됨.
            </p>
            <p className="mt-3 bg-stone-100 text-black p-1">{`fetch('/URL', {cache: 'force-cache'})`}</p>
            <p className="mt-3 bg-stone-100 text-black p-1">{`fetch('/URL')`}</p>
            <p className="mt-2">{`(둘이 같음)`}</p>
          </div>
        </div>
        <SuperItemCard
          className="mt-6"
          label="fetch('/URL', {cache: 'no-store'})"
          desc="응답 데이터를 캐싱하기 싫다면 이거 쓰셈"
        />
        <SuperItemCard
          className="mt-6"
          label="fetch('/URL', {next: {revalidate: 숫자}})"
          desc="캐싱한 데이터를 일정시간마다 갱신하고 싶다면 이거 쓰셈"
        />
        <div className="mt-6">
          <h2 className="text-stone-100 text-xl font-semibold p-2 border border-stone-100">
            export const revalidate = 20
          </h2>
          <div className="border border-stone-100">
            <p className="text-stone-100 text-lg p-2">
              페이지 단위로 캐싱하고 싶다면 이거 써보셈. 이러면 유저가 해당
              페이지에 들어갈 때마다 페이지를 새로 그려주는 대신 60초 동안은
              캐싱된 페이지를 보여줌. 20초 땡하면 페이지 갱신해줌. (예전 버전
              nextjs에서는 ISR이라고 불렀음) 프로덕션 환경에서 테스트 가능
            </p>
            <form action="api/test" method="POST" className="p-2">
              <div className="flex">
                <label className="text-stone-100 mr-2">TITLE:</label>
                <input
                  name="title"
                  type="text"
                  className="w-full pl-1 pr-1"
                  required
                />
              </div>
              <div className="mt-3">
                <label className="text-stone-100">CONTENT</label>
                <textarea
                  name="content"
                  rows={3}
                  className="w-full mt-1 pl-1 pr-1"
                  required
                />
              </div>
              <div className="flex justify-end mt-3">
                <SuperButton type="submit" text="눌러보셈" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
