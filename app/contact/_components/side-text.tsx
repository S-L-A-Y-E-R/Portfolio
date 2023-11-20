import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import Link from "next/link";

export default function SideText() {
  return (
    <div className="basis-[48%] self-center">
      <h5 className="text-xl font-bold my-2">Let&apos;s Connect</h5>
      <p className="text-opacity-70 mb-4 max-w-md">
        {" "}
        I&apos;m currently looking for new opportunities, my inbox is always
        open. Whether you have a question, I&apos;ll try my best to get back to
        you!
      </p>
      <div className="socials flex flex-row gap-4">
        <Link href="https://github.com/S-L-A-Y-E-R" target="_blank">
          <FaGithub className="w-10 h-10 text-[#242938]" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ahmed-ashraf-8643ab216/"
          target="_blank"
        >
          <BsLinkedin className="w-10 h-10 text-[#0764C1]" />
        </Link>
        <Link href="https://leetcode.com/AhmedElshehry/" target="_blank">
          <TbBrandLeetcode className="w-10 h-10 text-[#FFA116]" />
        </Link>
      </div>
    </div>
  );
}
