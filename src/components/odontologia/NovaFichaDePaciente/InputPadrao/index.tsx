import { useState } from 'react';
import { DivInputPadrao } from './style';
import { applyMask } from '../helpers/masks';



interface Props {
    label: string;
    type?: string;
    mask?: 'cpf' | 'telefone' | 'cep' | string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
}


export default function InputPadrao({
    label,
    type = 'text',
    mask,
    placeholder,
    value: externalValue,
    onChange,
}: Props) {
    const [value, setValue] = useState(externalValue ?? '');


    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        let v = e.target.value;
        if (mask) {
            v = applyMask(v, mask);
        }
        setValue(v);
        if (onChange) onChange(v);
    }


    return (
        <DivInputPadrao>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
            />
        </DivInputPadrao>
    );
}