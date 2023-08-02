interface AccountDetail {
    id: number;
    label: string;
    value: string;
    disabled: boolean;
    type: 'text' | 'paragraph';
}

const accountDetails: AccountDetail[] = [
    { id: 1, label: 'Name', value: 'Name', disabled: true, type: 'text' },
    { id: 2, label: 'Email', value: 'Email@ansan.ac.kr', disabled: true, type: 'text' },
    { id: 3, label: 'Birth', value: '2003.03.17', disabled: true, type: 'text' },
    { id: 4, label: 'Summary', value: '-', disabled: true, type: 'text' },
    { id: 5, label: 'Github', value: '-', disabled: true, type: 'text' },
    { id: 6, label: 'Website', value: '-', disabled: true, type: 'text' },
    { id: 7, label: 'Post', value: '0', disabled: false, type: 'paragraph' },
    { id: 8, label: 'Comment', value: '0', disabled: false, type: 'paragraph' },
    { id: 9, label: 'JoinDay', value: '2023.07.25', disabled: false, type: 'paragraph' },
];

export default accountDetails;