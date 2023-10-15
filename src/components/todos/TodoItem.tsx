"use client";

import { Todo } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const TodoItem = ({ todos }: { todos: Todo[] }) => {
  const router = useRouter();

  const update = async (todo: Todo) => {
    await fetch(`api/todo/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !todo.complete }),
    });

    router.refresh();
  };

  const deleteTodo = async (todo: Todo) => {
    await fetch(`api/todo/${todo.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: todo.id }),
    });

    router.refresh();
  };

  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id} className="flex px-4">
          <span className="flex gap-2 flex-1">
            <input
              type="checkbox"
              name="check"
              checked={todo.complete}
              onChange={() => update(todo)}
              className="peer cursor-pointer accent-slate-300 "
            />
            <label
              htmlFor={todo.id}
              className="peer-checked:line-through peer-checked:text-slate-500 cursor-pointer"
            >
              {todo.title}
            </label>
            <label
              htmlFor={todo.id}
              className="peer-checked:line-through peer-checked:text-slate-500 cursor-pointer"
            >
              {todo.updatedAt.toLocaleString("en-UK")}
            </label>
          </span>
          <button
            onClick={() => deleteTodo(todo)}
            className="text-slate-500  hover:text-slate-800 mr-3"
          >
            X
          </button>
        </li>
      ))}
    </>
  );
};
