export interface Option {
    value: string | any;
    label: string;
};

export interface SelectTypes {
    label: string;
    name: string;
    options: Option[];
    value: string | null;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    placeholder: string;
};