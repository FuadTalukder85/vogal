"use client";
import Container from "../../../components/container/Container";
import { useForm } from "react-hook-form";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import GlobalOffice from "../../../components/globalOffice/GlobalOffice";
import "./contactUs.css";

const ContactUsPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="bg-base-200">
        <div className="contact-banner text-white text-center py-16">
          <h5 className="text-2xl md:text-4xl">Contact Us</h5>
          <p className="md:text-lg mt-3 px-3 md:px-0">
            We love to hear from you on our customer service
          </p>
        </div>
        <Container>
          <div className="md:grid grid-cols-12 gap-10 mt-10">
            <div className="col-span-8">
              <div className="">
                <div className="flex-col">
                  {/* lg:flex-row-reverse */}
                  <div className="text-center">
                    <span className="text-2xl font-medium text-black">
                      Drop Us A Line
                    </span>
                  </div>
                  <div className="card shrink-0">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="card-body md:w-[850px]"
                    >
                      <div className="md:flex gap-5 justify-between">
                        <div className="form-control">
                          <input
                            type="text"
                            placeholder="Name"
                            className="input order border-[#EFEDEC] text-xs md:w-96"
                            {...register("name")}
                          />
                        </div>
                        <div className="form-control mt-2 md:mt-0">
                          <input
                            type="text"
                            placeholder="Email"
                            className="input order border-[#EFEDEC] text-xs md:w-96"
                            {...register("email")}
                          />
                        </div>
                      </div>
                      <div className="form-control">
                        <input
                          type="number"
                          placeholder="Phone Number"
                          className="input order border-[#EFEDEC] text-xs"
                          {...register("number")}
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="text"
                          placeholder="Subject"
                          className="input order border-[#EFEDEC] text-xs"
                          {...register("subject")}
                        />
                      </div>
                      <div className="form-control">
                        <textarea
                          type="text"
                          placeholder="Message"
                          className="input order border-[#EFEDEC] text-xs h-32 pt-3"
                        ></textarea>
                      </div>

                      <div className="form-control mt-5">
                        <button
                          type="submit"
                          className="md:w-28 mx-auto border bg-[#333333] text-white hover:bg-[#40B884] transition-all duration-500 py-3 px-7 rounded-md text-xs uppercase"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 p-5 md:p-0">
              <h5 className="text-xl text-black">Address : </h5>
              <ul className="text-sm">
                <li className="mt-5">55 Gallaxy Enque, 2568 steet, 23568 NY</li>
                <li className="mt-2">PHONE: +1 (440) 568 4568</li>
                <li className="mt-2">EMAIL: sales@yousite.com</li>
              </ul>
              <hr className="my-6" />
              {/*  */}
              <h5 className="text-xl text-black">Opening Time : </h5>
              <ul className="text-sm">
                <li className="mt-5">Mon - Sat : 9am - 11pm</li>
                <li className="mt-2">Sunday: 11am - 5pm</li>
              </ul>
              <hr className="my-6" />
              {/*  */}
              <h5 className="text-xl text-black">Stay Connected</h5>
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
          </div>
        </Container>
      </div>
      <GlobalOffice></GlobalOffice>
    </div>
  );
};

export default ContactUsPage;
