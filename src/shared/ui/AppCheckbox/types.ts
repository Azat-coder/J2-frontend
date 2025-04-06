export interface IProps {
  disabled?: boolean;
  id?: string;
}

export type Emits = {
  onChange: [payload: boolean];
};
