import { Button as AntButton, type ButtonProps } from "antd";

export default function Button(props: ButtonProps): React.JSX.Element {
  return <AntButton {...props} />;
}
