/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetTodosQuery } from "@/redux/api/api";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useState } from "react";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");

  //* From server
  const { data: todos, isError, isLoading } = useGetTodosQuery(priority);

  if (isLoading) {
    return (
      <p className="text-center text-2xl font-semibold text-slate-500">
        Loading...
      </p>
    );
  }
  if (isError) {
    return (
      <p className="text-center text-2xl font-semibold text-rose-500">
        Something went wrong while loading Todos.
      </p>
    );
  }
  return (
    <div>
      <div className="flex justify-between mb-5 ">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        <div className="bg-white/60 shadow-xl p-5 w-full h-full rounded-lg space-y-3">
          {todos?.data?.map((item: any) => (
            <TodoCard {...item} />
          ))}
        </div>
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>{' '}
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
