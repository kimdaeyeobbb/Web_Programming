interface Props {
  id: number;
  value: string;
}

const PropsTestChild = ({ id, value }: Props) => {
  return (
    <>
      <div>id값: {id}</div>
      <div>value: {value}</div>
    </>
  );
};

export default PropsTestChild;
