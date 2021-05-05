import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const ADD_ITEM = gql`
  mutation AddItem($title: String, $done: Boolean) {
    addItem(title: $title, done: $done) {
      id
      title
      done
    }
  }
`;

export default function AddItem() {
  const [item, setItem] = useState("");
  const [addItem, { data }] = useMutation(ADD_ITEM);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addItem({ variables: { title: item, done: true } });
      }}
    >
      <input type="text" onChange={(e) => setItem(e.target.value)} />
      <button type="submit">Add Item</button>
    </form>
  );
}
