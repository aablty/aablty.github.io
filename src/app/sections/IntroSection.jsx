import Button from "@/app/components/Button";
import Dots from "@/app/components/Dots";

import logo_outline from "@/assets/images/logo_outline.svg";
import avatar from "@/assets/images/avatar.png";
import "@/assets/styles/IntroSection.css";

export default function IntroSection() {
  return (
    <section className="intro">
      <div className="intro_content">
        <h1 className="intro_title">
          aablty is a <span>tech goblin </span>
          and <span> full-stack </span> devloper
        </h1>
        <p className="intro_description">
          An internet shaman channeling the sacred memes to craft responsive
          websites.
        </p>
        <Button className="primary" href="/#contacts">
          Contact Me
        </Button>
      </div>
      <div className="intro_composition">
        <img className="intro_logo" src={logo_outline} />
        <img src={avatar} className="intro_avatar" />
        <div className="intro_status">junior dev in progress</div>
        <Dots size={5} />
      </div>
    </section>
  );
}
