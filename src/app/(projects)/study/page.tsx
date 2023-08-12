import React from 'react';
import styles from '../../../components/Projects/StudyHome.module.scss';
import StudyPlanListItem from "@/components/Projects/StudyPlanListItem";
import StudyPlanSlbItem from "@/components/Projects/StudyPlanSlbItem";
import StudyPlanHeaderBackBtn from "@/components/Projects/StudyPlanHeaderBackBtn";
import {
    STUDY_PROBLEM_ASYNC,
    STUDY_PROBLEM_BASIC,
    STUDY_PROBLEM_CONDITION,
    STUDY_PROBLEM_FUNCTIONS, STUDY_PROBLEM_OPERATOR
} from "@/data/dataProjectsItem";

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
                                items={STUDY_PROBLEM_BASIC}
                            />
                            <StudyPlanListItem
                                title={'Operator'}
                                items={STUDY_PROBLEM_OPERATOR}
                            />
                            <StudyPlanListItem
                                title={'Condition'}
                                items={STUDY_PROBLEM_CONDITION}
                            />
                            <StudyPlanListItem
                                title={'Functions'}
                                items={STUDY_PROBLEM_FUNCTIONS}
                            />
                            <StudyPlanListItem
                                title={'Async'}
                                items={STUDY_PROBLEM_ASYNC}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyPlanHome;