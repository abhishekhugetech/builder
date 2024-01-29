import { css } from "@emotion/react";
import Button from "../../shared/components/button";
import { useCallback, useEffect, useState } from "react";

const Footer = () => {
  return (
    <footer className="flex h-14 items-center justify-between bg-neutral-100 px-4 md:h-20 md:px-6">
      <ul className="ml-2 flex space-x-6">
        <li>
          <a
            href="https://www.sonsupply.com#faq"
            className="text-sm text-neutral-500 hover:underline"
            target="_blank"
          >
            FAQ
          </a>
        </li>
        <li>
          <a
            href="https://www.sonsupply.com/terms-conditions"
            className="text-sm text-neutral-500 hover:underline"
            target="_blank"
          >
            Terms &amp; Conditions
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
