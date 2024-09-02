import Container from "../../../components/container/Container";
import "./privacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <Container>
      <div className="px-44">
        <h5 className="text-4xl text-center mt-16">Privacy policy</h5>
        <p className="text-xs mt-8">
          This Privacy Policy describes how vogal-demo.myshopify.com (the “Site”
          or “we”) collects, uses, and discloses your Personal Information when
          you visit or make a purchase from the Site.
        </p>
        {/* Contact */}
        <h5 className="text-2xl mt-10">Contact</h5>
        <p className="text-xs mt-3">
          After reviewing this policy, if you have additional questions, want
          more information about our privacy practices, or would like to make a
          complaint, please contact us by e-mail at support@vogal.com or by mail
          using the details provided below:
        </p>
        <h5 className="text-2xl mt-10">Collecting Personal Information</h5>
        <p className="text-xs mt-3">
          When you visit the Site, we collect certain information about your
          device, your interaction with the Site, and information necessary to
          process your purchases. We may also collect additional information if
          you contact us for customer support. In this Privacy Policy, we refer
          to any information about an identifiable individual (including the
          information below) as “Personal Information”. See the list below for
          more information about what Personal Information we collect and why.
        </p>
        {/* Order information */}
        <div className="flex gap-3 items-center mt-10">
          <p className="bullet-point"></p>
          <h5 className="text-2xl">Order information</h5>
        </div>
        <div className="flex gap-3 items-center mt-3">
          <p className="bullet-point-border"></p>
          <p className="text-xs">
            <span className="font-bold">Purpose of collection:</span> to load
            the Site accurately for you, and to perform analytics on Site usage
            to optimize our Site.
          </p>
        </div>
        <div className="flex gap-3 items-center mt-3">
          <p className="bullet-point-border"></p>
          <p className="text-xs">
            <span className="font-bold">Source of collection:</span> Collected
            automatically when you access our Site using cookies, log files, web
            beacons, tags, or pixels.
          </p>
        </div>
        <div className="flex gap-3 items-center mt-3">
          <p className="bullet-point-border"></p>
          <p className="text-xs">
            <span className="font-bold">
              Disclosure for a business purpose:
            </span>{" "}
            shared with our processor Shopify [ADD ANY OTHER VENDORS WITH WHOM
            YOU SHARE THIS INFORMATION].
          </p>
        </div>
        <div className="flex gap-3 items-center mt-3">
          <p className="bullet-point-border"></p>
          <p className="text-xs">
            <span className="font-bold">Personal Information collected:</span>{" "}
            version of web browser, IP address, time zone, cookie information,
            what sites or products you view, search terms,
          </p>
        </div>
        {/* Customer support information */}
        <div className="flex gap-3 items-center mt-10">
          <p className="bullet-point"></p>
          <h5 className="text-2xl">Customer support information</h5>
        </div>
        <div className="flex gap-3 items-center mt-3">
          <p className="bullet-point-border"></p>
          <p className="text-xs">
            <span className="font-bold">Purpose of collection:</span>{" "}
          </p>
        </div>
        <div className="flex gap-3 items-center mt-3">
          <p className="bullet-point-border"></p>
          <p className="text-xs">
            <span className="font-bold">Source of collection:</span>{" "}
          </p>
        </div>
        <div className="flex gap-3 items-center mt-3">
          <p className="bullet-point-border"></p>
          <p className="text-xs">
            <span className="font-bold">
              Disclosure for a business purpose:
            </span>
          </p>
        </div>
        <div className="flex gap-3 items-center mt-3">
          <p className="bullet-point-border"></p>
          <p className="text-xs">
            <span className="font-bold">Personal Information collected:</span>{" "}
            [INSERT ANY OTHER INFORMATION YOU COLLECT: OFFLINE DATA, PURCHASED
            MARKETING DATA/LISTS]
          </p>
        </div>
        <div className="flex gap-3 items-center mt-3">
          <p className="bullet-point-border"></p>
          <p className="text-xs">
            <span className="font-bold">Purpose of collection:</span> to provide
            customer support.
          </p>
        </div>
        <div className="flex gap-3 items-center mt-3">
          <p className="bullet-point-border"></p>
          <p className="text-xs">
            <span className="font-bold">Source of collection:</span> collected
            from you
          </p>
        </div>
        <div className="flex gap-3 items-center mt-3">
          <p className="bullet-point-border"></p>
          <p className="text-xs">
            <span className="font-bold">
              Disclosure for a business purpose:
            </span>{" "}
            [ADD ANY VENDORS USED TO PROVIDE CUSTOMER SUPPORT]
          </p>
        </div>
        <div className="flex gap-3 items-center mt-3">
          <p className="bullet-point-border"></p>
          <p className="text-xs">
            <span className="font-bold">Personal Information collected:</span>{" "}
            [ADD ANY MODIFICATIONS TO THE INFORMATION LISTED ABOVE OR ADDITIONAL
            INFORMATION AS NEED.]
          </p>
        </div>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
