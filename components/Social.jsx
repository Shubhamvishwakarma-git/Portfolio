import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Shubhamvishwakarma-git" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/shubhamkv/" },
];
const Social = ({ containerstyles, iconstyles }) => {
  return (
    <div className={containerstyles}>
      {socials.map((item, index) => (
        <Link href={item.path} key={index} className={iconstyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
