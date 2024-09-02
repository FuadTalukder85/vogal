import "./ProductDescription.css";

const ProductDescription = () => {
  return (
    <div className="mt-8">
      <p className="text-sm">
        The construction lifts and smooths, giving your rear assets all they
        need for an amped-up style that screams sex appeal from every angle.
        With a chic hue, this one makes for a perfect pick this fall. So get
        your basics right and you are good to go.
      </p>
      <h5 className="text-lg mt-8">Features</h5>
      <ul className="text-sm mt-4">
        <li className="flex gap-3 items-center">
          <p className="bullet-point"></p>
          <p>High-neck style</p>
        </li>
        <li className="flex gap-3 items-center mt-2">
          <p className="bullet-point"></p>
          <p>Drop shoulders</p>
        </li>
        <li className="flex gap-3 items-center mt-2">
          <p className="bullet-point"></p>
          <p>Flared cuffs</p>
        </li>
        <li className="flex gap-3 items-center mt-2">
          <p className="bullet-point"></p>
          <p>Asymmetrical hem</p>
        </li>
        <li className="flex gap-3 items-center mt-2">
          <p className="bullet-point"></p>
          <p>70% cotton, 30% polyester.</p>
        </li>
        <li className="flex gap-3 items-center mt-2">
          <p className="bullet-point"></p>
          <p>Easy to wear and versatile as Casual.</p>
        </li>
      </ul>
      <h5 className="text-lg mt-8">Composition and Care Guidelines</h5>
      <ul className="text-sm mt-4">
        <li className="flex gap-3 items-center">
          <p className="bullet-point"></p>
          <p>Only non-chlorine bleach when needed</p>
        </li>
        <li className="flex gap-3 items-center mt-2">
          <p className="bullet-point"></p>
          <p>Use a laundry bag</p>
        </li>
        <li className="flex gap-3 items-center mt-2">
          <p className="bullet-point"></p>
          <p>Medium iron</p>
        </li>
        <li className="flex gap-3 items-center mt-2">
          <p className="bullet-point"></p>
          <p>Machine wash cool</p>
        </li>
        <li className="flex gap-3 items-center mt-2">
          <p className="bullet-point"></p>
          <p>Dry flat. Can be dry cleaned</p>
        </li>
      </ul>
      <h5 className="text-lg mt-8">Size + Fit</h5>
      <ul className="text-sm mt-4">
        <li className="flex gap-3 items-center">
          <p className="bullet-point"></p>
          <p>Model in Brown is 5,10 and wearing size Small</p>
        </li>
        <li className="flex gap-3 items-center mt-2">
          <p className="bullet-point"></p>
          <p>Measurements taken from size Small</p>
        </li>
        <li className="flex gap-3 items-center mt-2">
          <p className="bullet-point"></p>
          <p>Chest: 28</p>
        </li>
        <li className="flex gap-3 items-center mt-2">
          <p className="bullet-point"></p>
          <p>Length: 16</p>
        </li>
      </ul>
      <h5 className="text-lg mt-8">Disclaimer</h5>
      <ul className="text-sm mt-4">
        <li className="md:w-[700px]">
          <p>
            Please check the size guide before you buy. You may need one size
            bigger than other popular brands. Bring out the fashionista in you
            with this solid dress designed.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ProductDescription;
