export interface Option {
    value: string;
    label: string;
};

export interface SelectTypes {
    options: Option[];
    value: number | null;
    onChange: (value: number | null) => void;
    placeholder: string;
};