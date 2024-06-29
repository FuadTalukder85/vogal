import Container from "../../components/container/Container";
import dealzone01 from "../../assets/images/dealZoneImg/dealzone01.png";
import Image from "next/image";

const DealZoneCard = () => {
  return (
    <Container>
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Image src={dealzone01} width={1000} height={1000}></Image>
        </div>
      </div>
    </Container>
  );
};

export default DealZoneCard;
