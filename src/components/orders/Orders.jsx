import Image from "next/image";
import Imgg from "../../assets/images/dealZoneImg/dealzone01.png";

const Orders = () => {
  return (
    <div>
      <h5 className="text-2xl font-semibold">Orders</h5>
      <div className="overflow-x-auto mt-3">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="">
              <th className="md:text-lg text-[#333333]">Product</th>
              <th className="md:text-lg text-[#333333]">Price</th>
              <th className="md:text-lg text-[#333333]">Delivery Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className="">
                <div className="flex items-center gap-3">
                  <div className="avatar gap-5">
                    <div className="mask mask-squircle">
                      <Image
                        src={Imgg}
                        alt={Imgg || "Image"}
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="">Everyday Tube Top Ribbed</div>
                  </div>
                </div>
              </td>
              <td className="">$200</td>
              <td className="">18 Nov 2023</td>
            </tr>
            <tr>
              <td className="">
                <div className="flex items-center gap-3">
                  <div className="avatar gap-5">
                    <div className="mask mask-squircle">
                      <Image
                        src={Imgg}
                        alt={Imgg || "Image"}
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="">Everyday Tube Top Ribbed</div>
                  </div>
                </div>
              </td>
              <td className="">$200</td>
              <td className="">18 Nov 2023</td>
            </tr>
            <tr>
              <td className="">
                <div className="flex items-center gap-3">
                  <div className="avatar gap-5">
                    <div className="mask mask-squircle">
                      <Image
                        src={Imgg}
                        alt={Imgg || "Image"}
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="">Everyday Tube Top Ribbed</div>
                  </div>
                </div>
              </td>
              <td className="">$200</td>
              <td className="">18 Nov 2023</td>
            </tr>
            <tr>
              <td className="">
                <div className="flex items-center gap-3">
                  <div className="avatar gap-5">
                    <div className="mask mask-squircle">
                      <Image
                        src={Imgg}
                        alt={Imgg || "Image"}
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="">Everyday Tube Top Ribbed</div>
                  </div>
                </div>
              </td>
              <td className="">$200</td>
              <td className="">18 Nov 2023</td>
            </tr>
            <tr>
              <td className="">
                <div className="flex items-center gap-3">
                  <div className="avatar gap-5">
                    <div className="mask mask-squircle">
                      <Image
                        src={Imgg}
                        alt={Imgg || "Image"}
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="">Everyday Tube Top Ribbed</div>
                  </div>
                </div>
              </td>
              <td className="">$200</td>
              <td className="">18 Nov 2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
