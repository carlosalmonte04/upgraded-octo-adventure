import React from 'react';
import {Text, TextInput, TextInputProps} from 'react-native';

type TextInputLabelProps = TextInputProps & {
  label: string;
};

export function LabeledTextInput(props: TextInputLabelProps): JSX.Element {
  const label = props.label;

  return (
    <>
      <Text>{label}</Text>
      <TextInput {...props} />
    </>
  );
}
