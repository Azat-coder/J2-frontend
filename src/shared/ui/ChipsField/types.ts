export type Item = {
  id: number | string;
  name?: string;
  is_deleted?: boolean;
};

export interface IProps<T extends Item> {
  invalid?: boolean;
  disabled?: boolean;
  placeholder?: string;
  limit?: number;
  getItemValue?: (item: T) => T['name'];
}
