import Container from "../../components/container/Container";
import dealZone01 from "../../assets/images/dealZoneImg/dealzone01.png";
import dealZone02 from "../../assets/images/dealZoneImg/dealzone02.png";
import dealZone03 from "../../assets/images/dealZoneImg/dealzone03.png";
import dealZone04 from "../../assets/images/dealZoneImg/dealzone04.png";
import dealZone05 from "../../assets/images/dealZoneImg/dealzone05.png";
import Image from "next/image";

const Trending = () => {
  return (
    <Container>
      <div className="grid grid-cols-5 gap-10 pt-20">
        <div className="col-span-1">
          <Image src={dealZone01} alt="img" width={200} height={100}></Image>
        </div>
        <div className="col-span-1">
          <Image src={dealZone02} alt="img" width={200} height={100}></Image>
        </div>
        <div className="col-span-1">
          <Image src={dealZone03} alt="img" width={200} height={100}></Image>
        </div>
        <div className="col-span-1">
          <Image src={dealZone04} alt="img" width={200} height={100}></Image>
        </div>
        <div className="col-span-1">
          <Image src={dealZone05} alt="img" width={200} height={100}></Image>
        </div>
      </div>
    </Container>
  );
};

export default Trending;
