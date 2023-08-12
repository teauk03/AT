export const DATA_BLOCK_ITEMS = [
    { name: 'Motion', color: 'red' },
    { name: 'Event', color: 'green' },
    { name: 'Condition', color: '7000ff' },
    // { name: 'Event', color: 'FD9C0C' },
    // { name: 'Control', color: 'F17706' },
    // { name: 'Arithmetic', color: '10870D' },
    { name: 'Variable', color: 'f07707' },
    { name: 'MyBlock', color: '9a1c1c' },
];

export const DATA_BUTTON_ITEMS = [
    { label: "실행", className: "item-execute" },
    { label: "장비추가", className: "item-add" },
    { label: "장비삭제", className: "item-delete" },
    { label: "저장", className: "item-save" },
];


/* [Component] StudyPlanListItem Map */
const CREATE_PROBLEM_LIST = (start: number, labels: string[]) => {
    return labels.map((label, index) => ({
        href: `/study/problem/${start + index}`,
        label: label,
    }));
};

/* [Component] StudyPlanListItem Basic */
const LABELS_BASIC = [
    'Hello World',
    'Variable Declaration and Initialization',
    'Data Type',
    'String Concatenation'
];

/* [Component] StudyPlanListItem Operator */
const LABELS_OPERATOR = [
    'Arithmetic Operator',
    'Comparison Operator',
    'Logical Operator',
    'Assignment Operator',
    'Bit Operator'
];

/* [Component] StudyPlanListItem Condition */
const LABELS_CONDITION = [
    'Condition (if, switch)',
    'Ternary Operator',
    'Logical Operator',
    'Loop (for, while)',
    'Type Conversion Within Conditionals'
]

/* [Component] StudyPlanListItem Function */
const LABELS_FUNCTIONS = [
    'Function',
    'Parameters',
    'Methods',
    'Closures'
]

/* [Component] StudyPlanListItem Async */
const LABELS_ASYNC = [
    'Callbacks',
    'Asynchronous',
    'Promise',
    'Async/Await'
]

const START_BASIC = 1;
const START_OPERATOR = START_BASIC + LABELS_BASIC.length;
const START_CONDITION = START_OPERATOR + LABELS_OPERATOR.length;
const START_FUNCTIONS = START_CONDITION + LABELS_CONDITION.length;
const START_ASYNC = START_FUNCTIONS + LABELS_FUNCTIONS.length;

export const STUDY_PROBLEM_BASIC = CREATE_PROBLEM_LIST(START_BASIC, LABELS_BASIC);
export const STUDY_PROBLEM_OPERATOR = CREATE_PROBLEM_LIST(START_OPERATOR, LABELS_OPERATOR);
export const STUDY_PROBLEM_CONDITION = CREATE_PROBLEM_LIST(START_CONDITION, LABELS_CONDITION);
export const STUDY_PROBLEM_FUNCTIONS = CREATE_PROBLEM_LIST(START_FUNCTIONS, LABELS_FUNCTIONS);
export const STUDY_PROBLEM_ASYNC = CREATE_PROBLEM_LIST(START_ASYNC, LABELS_ASYNC);