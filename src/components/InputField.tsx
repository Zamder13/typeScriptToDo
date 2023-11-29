import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

export const InputField = ({ todo, setTodo }: Props) => {
  return (
    <form className="input">
      <input
        className="input__box"
        type="input"
        placeholder="Enter a task..."
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};
