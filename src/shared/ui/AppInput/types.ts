type InputType = 'text' | 'number' | 'date';
type Size = 'large' | 'small';

export interface IProps {
  type?: InputType;
  disabled?: boolean;
  invalid?: boolean;
  size?: Size;
  maxLength?: number;
  integerMaxLength?: number;
  fractionalMaxLength?: number;
}
