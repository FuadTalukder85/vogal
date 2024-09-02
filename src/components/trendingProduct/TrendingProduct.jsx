import { useGetProductsQuery } from "../../redux/features/productApi/ProductApi";
import Image from "next/image";

const TrendingProduct = () => {
  const { data } = useGetProductsQuery();
  const trendingProduct = data?.filter(
    (trendings) => trendings.tag === "trending"
  );

  return (
    <div className="bg-white px-5 py-2">
      <h5 className="text-xl">Trending Product</h5>
      <hr className="bg-[#FF8042] py-[1.5px] w-[180px] rounded-tr-full rounded-tl-full" />
      <div className="overflow-x-auto mt-3 bg-white">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="md:text-[14px] text-[#333333]">SL *</th>
              <th className="md:text-[14px] text-[#333333]">Product Image</th>
              <th className="md:text-[14px] text-[#333333] text-center">
                Product Title
              </th>
              <th className="md:text-[14px] text-[#333333] text-center">
                Price
              </th>
              <th className="text-[#333333] text-center">Quantity</th>
            </tr>
          </thead>

          <tbody>
            {trendingProduct?.slice(0, 3).map((trending, index) => (
              <tr key={index}>
                <td className="font-semibold">{index + 1}.</td>
                <td className="flex gap-2">
                  <Image
                    src={trending.firstImg}
                    alt="firstImg"
                    width={55}
                    height={55}
                  />
                  <Image
                    src={trending.secondImg}
                    alt="firstImg"
                    width={55}
                    height={55}
                  />
                </td>
                <td className="text-center">{trending.title}</td>
                <td className="text-center">${trending.price}.00</td>
                <td className="text-center">{trending.stockProduct}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrendingProduct;
