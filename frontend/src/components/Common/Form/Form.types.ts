export interface FormTypes {
    onSubmit: (e: React.FormEvent) => void;
    children: React.ReactNode;
    error?: string | null;
}