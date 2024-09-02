import Image from "next/image";
import logo from "../../../assets/images/vogal.png";
import BottomFooter from "../footer/BottomFooter";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#F5F5F5] p-5 md:mt-16 md:pt-10">
      <div className="max-w-[1300px] mx-auto grid grid-cols-12 gap-5 md:gap-20">
        <div className="col-span-12 md:col-span-4">
          <a className="btn btn-ghost text-xl">
            <Image src={logo} alt="logo" height={52}></Image>
          </a>
          <p className="mt-5 text-sm md:pr-20">
            Ut enim ad minim veniam, quis nostrud exercitation laboris nisi ut
            aliquip ex ea commodo consequat.Ut enim ad minim veniam,quis nostrud
            exercitation
          </p>
          <h5 className="font-semibold text-sm uppercase mt-5">
            KEEP IN TOUCH
          </h5>
          <ul className="flex gap-3 mt-5">
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-2">
          <h5 className="font-semibold text-sm uppercase">Information</h5>
          <ul className="mt-5">
            <li className="mt-2 text-sm">Latest News</li>
            <li className="mt-2 text-sm">Career</li>
            <li className="mt-2 text-sm">My Account</li>
            <li className="mt-2 text-sm">My Cart</li>
            <li className="mt-2 text-sm">Orders and Returns</li>
            <li className="mt-2 text-sm">
              <Link href="/contactUs">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-2">
          <h5 className="font-semibold text-sm uppercase">Customer Service</h5>
          <ul className="mt-5">
            <li className="mt-2 text-sm">
              <Link href="/privacyPolicy">Privacy Policy</Link>
            </li>
            <li className="mt-2 text-sm">Terms & Conditions</li>
            <li className="mt-2 text-sm">Shipping & Returns</li>
            <li className="mt-2 text-sm">
              <Link href="/faqs">Helps & FAQs</Link>
            </li>
            <li className="mt-2 text-sm">
              <Link href="/refundPolicy">Refund Policy</Link>
            </li>
            <li className="mt-2 text-sm">Customer Service</li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-4">
          <h5 className="font-semibold text-sm uppercase">NEWSLETTER</h5>
          <p className="mt-5 text-sm">
            Enter your email to receive daily news and get 20% off coupon for
            all items. NO spam, we promise
          </p>
          <fieldset className="form-control mt-7">
            <div className="join">
              <input
                type="text"
                placeholder="Email address"
                className="input input-bordered join-item md:w-80"
              />
              <button className="btn btn-primary bg-[#1F1F1F] join-item uppercase text-sm">
                Subscribe
              </button>
            </div>
          </fieldset>
        </div>
      </div>
      <BottomFooter></BottomFooter>
    </div>
  );
};

export default Footer;
