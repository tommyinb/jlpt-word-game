import { Dispatch, SetStateAction } from "react";
import { FileLoader } from "./FileLoader";
import { File } from "./file";
import file from "./n2-verbs.json" assert { type: "json" };

export default function N2VerbLoader({ setFiles }: Props) {
  return <FileLoader setFiles={setFiles} file={file} />;
}

interface Props {
  setFiles: Dispatch<SetStateAction<File[]>>;
}
