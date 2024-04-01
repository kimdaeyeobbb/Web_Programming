interface Props {
  [key: string]: string | number | boolean;
  id: string;
  quantity: number;
  isAvailable: boolean;
  func: Function;
}