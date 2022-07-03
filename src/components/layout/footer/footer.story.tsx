import React from "react";
import { storiesOf } from "@storybook/react";
import { Footer } from "./footer";

const story = storiesOf("Components|Layout", module);

const data: Footer = {
  copyrightOwner: "Atif Hasnain",
  facebook: "https://facebook.com/atif.hasnain/",
  github: "https://github.com/Atifhasnain/",
  linkedin: "https://linkedin.com/in/muhammad-atif-hasnain/",
};

story.add("Footer", () => <Footer {...data} />);
