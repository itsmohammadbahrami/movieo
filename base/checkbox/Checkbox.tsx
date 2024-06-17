import classNames from "classnames";

type Props = {
  checked?: boolean;
  onChange: VoidFunction;
};

const Checkbox: React.FC<Props> = ({ checked = false, onChange, ...props }) => (
  <input
    {...props}
    type="checkbox"
    checked={checked}
    onChange={onChange}
    className={classNames(
      "ml-2 text-gray-800  cursor-pointer  bg-transparent rounded focus:ring-0 focus:ring-offset-0",
      {
        "!border-yellow-500": checked,
        "!border-white": !checked
      }
    )}
  />
);

export default Checkbox;
