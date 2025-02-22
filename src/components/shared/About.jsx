import React from "react";
import Title from "../ui/Title";
import Slider from "./Slider";

export default function About() {
  return (
    <section className="container pt-[218px]">
      <Title
        text={"о компании"}
        className="text-2xl border-b mb-10 inline-block"
      />
      <div className="flex justify-center">
        <div className="w-[1160px]">
          <Title className="w-[410px]" text={"ВИРТУОЗЫ ВЕНТИЛЯЦИИ"} />

          <div className="text-lg leading-[23px] text-gray-400 mb-[100px]">
            <p className="mb-10 mt-20">
              Мы — профессиональная команда специалистов в области вентиляции и
              кондиционирования воздуха с многолетним опытом работы. Бренд
              RECENSA ориентирован на создание новой производственной базы, а
              также на поставку вентиляционного оборудования под собственной
              торговой маркой.
            </p>
            <p>
              Специализируемся на вентиляционных установках широкого типоряда,
              системах автоматизации и диспетчеризации. А наш опыт в этой сфере
              позволит получить нашему клиенту высокий уровень обслуживания и
              надежности. Проект «Recensa», объединил уникальный человеческий
              ресурс, лучшие инженерные решения и алгоритмы управления системами
              автоматизации вентиляционного оборудования, а еще мы учли всю боль
              наших клиентов, связанную с удобством монтажа, качеством сборки,
              внешним видом и полнотой комплектации каждой установки. Мы знаем о
              продукте всё!
            </p>
          </div>
        </div>
      </div>
      <Slider />
    </section>
  );
}
