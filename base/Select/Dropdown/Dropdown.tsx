import classNames from "classnames";

import { Checkbox } from "@/base";
import { IFilterItems } from "@/types";

interface Props {
  items: IFilterItems[];
  col: number;
  selectedItem: string;
  handleSelect: (value: string) => void;
  testId?: string;
}

const Dropdown: React.FC<Props> = ({
  items,
  col,
  selectedItem,
  handleSelect,
  testId,
}) => (
  <div
    className="absolute z-20 mt-2 shadow-lg bg-gray-850 w-full rounded-md p-4"
    data-testid={`${testId}-dropdown`}
  >
    <div
      className={classNames("grid grid-cols-1 gap-4", {
        "grid-cols-2": col === 2,
      })}
    >
      {items.map((item) => (
        <label
          key={item.value}
          className="flex items-center text-sm cursor-pointer"
        >
          <Checkbox
            data-testid={`${testId}-item-${item.value}`}
            checked={selectedItem === item.value}
            onChange={() => handleSelect(item.value)}
          />
          {item.label}
        </label>
      ))}
    </div>
  </div>
);

export default Dropdown;
