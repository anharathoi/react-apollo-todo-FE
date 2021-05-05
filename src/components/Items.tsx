import React, { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import AddItem from "./AddItem";
import styled from "styled-components";

interface Item {
  id: number;
  title: string;
  done: boolean;
}

const GET_ITEM = gql`
  query GetItem($id: Int!) {
    getItem(id: $id) {
      id
      title
      done
    }
  }
`;

const DELETE_ITEM = gql`
  mutation deleteItem($id: Int!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  width: 250px;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  border: none;
  height: 20px;
`;

export default function Items({ items }: any) {
  const [deleteItem, { data }] = useMutation(DELETE_ITEM);
  return (
    <div>
      <h1>To Do List</h1>
      {items.map((item: Item) => (
        <ItemWrapper key={item.id}>
          <p>{item.title}</p>
          <StyledButton
            onClick={() => deleteItem({ variables: { id: item.id } })}
          >
            X
          </StyledButton>
        </ItemWrapper>
      ))}
      <br />
      <AddItem />
    </div>
  );
}
