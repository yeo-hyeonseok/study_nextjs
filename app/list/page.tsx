export default function List() {
  var productList = [
    {
      id: 1,
      name: "신라면",
      price: 1200,
      company: "농심",
      tag: ["food", "noodle"],
    },
    {
      id: 2,
      name: "진라면",
      price: 1300,
      company: "오뚜기",
      tag: ["food", "noodle"],
    },
    {
      id: 3,
      name: "안성탕면",
      price: 1100,
      company: "농심",
      tag: ["food", "noodle"],
    },
  ];

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-stone-100 text-5xl font-bold mb-4">상품 목록</h1>
      {productList.map((product) => (
        <div
          key={product.id}
          className="bg-slate-200 mt-8 w-1/4 p-5 rounded-md"
        >
          <div className="text-center w-full bg-gray-500">이미지</div>
          <div className="flex justify-between mt-2">
            <h2 className="text-2xl font-semibold">
              [{product.company}] {product.name}
            </h2>
            <p className="text-xl">{product.price}원</p>
          </div>
        </div>
      ))}
    </div>
  );
}
