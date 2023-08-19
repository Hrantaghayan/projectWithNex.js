import FooterStyles from "../../styles/footer.module.scss";
import github from "../../public/github.svg"
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className={FooterStyles.footer}>
      <div className={FooterStyles.globalImgWrapper}>
        <a href={"https://github.com/"}>
        <Image src={github} width="24" height="24" alt="GitHUb"/>
        </a>
        see my gitHub account for learning purposes
      </div>
    </div>
  );
}