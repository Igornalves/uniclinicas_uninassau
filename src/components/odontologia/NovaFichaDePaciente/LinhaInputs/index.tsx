import type { PropsWithChildren } from 'react';
import { StyledLinha } from './style';


interface Props {
    colunas?: number;
}


export default function LinhaInputs({ colunas, children }: PropsWithChildren<Props>) {
    return <StyledLinha colunas={colunas}>{children}</StyledLinha>;
}