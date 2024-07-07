import Image from "next/image";
import Link from "next/link";
import { Avatar } from "../avatar";

export const Footer = () => {
  return (
    <div className="bg-base-100 text-base-content">
      <footer className="container flex flex-col  lg:flex-row items-center gap-3 px-0 lg:px-3 xl:px-6 py-20">
        <div className="text-center flex flex-col items-center lg:me-20">
          <Image
            src="/images/logo-en-light.svg"
            width={180}
            height={36}
            alt="classbon logo"
          />
          <p className="opacity-50 mt-2">
            Programming Education Platform
            <br /> Continuous Learning - Continuous Improvement
          </p>
        </div>
        <div className="flex flex-1 flex-col md:flex-row gap-5 md:gap-6 whitespace-nowrap">
          <div className="grid flex-1 basis-36 gap-3 place-items-center md:place-items-start">
            <Link href="/docs/install/" className="link link-hover">
              React and Next.js Tutorial
            </Link>
            <Link href="/docs/customize/" className="link link-hover">
              Senior React
            </Link>
            <Link href="/docs/customize/" className="link link-hover">
              Programming Consultation
            </Link>
          </div>

          <div className="grid flex-1 basis-36 gap-3 place-items-center md:place-items-start">
            <Link href="/docs/themes/" className="link link-hover">
              Classbon on LinkedIn
            </Link>
            <Link href="/docs/themes/" className="link link-hover">
              Classbon on Telegram
            </Link>
            <Link href="/docs/themes/" className="link link-hover">
              Classbon on YouTube
            </Link>
          </div>
          <div className="grid flex-1 basis-36 gap-3 place-items-center md:place-items-start">
            <Link href="/docs/themes/" className="link link-hover">
              Articles and Posts
            </Link>
            <Link href="/docs/themes/" className="link link-hover">
              Frequently Asked Questions
            </Link>
            <Link href="/docs/themes/" className="link link-hover">
              Terms of Use and Privacy Policy
            </Link>
          </div>
        </div>
      </footer>

      <div className="bg-base-200 text-left">
        <div className="container py-10 flex justify-between items-center">
          <div className="flex gap-5 items-center ">
            <Avatar src="/images/damoon.jpeg" />
            <div className="flex flex-col">
              <span className="text-base-content/50 ">Developed by:</span>
              <span className="text-lg font-bold tracking-wide">
                Damoon Darvishi
              </span>
            </div>
          </div>
          <span className="text-sm text-base-content/60 font-semibold">
            Copyright © 2023
            <p>All rights reserved</p>
          </span>
        </div>
      </div>
    </div>
  );
};
