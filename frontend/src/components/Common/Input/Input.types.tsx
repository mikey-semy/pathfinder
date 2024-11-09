export interface InputTypes {
    type?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    id?: string;
    label?: string | React.ReactNode;
    unitLabel?: string;
    error?: string;
    as?: React.ComponentType;
    asLabel?: React.ComponentType;
    step?: string | number;
    min?: number;
    max?: number;
    precision?: number;
    hasError?: boolean;
    readOnly?: boolean;
}