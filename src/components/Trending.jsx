"use client";
import Container from "./Container";
import dealZone01 from "../assets/images/dealZoneImg/dealzone01.png";
import dealZone02 from "../assets/images/dealZoneImg/dealzone02.png";
import dealZone03 from "../assets/images/dealZoneImg/dealzone03.png";
import dealZone04 from "../assets/images/dealZoneImg/dealzone04.png";
import dealZone05 from "../assets/images/dealZoneImg/dealzone05.png";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Trending = () => {
  return (
    <Container>
      <div className="grid grid-cols-5 gap-10 pt-16 px-8">
        <div className="col-span-1">
          <Link href="/trending/men">
            <div className="relative py-2">
              <Image src={dealZone03} alt="img" width={200} height={100} />
              <p className="absolute bottom-5 left-11 text-center bg-slate-500 text-white py-1 px-2 rounded-md">
                Men
              </p>
            </div>
          </Link>
        </div>
        <div className="col-span-1">
          <Link href="/trending/women">
            <div className="relative py-2">
              <Image src={dealZone05} alt="img" width={200} height={100} />
              <p className="absolute bottom-5 left-11 text-center bg-slate-500 text-white py-1 px-2 rounded-md">
                Women
              </p>
            </div>
          </Link>
        </div>
        <div className="col-span-1">
          <Link href="/trending/jewellery">
            <div className="relative py-2">
              <Image src={dealZone01} alt="img" width={200} height={100} />
              <p className="absolute bottom-5 left-11 text-center bg-slate-500 text-white py-1 px-2 rounded-md">
                Jewellery
              </p>
            </div>
          </Link>
        </div>
        <div className="col-span-1">
          <Link href="/trending/partyDress">
            <div className="relative py-2">
              <Image src={dealZone02} alt="img" width={200} height={100} />
              <p className="absolute bottom-5 left-11 text-center bg-slate-500 text-white py-1 px-2 rounded-md">
                Party Dress
              </p>
            </div>
          </Link>
        </div>
        <div className="col-span-1">
          <Link href="/trending/accessories">
            <div className="relative py-2">
              <Image src={dealZone04} alt="img" width={200} height={100} />
              <p className="absolute bottom-5 left-11 text-center bg-slate-500 text-white py-1 px-2 rounded-md">
                Accessories
              </p>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
};

// export default Trending;
export default dynamic(() => Promise.resolve(Trending), { ssr: false });
