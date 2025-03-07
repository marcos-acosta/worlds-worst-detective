"use client";

import React, { useState } from "react";
import styles from "./subscribePage.module.css";
import { combineClasses } from "@/util";
import { monospaceFont } from "@/fonts";
import SimplePage from "@/rendering/simplePage";
import mailImage from "./../../../public/images/envelope.png";

const validateEmailRegex = /^\S+@\S+\.\S+$/;

const headerText = "Subscribe to World's Worst Detective!";

const body = (
  <>
    As a private investigator, my preferred mode of communication is a collage
    of mismatched letters from a magazine. However, due to scalability
    constraints, I&apos;ve been forced to modernize. I&apos;ll only use your
    email to send you updates on new writing.
  </>
);

export default function SubscribePage() {
  const [email, setEmail] = useState("");

  const isEmailValid = validateEmailRegex.test(email);

  const signupForm = (
    <div className={styles.formContainer}>
      <form
        action="https://marcos.us22.list-manage.com/subscribe/post"
        method="POST"
      >
        <input type="hidden" name="u" value="35fbf48792ba3c22e0d4ae4ef" />
        <input type="hidden" name="id" value="75091a5d35" />
        <div className={styles.horizontalInputContainer}>
          <div className={styles.emailInputContainer}>
            <input
              type="email"
              autoCapitalize="none"
              autoCorrect="off"
              name="MERGE0"
              id="MERGE0"
              size={25}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className={combineClasses(
                styles.emailInput,
                monospaceFont.className
              )}
            />
          </div>
          <div className={styles.submitContainer}>
            <input
              type="submit"
              name="submit"
              value="Subscribe"
              className={combineClasses(
                styles.submitButton,
                monospaceFont.className
              )}
              disabled={!isEmailValid}
            ></input>
          </div>
        </div>
      </form>
    </div>
  );

  return (
    <SimplePage
      title={headerText}
      body={body}
      rest={signupForm}
      image={mailImage}
      alt="Detective holding a manila envelope"
    />
  );
}
