import SuperButton from "../src/components/common/superButton";

export default function Apis() {
  return (
    <div className="flex items-center flex-col pt-8 pb-8">
      <div className="w-1/4">
        <form
          action="/api/post/getPost"
          method="GET"
          className="border-2 border-stone-100 flex items-center p-2 justify-between"
        >
          <p className="text-stone-100">게시글 목록 불러오기</p>
          <SuperButton type="submit" text="눌러보셈" />
        </form>
        <form
          action="/api/test"
          method="GET"
          className="border-2 border-stone-100 flex items-center p-2 justify-between mt-5"
        >
          <p className="text-stone-100">현재 시간은</p>
          <SuperButton type="submit" text="눌러보셈" />
        </form>
        <form
          action="/api/post/createPost"
          method="POST"
          className="border-2 border-stone-100 p-2 mt-5"
        >
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
        <form
          action="/api/user/register"
          method="POST"
          className="border-2 border-stone-100 p-2 mt-5"
        >
          <h2 className="text-stone-100">회원가입</h2>
          <input
            name="username"
            type="text"
            className="w-full pl-1 pr-1 mt-3"
            placeholder="USERNAME"
            required
          />
          <input
            name="userId"
            type="text"
            className="w-full pl-1 pr-1 mt-3"
            placeholder="ID"
            required
          />
          <input
            name="password"
            type="text"
            className="w-full pl-1 pr-1 mt-3"
            placeholder="PASSWORD"
            required
          />
          <div className="flex justify-end mt-3">
            <SuperButton type="submit" text="눌러보셈" />
          </div>
        </form>
      </div>
    </div>
  );
}
