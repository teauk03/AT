import React from 'react';
import styles from './Company.module.scss';
import Image from "next/image";
import INDEX_PAGE_JSON from '@/data/data-index-page.json';

const Company = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.contents}>
                    {/* Content1 */}
                    <section className={styles.hero}>
                        <div className={styles.wrapper}>
                            <h1 data-splitting="words">Selected Demos</h1>
                            <p className="subhead">Adam Kuhn</p>
                            {/* Panels */}
                            <div className={styles.panel}>
                                {INDEX_PAGE_JSON.INDEX_PAGE_ELEMENT.map((demo, index) => (
                                    <div key={index}>
                                        <h2 className="dark" data-splitting="words">{demo.title}</h2>
                                        <div className="thumb">
                                            <p>{demo.tags}</p>
                                            <div className="inner">
                                                <Image className="invert" loading="lazy" src={demo.imgUrl} width={500} height={200} alt={'회사이미지'}/>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            {/* Social Links */}
            <div id="social">
                <a href="https://twitter.com/cobra_winfrey" target="_blank">
                    {/* Twitter SVG */}
                </a>
                <a href="https://codepen.io/cobra_winfrey" target="_blank">
                    {/* Codepen SVG */}
                </a>
            </div>
        </div>
    );
};

export default Company;