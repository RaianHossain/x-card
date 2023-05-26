import * as React from 'react';
import { Button } from 'react-native-paper';
import { COLORS } from '../constants';

const GeneralButton = ({icon, title, onPress}) => (
  <Button icon={icon} mode="contained" onPress={onPress} buttonColor={COLORS.primary}>
    {title}
  </Button>
);

export default GeneralButton;