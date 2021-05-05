import React, { useState, useEffect } from "react";
import Items from "./components/Items";
import { useQuery, gql } from "@apollo/client";

const GET_ALL_ITEMS = gql`
  query GetAllItems {
    getAllItems {
      id
      title
      done
    }
  }
`;

function App() {
  const { loading, data } = useQuery(GET_ALL_ITEMS);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (data) {
      setItems(data.getAllItems);
    }
  }, [data, items]);

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {!loading && <Items items={items} />}
    </>
  );
}

export default App;
