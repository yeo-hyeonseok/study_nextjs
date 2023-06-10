import Image from "next/image";

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
    <div className="flex items-center justify-center flex-col pt-32 pb-32">
      <h1 className="text-stone-100 text-5xl font-bold mb-4">상품 목록</h1>
      {productList.map((product, index) => (
        <div key={product.id} className="bg-white mt-10 w-1/4 p-5 rounded-md">
          <Image
            src={`/images/product_${index + 1}.jpg`}
            alt={product.name}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
          />
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
