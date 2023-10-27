import "./Button.scss";

interface ButtonProps {
  label?: string;
  children?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  const label = props.children;
  return (
    <button
      className={props.isSelected ? "selected" : undefined}
      onClick={props?.onClick}
    >
      {label}
    </button>
  );
}

export default Button;
