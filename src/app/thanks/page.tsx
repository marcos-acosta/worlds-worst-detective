"use client";

import SimplePage from "@/rendering/simplePage";
import dumpingLettersImage from "./../../../public/images/dumping-letters.png";

const headerText = "I'll see you in your inbox";

const body = (
  <>
    Thanks for trusting me with your email address; I know people don&apos;t
    hand those out lightly. I wouldn&apos;t know how to sell your personal
    information even if I tried. Who would I even go to for that sort of thing?
    Maybe that&apos;s what I&apos;ll investigate next.
  </>
);

export default function SubscribePage() {
  return (
    <SimplePage
      title={headerText}
      body={body}
      image={dumpingLettersImage}
      alt="Detective dumping out letters from a manila envelope"
    />
  );
}
