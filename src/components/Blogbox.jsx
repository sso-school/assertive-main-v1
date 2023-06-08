import React from "react";

import styles from "@/styles/Blogbox.module.css";

const Blogbox = ({ width, height, title, text, image, children }) => {
  return (
    <div className={[styles.blogBox].join(" ")} style={{
      width: width ? `${width}px` : "300px",
      height: height ? `${height}px` : "500px"
    }}>
      <div className={[styles.blogBoxImage]} style={{
        backgroundImage: image ? `url(${image})` : "url(/background.png)"
      }}></div> 
      <div className={[styles.blogBoxTexts]}>
        {title && <div className={styles.blogBoxTitle}>{title}</div>} 
        {text && <div className={styles.blogBoxContent}>{text}</div> }
        {children}
      </div>
    </div>
  );
};

export default Blogbox;