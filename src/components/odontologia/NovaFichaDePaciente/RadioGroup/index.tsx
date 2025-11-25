import React from 'react';
import { DivRadioGroup } from './style';


interface Props {
    titulo: string;
    opcoes: string[];
    name?: string;
    onChange?: (value: string) => void;
}


export default function RadioGroup({ titulo, opcoes, name, onChange }: Props) {
    const groupName = name ?? titulo.replace(/\s+/g, '_').toLowerCase();


    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (onChange) onChange(e.target.value);
    }


    return (
        <DivRadioGroup>
            <span>{titulo}</span>
            <div className="grupo-opcoes">
                {opcoes.map((op) => (
                    <label key={op}>
                        <input type="radio" name={groupName} value={op} onChange={handleChange} />
                        {op}
                    </label>
                ))}
            </div>
        </DivRadioGroup>
    );
}