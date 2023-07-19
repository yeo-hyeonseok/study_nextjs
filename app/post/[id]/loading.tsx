// 모든 page 파일에 loading 파일 생성 가능
// client Component로도 생성 가능
// 로딩 중인 페이지 근처에 loading.js가 없다면 상위 폴더들을 뒤져보고 그걸로 대체 => app 폴더에 만들어놔도 보여줌

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-stone-100 text-2xl">로딩 중...</h1>
    </div>
  );
}
