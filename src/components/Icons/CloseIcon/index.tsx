/** @format */

import Image from "next/image";
import close from "../../../../public/assets/icons/close.svg";

export default function Close() {
  return <Image className=" cursor-pointer" src={close} alt="add btn" />;
}
