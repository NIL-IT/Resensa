import React from "react";
import { useSelector } from "react-redux";
import Title from "../ui/Title";

export default function ProductDescription({ currentProduct }) {
  //   const { equipmentById, solutionsById } = useSelector(({ user }) => user);
  //   const productID = equipmentById ? equipmentById : solutionsById;
  console.log(currentProduct);
  return (
    <section className="container  pt-10 pb-5 lg:pt-20 lg:pb-10">
      <Title
        text={"описание"}
        className="ml-5 xs:ml-0 inline-block text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl font-normal mb-[30px] xs:mb-[35px] sm:mb-[40px] md:mb-[45px] lg:mb-[50px] xl:mb-[50px] 2xl:mb-[50px] 3xl:mb-[50px] border-b border-b-gray-400"
      />
      <div className="flex justify-center px-5 sm:p-0">
        <div className="w-[1160px]">{currentProduct.extra_description}</div>
      </div>
    </section>
  );
}
