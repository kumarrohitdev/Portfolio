import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

const SocialIcons = () => {
  const socialComponents = [FaGithub, FaLinkedin, IoMdMailOpen, FaXTwitter];
  const socialLinks = [
    "https://github.com/kumarrohitdev",
    "https://www.linkedin.com/in/kumarrohitdev/",
    "mailto:Rohitkumar.work@outlook.com",
    "https://twitter.com/RohitKumar6435",
  ];

  return (
    <div>
      {socialComponents.map((SocialIcon, index) => (
        <span key={index}>
          <Link target="_blank" href={socialLinks[index]} key={index}>
            <SocialIcon
              className="inline ml-8 hover:shadow-md cursor-pointer hover:transform hover:scale-110 hover:transition-transform text-blue-400 dark:text-gray-200"
              size={30}
            />
          </Link>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;
