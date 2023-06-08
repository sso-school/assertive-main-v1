import Head from "next/head";
import Image from "next/image";
import React from "react";

import DefaultHead from "@/components/DefaultHead";
import Header from "@/components/Header";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <DefaultHead></DefaultHead>
      <main className={styles.main}>
        <Header></Header>
        <div className={styles.top}>
          <div className={styles.topDec}>
            <div className={styles.topH2}>스마트팜</div>
            <div className={styles.topH1}>ASSERTIVE</div>
            <div className={styles.topText}>어썰티브는 한국디지털미디어고등학교 교내 스마트 팜 동아리이며<br />스마트 팜에 대한 기본 지식들을 배울 수 있는 동아리입니다.</div>
          </div>
        </div>
      </main>
    </>
  );
}
