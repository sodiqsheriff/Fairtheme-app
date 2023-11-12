import { useState } from "react";
import { BsClipboard } from "react-icons/bs";
import copy from 'clipboard-copy'

const CopyText =({colorCode}) =>{
    const handleCopyClick =() =>{
        copy(colorCode);
      };
      return(
        <button onClick={handleCopyClick}>
            <BsClipboard size={20} className="text-black dark:text-white" />

        </button>

      )
}

export default CopyText;
