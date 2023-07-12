import Link from "next/link";
import React from "react";

const about = () => {
  return (
    <div>
      <ul>
        <li>
      <Link href="/about/1">Yash</Link>

        </li>
        <li>
      <Link href="/about/2">Vaibhav</Link>

        </li>
        <li>
      <Link href="/about/3">Suresh</Link>

        </li>
      </ul>
    </div>
  );
};

export default about;
