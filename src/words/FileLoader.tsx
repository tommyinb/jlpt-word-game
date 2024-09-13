import { Dispatch, SetStateAction, useEffect } from "react";
import { File } from "./file";

export function FileLoader({ file, setFiles }: Props) {
  useEffect(() => {
    setFiles((files) => [...files, file]);

    return () => {
      setFiles((files) => files.filter((f) => f !== file));
    };
  }, [file, setFiles]);

  return <></>;
}

interface Props {
  file: File;
  setFiles: Dispatch<SetStateAction<File[]>>;
}
