import Container from "../../components/container/Container";
import dealZone from "../../assets/images/dealZoneImg/dealzone01.png";
import Image from "next/image";

const DealZone = () => {
  return (
    <Container>
      <div className="grid grid-cols-5 gap-10 pt-20">
        <div className="col-span-1">
          <Image src={dealZone} alt="img" width={200} height={100}></Image>
        </div>
        <div className="col-span-1">
          <Image src={dealZone} alt="img" width={200} height={100}></Image>
        </div>
        <div className="col-span-1">
          <Image src={dealZone} alt="img" width={200} height={100}></Image>
        </div>
        <div className="col-span-1">
          <Image src={dealZone} alt="img" width={200} height={100}></Image>
        </div>
        <div className="col-span-1">
          <Image src={dealZone} alt="img" width={200} height={100}></Image>
        </div>
      </div>
    </Container>
  );
};

export default DealZone;
