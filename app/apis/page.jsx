import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import GetPostForm from "../src/components/apis/getPostForm";
import GetCurrentTimeForm from "../src/components/apis/getCurrentTimeForm";
import WritePostForm from "../src/components/apis/writePostForm";
import GetUrlParams from "../src/components/apis/getUrlParams";

export default async function Apis() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex items-center flex-col pt-8 pb-8">
      {session !== null ? (
        <div className="w-1/4">
          <GetPostForm />
          <GetCurrentTimeForm className="mt-5" />
          <WritePostForm className="mt-5" />
          <GetUrlParams className="mt-5" />
        </div>
      ) : (
        <div className="text-stone-100 mt-25 text-xl">
          로그인 한 다음에 이용해보셈
        </div>
      )}
    </div>
  );
}
