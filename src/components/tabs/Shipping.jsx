const Shipping = () => {
  return (
    <div>
      <h5 className="text-lg mt-8">DELIVERY</h5>
      <ul className="text-sm mt-4">
        <li className="flex gap-3 items-center">
          <p className="h-1.5 w-1.5 bg-[#222222] rounded-full"></p>
          <p>Dispatch: Within 24 Hours</p>
        </li>
        <li className="flex gap-3 items-center mt-2">
          <p className="h-1.5 w-1.5 bg-[#222222] rounded-full"></p>
          <p>Free shipping across all products on a minimum purchase of $50.</p>
        </li>
        <li className="flex gap-3 items-center mt-2">
          <p className="h-1.5 w-1.5 bg-[#222222] rounded-full"></p>
          <p>International delivery time - 7-10 business days</p>
        </li>
        <li className="flex gap-3 items-center mt-2">
          <p className="h-1.5 w-1.5 bg-[#222222] rounded-full"></p>
          <p>Cash on delivery might be available</p>
        </li>
        <li className="flex gap-3 items-center mt-2">
          <p className="h-1.5 w-1.5 bg-[#222222] rounded-full"></p>
          <p>Easy 30 days returns and exchanges</p>
        </li>
      </ul>
      <h5 className="text-lg mt-8">RETURNS</h5>
      <ul className="text-sm mt-4">
        <li className="md:w-[980px]">
          <p>
            If you do not like the product you can return it within 15 days - no
            questions asked. This excludes bodysuits, swimwear and clearance
            sale items. We have an easy and hassle free return policy. Please
            look at our Delivery & Returns section for further information.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Shipping;
