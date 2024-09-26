import { ReactNode, useMemo, useState } from "react";
import { SettingContext } from "./SettingContext";
import { useStorageHints } from "./useStorageHints";
import { useStorageOrder } from "./useStorageOrder";
import { useStorageWords } from "./useStorageWords";

export function SettingProvider({ children }: Props) {
  const [active, setActive] = useState(false);

  const { hints, saveHints } = useStorageHints();

  const { order, saveOrder } = useStorageOrder();

  const { words, saveWords } = useStorageWords();

  return (
    <SettingContext.Provider
      value={useMemo(
        () => ({
          active,
          setActive,
          hints,
          saveHints,
          order,
          saveOrder,
          words,
          saveWords,
        }),
        [active, hints, order, saveHints, saveOrder, saveWords, words]
      )}
    >
      {children}
    </SettingContext.Provider>
  );
}

interface Props {
  children: ReactNode;
}
