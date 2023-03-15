import { useEffect } from "react";
import { Book } from "./Book";

export const BookList = (props) => {
  useEffect(() => console.log("Mounting"));

  return (
    <ul>
      {props.books.map((x, i) => (
        <Book key={i} {...x} />
      ))}
    </ul>
  );
};
