import { useCallback, useEffect, useRef, useState } from "react";

interface Props {
  initialValue?: string;
  handleChange: (item: string) => void;
}

const useSelect = ({ initialValue = "", handleChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>(initialValue);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (item: string) => {
    handleChange(item);
    setSelectedItem((prev) => (prev === item ? "" : item));
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return {
    isOpen,
    toggleOpen,
    selectedItem,
    handleSelect,
    dropdownRef,
  };
};

export default useSelect;
