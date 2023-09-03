import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArrowRight from "../../public/icons/arrow-right";

const Banner = () => { 
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2 >
            <div className="line">
              <span>Creating unique brands is</span>
            </div>
            <div className="line">
              <span>what we do.</span>
            </div>
          </h2>
          <div className="btn-row">
            <Link href="/about-us">
              More about us <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
