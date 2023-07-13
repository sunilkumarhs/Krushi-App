import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start ml-4 mr-0 sm:mr-10">
        <img
          src={logo}
          alt="DigitalFarming"
          className="w-[200px] h-[50px] sm:w-[266px] sm:h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-2 sm:mt-4 max-w-[312px]`}>
          A new way to make products trading easy, profit and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-5">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col sm:my-0 my-2 min-w-[150px]`}
          >
            <h4 className="font-poppins font-medium text-l sm:text-xl leading-[10px] sm:leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-3 sm:mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-sm sm:text-l leading-[15px] sm:leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1
                      ? "mb-2 sm:mb-4"
                      : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-2 sm:pt-6 border-t-[2px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-sm sm:text-l leading-[27px] text-white">
        Copyright Ⓒ 2023 DigitalFarming. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-3">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
