import "./Button.css";

const Button = ({ active, text, ...btnProps }) => {
  return (
    <button
      className={active ? ".btn-active" : "btn-disabled"}
      {...btnProps}
    >
      {text}
    </button>
  );
};

export default Button;
