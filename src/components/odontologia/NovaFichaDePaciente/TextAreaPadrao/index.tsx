import { DivTextAreaPadrao } from './style';


interface Props {
    label: string;
    linhas?: number;
    value?: string;
    onChange?: (value: string) => void;
}


export default function TextAreaPadrao({ label, linhas = 3, value = '', onChange }: Props) {
    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        if (onChange) onChange(e.target.value);
    }


    return (
        <DivTextAreaPadrao>
            <label>{label}</label>
            <textarea rows={linhas} value={value} onChange={handleChange} />
        </DivTextAreaPadrao>
    );
}