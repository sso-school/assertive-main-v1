import { useRouter } from "next/router";
import React from "react";

import styles from "@/styles/Header.module.css";

const urls = [
  {
    name: "홈",
    url: "/"
  },
  {
    name: "멤버",
    url: "/member"
  },
  {
    name: "사진첩",
    url: "/photo"
  },
  {
    name: "Q&A",
    url: "/qna"
  }
];

const Header = () => {
  const router = useRouter();

  return (
    <div className={styles.box}>
      {
        urls.map((_, index) => {
          return (
            <div 
              key={index} 
              className={styles.button}
              onClick={() => router.push(_.url)}
            >
              {_.name}
            </div>
          );
        })
      }
    </div>
  );
};

export default Header;