import { Dispatch, SetStateAction } from "react";
import { FileLoader } from "./FileLoader";
import { File } from "./file";
import file from "./n2-adverbs.json" assert { type: "json" };

export default function N2AdverbLoader({ setFiles }: Props) {
  return <FileLoader setFiles={setFiles} file={file} />;
}

interface Props {
  setFiles: Dispatch<SetStateAction<File[]>>;
}
