import Head from "next/head";
import Image from "next/image";
import React from "react";

import Blogbox from "@/components/Blogbox";
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

        <div className={styles.blog}>
          <div className={styles.blogTitle}>Blog</div>
          <div className={styles.bloginner}>
            <div className={styles.blogtop}>
              <Blogbox 
                width={400} 
                height={615}
                // image="/images/1.jpg"
                title="어썰의 첫 팀 프로젝트"
                text="어썰티브가 이번에 처음으로 동아리원들과 같이 해서 만든 식물"
              />
              <div className={styles.blogtopright}>
                <div className={styles.blogtoprightinner}>
                  <Blogbox 
                    width={300} 
                    height={250}
                    // image="/images/1.jpg"
                    title="2학년 어썰의 활동 내용"
                    text="2학년들이 이번 1년동안 진행해온 프로젝트입니다."
                  />
                  <Blogbox 
                    width={300} 
                    height={250}
                    // image="/images/1.jpg"
                    title="1학년 어썰의 활동 내용"
                    text="1학년들이 이번 1년동안 진행해온 프로젝트입니다."
                  />
                </div>
                <div className={styles.blogtoprightinner}>
                  <Blogbox 
                    width={300} 
                    height={350}
                    // image="/images/1.jpg"
                    title="3학년 어썰의 활동 내용"
                    text="3학년들이 활동했던 프로젝트입니다."
                  />
                  <Blogbox 
                    width={300} 
                    height={350}
                    // image="/images/1.jpg"
                    title="졸업생 어썰의 활동 내용"
                    text="졸업생들이 활동했던 프로젝트입니다."
                  />
                </div>
              </div>
            </div>
            
            
            <Blogbox 
              width={1035} 
              height={400}
              // image="/images/1.jpg"
            >
              <div className={styles.fut}>미래의 어썰 후배님들이 활동할 내용</div>
            </Blogbox>

          </div>
        </div>
      </main>
    </>
  );
}
