export default function Rendering() {
  return (
    <div className="flex items-center flex-col pt-8 pb-8">
      <div className="w-1/3">
        <div>
          <h2 className="text-stone-100 text-xl font-semibold p-2 border border-stone-100">
            Static rendering
          </h2>
          <div className="border border-stone-100 p-2">
            <p className="text-stone-100 text-lg">
              빌드 당시의 정적인 HTML 페이지를 유저에게 보여주는 NextJs의
              기본적인 렌더링 방식임. (페이지를 미리 그려서 보여주는 거) 유저가
              페이지에 들어갈 때마다 페이지를 새로 그리지 않고 미리 만들어 놓은
              것을 보여주기 때문에 속도가 빠름. 따라서 주로 변동되는 데이터가
              없는 단순한 페이지에 사용하면 좋음
            </p>
            <p className="mt-3 text-stone-100 text-lg">
              특정 페이지를 Static Rendering하도록 직접 설정하고 싶다면
            </p>
            <p className="mt-1 bg-stone-100 text-black p-1">{`export const dynamic = 'force-static'`}</p>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-stone-100 text-xl font-semibold p-2 border border-stone-100">
            Dynamic rendering
          </h2>
          <div className="border border-stone-100 p-2">
            <p className="text-stone-100 text-lg">
              {`NextJs에서 Ajax 문법이나 Dynamic route 같은 거 쓰면 알아서 Dynamic rendering으로 페이지를 보여줌. 
                (빌드 시 확인 가능한데 페이지 앞에 기호가 'o'면 static이고 'λ'면 dynamic임)
                유저가 페이지에 들어갈 때마다 페이지를 새로 그려서 보여주는 방식임. 따라서 유저가 많으면 서버나 DB에 부담이 갈 수 있음
                => 서버 부담 덜어주려면 캐싱 기능 쓰셈`}
            </p>
            <p className="mt-3 text-stone-100 text-lg">
              특정 페이지를 Dynamic Rendering하도록 직접 설정하고 싶다면
            </p>
            <p className="mt-1 bg-stone-100 text-black p-1">{`export const dynamic = 'force-dynamic'`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
