import { Input as AntInput, type InputProps } from "antd";

export default function Input(props: InputProps): React.JSX.Element {
  return <AntInput {...props} />;
}
