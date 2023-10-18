import Image from "next/image";
import React,{useEffect} from "react";
import styles from "@/styles/highlight.module.css";
import Data from "@/Data/Home/home.json";
import AOS from "aos";
import "aos/dist/aos.css";
const Highlight = () => {
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 50,
  });
}, []);
    const item = Data.hightlight_section;
    return (
      <div className="gap-y-4 mt-32 max-w-7xl mx-auto">
        <div className={styles.gridflex}
           data-aos="fade-up"
        >
          <div
            className={`${styles.col} ${styles.colimage} flex justify-center aspect-auto w-full `}
          >
            <Image
              src={item[0].image}
              height={500}
              width={500}
              objectFit="contain"
              alt="fpay-wallet"
            />
          </div>
          <div className={`${styles.col} ${styles.coltext}`}>
            <div className={styles.Aligneritem}>
              <h3 className="font-bold text-xl">{item[0].title}</h3>
              <p className="mt-2 text-gray-600 text-medium">
                {item[0].content}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.gridflex}
           data-aos="fade-up"
        >
          <div
            className={`${styles.col} ${styles.colimage} flex justify-center`}
          >
            <Image
              height={380}
              width={400}
              src={item[1].image}
              objectFit="contain"
              alt="altImage"
            />
            {/* &nbsp; */}
          </div>
          <div className={`${styles.col} ${styles.coltext} ${styles.colleft}`}>
            <div className={styles.Aligneritem}>
              <h3 className="font-bold text-xl "> {item[1].title}</h3>
              <p className="mt-2 text-gray-600 text-medium">
                {item[1].content}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.gridflex}
           data-aos="fade-up"
        >
          <div
            className={`${styles.col} ${styles.colimage} flex justify-center aspect-auto w-full `}
          >
            <Image
              src={item[2].image}
              height={500}
              width={500}
              objectFit="contain"
              alt="fpay-wallet"
            />
          </div>
          <div className={`${styles.col} ${styles.coltext}`}>
            <div className={styles.Aligneritem}>
              <h3 className="font-bold text-xl">{item[2].title}</h3>
              <p className="mt-2 text-gray-600 text-medium">
                {item[2].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Highlight;


// const Highlight = () => {
//   const item = Data.hightlight_section;
//   return (
//     <div className="gap-y-4 mt-32 max-w-7xl mx-auto">
//       <div className={styles.gridflex}>
//         <div
//           className={`${styles.col} ${styles.colimage} flex justify-center aspect-auto w-full `}
//         >
//           <Image
//             src={item[0].image}
//             height={500}
//             width={500}
//             objectFit="contain"
//             alt="fpay-wallet"
//           />
//         </div>
//         <div className={`${styles.col} ${styles.coltext}`}>
//           <div className={styles.Aligneritem}>
//             <h3 className="font-bold text-xl">{item[0].title}</h3>
//             <p className="mt-2 text-gray-600 text-medium">{item[0].content}</p>
//           </div>
//         </div>
//       </div>
//       <div className={styles.gridflex}>
//         <div className={`${styles.col} ${styles.colimage} flex justify-center`}>
//           <Image
//             height={380}
//             width={400}
//             src={item[1].image}
//             objectFit="contain"
//             alt="altImage"
//           />
//           {/* &nbsp; */}
//         </div>
//         <div className={`${styles.col} ${styles.coltext} ${styles.colleft}`}>
//           <div className={styles.Aligneritem}>
//             <h3 className="font-bold text-xl "> {item[1].title}</h3>
//             <p className="mt-2 text-gray-600 text-medium">{item[1].content}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
