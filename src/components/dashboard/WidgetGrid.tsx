"use client";

import { IoCartOutline } from "react-icons/io5";
import { SimpleWidget } from "../";
import { useAppSelector } from "@/store";

export const WidgetGrid = () => {
  const count = useAppSelector((state) => state.count.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        label="Contador"
        title={count}
        subTitle="lista de productos"
        icon={<IoCartOutline size={70} className="text-blue-600" />}
        href="/dashboard/counter"
      />
    </div>
  );
};
