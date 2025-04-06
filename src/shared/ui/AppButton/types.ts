type ButtonType = 'primary' | 'secondary' | 'text';
type ButtonSize = 'large' | 'small';

export interface IProps {
  disabled?: boolean;
  invalid?: boolean;
  rounded?: boolean;
  minified?: boolean;
  type?: ButtonType;
  size?: ButtonSize;
}
