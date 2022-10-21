import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Feed from "../components/Feed";
import Modal from "../components/Modal";

const Home: NextPage = () => {
  return (
    <div className=" bg-theme-light scrollbar-hide">
      {/* Head Component contains the name of the page that appears */}
      <Head>
        <title>ASU Social Media</title>
        <link rel="icon" href="/devil_logo.svg" />
      </Head>

      {/* Header */}
      <Header />

      {/* Feed */}
      <Feed />

      {/* Modal - The screen that appears when upload photo button is clicked */}
      <Modal />

      <footer className="flex h-20 w-full items-center justify-center border-t bg-theme-maroon">
        <a
          className="flex items-center justify-center gap-2 font-xs italic font-serif text-white"
        >
          For Learning Purposes Only{" "}
          <Image src="/social-freebsd-devil-1.svg" alt="ASU Logo" width={60} height={50} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
