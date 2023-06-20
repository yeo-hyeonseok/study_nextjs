"use client";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import RouterItem from "../src/components/routers/routerItem";

export default function Routers() {
  let router = useRouter();
  let pathName = usePathname();
  let params = useParams();
  let searchParams = useSearchParams();

  return (
    <div className="flex items-center flex-col pt-4 pb-8">
      <div className="w-1/3">
        <RouterItem
          className="mt-4"
          label="router.push('/')"
          onClick={() => {
            router.push("/");
          }}
          desc="특정 페이지로 이동할 때 사용하셈"
        />
        <RouterItem
          className="mt-6"
          label="router.back()"
          onClick={() => {
            router.back();
          }}
          desc="뒤로가기"
        />
        <RouterItem
          className="mt-6"
          label="router.forward()"
          onClick={() => {
            router.forward();
          }}
          desc="앞으로가기"
        />
        <RouterItem
          className="mt-6"
          label="router.refresh()"
          onClick={() => {
            router.refresh();
          }}
          desc="새로고침인데 페이지 전체를 새로 로드하는 건 아니고 변경이 필요한 부분만 재렌더링 해주는 거임. Soft refresh"
        />
        <RouterItem
          className="mt-6"
          label="router.prefetch('/products')"
          onClick={() => {
            router.prefetch("/products");
          }}
          desc="해당 url의 페이지의 내용을 미리 로드해줌. 개발 환경에서는 기능 동작 관측 불가. Link 컴포넌트에는 기본적으로 내장되어 있는 기능임. (다만, Link가 너무 많거나 페이지의 내용을 미리 로드할 필요가 없을 때는 prefetch={false}로 꺼두는게 좋을듯)"
        />
        <RouterItem
          className="mt-6"
          label="usePathname()"
          onClick={() => {
            alert(pathName);
          }}
          desc="현재 url 반환해줌"
        />
        <RouterItem
          className="mt-6"
          label="useParams()"
          onClick={() => {
            console.log(params);
          }}
          desc="다이내믹 라우트에 적용된 url 파라미터 반환해줌"
        />
        <RouterItem
          className="mt-6"
          label="useSearchParams()"
          onClick={() => {
            alert(searchParams);
          }}
          desc="query string 반환해줌"
        />
      </div>
    </div>
  );
}
