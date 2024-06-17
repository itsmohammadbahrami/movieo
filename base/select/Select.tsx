"use client";
import classNames from "classnames";

import useSelect from "./useSelect";
import { IFilterItem } from "@/types";
import { SelectButton } from "./select-button";
import { Dropdown } from "./dropdown";

interface Props {
  items: IFilterItem[];
  handleChange: (item: string) => void;
  col?: number;
  title: string;
  className?: string;
  value?: string;
  testId?: string;
}

const Select: React.FC<Props> = ({
  items,
  handleChange,
  col = 2,
  title,
  className,
  value = "",
  testId,
}) => {
  const { isOpen, toggleOpen, selectedItem, handleSelect, dropdownRef } =
    useSelect({
      initialValue: value,
      handleChange,
    });

  return (
    <div
      ref={dropdownRef}
      className={classNames("relative", className)}
      data-testid={testId}
    >
      <SelectButton
        isOpen={isOpen}
        title={title}
        toggleOpen={toggleOpen}
        testId={testId}
      />
      {isOpen && (
        <Dropdown
          items={items}
          col={col}
          selectedItem={selectedItem}
          handleSelect={handleSelect}
          testId={testId}
        />
      )}
    </div>
  );
};

export default Select;
