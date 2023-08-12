import React from 'react';
import styles from '../../../components/Projects/StudyHome.module.scss';
import StudyPlanListItem from "@/components/Projects/StudyPlanListItem";
import StudyPlanSlbItem from "@/components/Projects/StudyPlanSlbItem";
import StudyPlanHeaderBackBtn from "@/components/Projects/StudyPlanHeaderBackBtn";

const StudyPlanHome = () => {
    return (
        /* Container */
        <div className={styles.container}>
            <div className={styles.content}>
                {/* Plan(Title) - Header */}
                <div className={styles['plan-header']}>
                    {/* Back Button */}
                    <StudyPlanHeaderBackBtn/>
                    <div className={styles['header-center']}>
                        <h1 className={styles['header-title']}>
                            Study Plan
                        </h1>
                        <div className={styles['header-count']}>
                            Count
                        </div>
                    </div>
                </div>

                {/* Contents Container */}
                <div className={styles['content-container']}>
                    <div className={styles['list-wrapper']}>
                        {/* {/* [SLB] Side Navigation (Item, Language) */}
                        <div className={styles['slb-wrapper']}>
                            <StudyPlanSlbItem/>
                        </div>

                        {/* Study List */}
                        <div className={styles['list-container']}>
                            <StudyPlanListItem
                                title={'Basic'}
                                items={[
                                    { href: '/study', label: 'Hello World' },
                                    { href: '/study', label: 'Variable Declaration and Initialization' },
                                    { href: '/study', label: 'Data Type' },
                                    { href: '/study', label: 'String Concatenation' },
                                ]}
                            />
                            <StudyPlanListItem
                                title={'Operator'}
                                items={[
                                    { href: '/study', label: 'Arithmetic Operator' },
                                    { href: '/study', label: 'Comparison Operator' },
                                    { href: '/study', label: 'Logical Operator' },
                                    { href: '/study', label: 'Assignment Operator' },
                                    { href: '/study', label: 'Bit Operator' },
                                ]}
                            />
                            <StudyPlanListItem
                                title={'Condition'}
                                items={[
                                    { href: '/study', label: 'Condition (if, switch)' },
                                    { href: '/study', label: 'Ternary Operator' },
                                    { href: '/study', label: 'Logical Operator' },
                                    { href: '/study', label: 'Loop (for, while)' },
                                    { href: '/study', label: 'Type Conversion Within Conditionals' },
                                ]}
                            />
                            <StudyPlanListItem
                                title={'Functions'}
                                items={[
                                    { href: '/study', label: 'Function' },
                                    { href: '/study', label: 'Parameters' },
                                    { href: '/study', label: 'Methods' },
                                    { href: '/study', label: 'Closures' },
                                ]}
                            />
                            <StudyPlanListItem
                                title={'Async'}
                                items={[
                                    { href: '/study', label: 'Callbacks' },
                                    { href: '/study', label: 'Asynchronous' },
                                    { href: '/study', label: 'Promise' },
                                    { href: '/study', label: 'Async/Await' },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyPlanHome;