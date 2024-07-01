import Container from "../../components/container/Container";

const RefundPolicy = () => {
  return (
    <Container>
      <div className="px-44">
        <h5 className="text-4xl text-center mt-16">Refund policy</h5>
        <p className="text-xs mt-8">
          To be eligible for a return, your item must be in the same condition
          that you received it, unworn or unused, with tags, and in its original
          packaging. You’ll also need the receipt or proof of purchase.
        </p>
        <p className="text-xs mt-8">
          To start a return, you can contact us at support@vogal.com. Please
          note that returns will need to be sent to the following address:
          [INSERT RETURN ADDRESS]
        </p>
        <p className="text-xs mt-8">
          If your return is accepted, we’ll send you a return shipping label, as
          well as instructions on how and where to send your package. Items sent
          back to us without first requesting a return will not be accepted.
        </p>
        <p className="text-xs mt-8">
          You can always contact us for any return question at
          support@vogal.com.
        </p>

        <h5 className="text-2xl mt-10">Damages and issues</h5>
        <p className="text-xs mt-3">
          Please inspect your order upon reception and contact us immediately if
          the item is defective, damaged or if you receive the wrong item, so
          that we can evaluate the issue and make it right.
        </p>

        <h5 className="text-2xl mt-10">Exceptions / non-returnable items</h5>
        <p className="text-xs mt-3">
          Certain types of items cannot be returned, like perishable goods (such
          as food, flowers, or plants), custom products (such as special orders
          or personalized items), and personal care goods (such as beauty
          products). We also do not accept returns for hazardous materials,
          flammable liquids, or gases. Please get in touch if you have questions
          or concerns about your specific item.
        </p>
        <p className="text-xs mt-3">
          Unfortunately, we cannot accept returns on sale items or gift cards.
        </p>

        <h5 className="text-2xl mt-10">Exchanges</h5>
        <p className="text-xs mt-3">
          The fastest way to ensure you get what you want is to return the item
          you have, and once the return is accepted, make a separate purchase
          for the new item.
        </p>

        <h5 className="text-2xl mt-10">
          European Union 14 day cooling off period
        </h5>
        <p className="text-xs mt-3">
          Notwithstanding the above, if the merchandise is being shipped into
          the European Union, you have the right to cancel or return your order
          within 14 days, for any reason and without a justification. As above,
          your item must be in the same condition that you received it, unworn
          or unused, with tags, and in its original packaging. You’ll also need
          the receipt or proof of purchase.
        </p>

        <h5 className="text-2xl mt-10">Refunds</h5>
        <p className="text-xs mt-3">
          We will notify you once we’ve received and inspected your return, and
          let you know if the refund was approved or not. If approved, you’ll be
          automatically refunded on your original payment method within 10
          business days. Please remember it can take some time for your bank or
          credit card company to process and post the refund too.
        </p>
        <p className="text-xs">
          If more than 15 business days have passed since we’ve approved your
          return, please contact us at support@vogal.com.
        </p>
      </div>
    </Container>
  );
};

export default RefundPolicy;
