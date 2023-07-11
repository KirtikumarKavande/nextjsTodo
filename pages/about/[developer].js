import { useRouter } from "next/router";
import React from "react";

const developer = () => {
  const data = useRouter();
  console.log(data.query.developer);
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },

    { id: 2, name: "Vaibhav", role: "Backend Developer" },

    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  return (
    <>
      {details.map((item) => {
        if (Number(data.query.developer) === item.id) {
          return (
            <>
              <div>{item.name}</div>
              <div>{item.role}</div>
            </>
          );
        }
      })}
    </>
  );
};

export default developer;
