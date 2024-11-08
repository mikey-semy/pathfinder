export interface Option {
    value: string | any;
    label: string;
};

export interface SelectTypes {
    as?: React.ComponentType;
    label: string;
    id: string;
    options: Option[];
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    placeholder?: string;
};