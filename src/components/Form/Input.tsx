import React from "react";
import { TextInputProps } from 'react-native';

import { Container } from '../Form/styles';

type Props = TextInputProps;

export function Input({ ...rest }: Props) {
    return (
        <Container {...rest} />
    );
}