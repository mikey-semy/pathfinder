export interface InputTypes {
    type?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    name?: string;
    label?: string | React.ReactNode;
    error?: string;
    as?: React.ComponentType;
    step?: string | number;
    min?: number;
    max?: number;
    precision?: number;
}