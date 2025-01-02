import Container from "../container/Container";
import usa from "../../assets/images/globalOfficeImg/usa.png";
import canada from "../../assets/images/globalOfficeImg/canada.png";
import london from "../../assets/images/globalOfficeImg/london.png";
import tokyo from "../../assets/images/globalOfficeImg/tokyo.png";
import Image from "next/image";

const GlobalOffice = () => {
  return (
    <Container>
      <div className="text-center mt-16">
        <span className="text-2xl font-medium text-black">Global Offices</span>
      </div>
      <div className="grid grid-cols-12 md:gap-10 md:mt-16">
        <div className="col-span-6 md:col-span-3 bg-red">
          <ul className="p-5 md:p-10 text-center">
            <li className="text-center">
              <Image className="mx-auto" src={usa} alt="usa" width={60}></Image>
            </li>
            <li className="mt-8 font-semibold text-xl">United States</li>
            <li className="text-sm">2334 Joes Road</li>
            <li className="text-sm">Albany, New York</li>
            <li className="mt-8 text-sm">+36 222 5741 295</li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-3 bg-red">
          <ul className="p-5 md:p-10 text-center">
            <li className="text-center">
              <Image
                className="mx-auto"
                src={canada}
                alt="canada"
                width={60}
              ></Image>
            </li>
            <li className="mt-8 font-semibold text-xl">Canada</li>
            <li className="text-sm">126 Elizabeth St</li>
            <li className="text-sm">Toronto, Ontario,M5G 1P5</li>
            <li className="mt-8 text-sm">(416) 977-0933</li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-3 bg-red">
          <ul className="p-5 md:p-10 text-center">
            <li className="text-center">
              <Image
                className="mx-auto"
                src={london}
                alt="london"
                width={60}
              ></Image>
            </li>
            <li className="mt-8 font-semibold text-xl">London</li>
            <li className="text-sm">5 The Broadway</li>
            <li className="text-sm">Wimbledon. SW19 1QD</li>
            <li className="mt-8 text-sm">+44 20 7946 0405</li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-3 bg-red">
          <ul className="p-5 md:p-10 text-center">
            <li className="text-center">
              <Image
                className="mx-auto"
                src={tokyo}
                alt="tokyo"
                width={60}
              ></Image>
            </li>
            <li className="mt-8 font-semibold text-xl">Tokyo</li>
            <li className="text-sm">312-1045, Okuda Kizukacho</li>
            <li className="text-sm">Inazawa-shi, Aichi</li>
            <li className="mt-8 text-sm">+7299-798-1972</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default GlobalOffice;
