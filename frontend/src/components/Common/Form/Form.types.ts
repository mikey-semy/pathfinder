export interface FormTypes {
    as?: React.ComponentType;
    onSubmit?: (e: React.FormEvent) => void;
    onReset?: (e: React.FormEvent) => void;
    children: React.ReactNode;
    error?: string | null;
    isSubmitDisabled?: boolean;
}