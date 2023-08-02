interface AccountDetail {
    id: number;
    label: string;
    value: string;
    disabled: boolean;
    type: 'text' | 'paragraph';
}

const accountDetails: AccountDetail[] = [
    { id: 1, label: 'Name', value: '-', disabled: true, type: 'text' },
    { id: 2, label: 'Email', value: '-', disabled: true, type: 'paragraph' },
    { id: 3, label: 'Birth', value: '-', disabled: true, type: 'text' },
    { id: 4, label: 'Summary', value: '-', disabled: true, type: 'text' },
    { id: 5, label: 'Github', value: '-', disabled: true, type: 'text' },
    { id: 6, label: 'Website', value: '-', disabled: true, type: 'text' },
    { id: 7, label: 'Technical Skills', value: '-', disabled: true, type: 'text' },
    { id: 8, label: 'Work', value: '-', disabled: true, type: 'text' },
    { id: 9, label: 'Education', value: '-', disabled: true, type: 'text' },
    { id: 10, label: 'Last Access', value: '-', disabled: true, type: 'paragraph' },
];

export default accountDetails;