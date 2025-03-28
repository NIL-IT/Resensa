const password = 1234554321;
export const config = {
  readonly: false,
  height: 200,
  toolbar: [
    "bold",
    "underline",
    "ol",
    "italic",
    "fullsize",
    "paragraph",
    "uppercase",
    "lowercase",
  ],
  buttons: [
    "bold",
    "underline",
    "ol",
    "italic",
    "fullsize",
    "paragraph",
    "uppercase",
    "lowercase",
  ],
  removeButtons: [
    "ul",
    "outdent",
    "indent",
    "fontsize",
    "brush",
    "file",
    "image",
    "video",
    "table",
    "link",
    "hr",
    "copyformat",
    "source",
    "cut",
    "selectall",
    "undo",
    "redo",
  ],
  showXPathInStatusbar: false,
  showCharsCounter: false,
  showWordsCounter: false,
  toolbarAdaptive: false,
  statusbar: false,
  language: "ru",
  enableDragAndDropFileToEditor: true,
  pastePlain: false,
  pasteAsHTML: true,
  buttonsMD: [
    "bold",
    "underline",
    "ol",
    "italic",
    "fullsize",
    "paragraph",
    "uppercase",
    "lowercase",
  ],
  buttonsSM: [
    "bold",
    "underline",
    "ol",
    "italic",
    "fullsize",
    "paragraph",
    "uppercase",
    "lowercase",
  ],
  buttonsXS: [
    "bold",
    "underline",
    "ol",
    "italic",
    "fullsize",
    "paragraph",
    "uppercase",
    "lowercase",
  ],
  controls: {
    uppercase: {
      name: "Верхний регистер",
      tooltip: "Преобразовать в верхний регистр",
      exec: function (editor) {
        const selection = editor.selection.current();
        if (selection) {
          const range = editor.selection.range;
          const selectedText = range.toString();

          if (selectedText) {
            const uppercaseText = selectedText.toUpperCase();

            // Заменяем выделенный текст
            range.deleteContents();
            range.insertNode(document.createTextNode(uppercaseText));

            // Обновляем выделение
            editor.selection.select(range);
          }
        }
      },
    },
    lowercase: {
      name: "Нижний регистер",
      tooltip: "Преобразовать в нижний регистр",
      exec: function (editor) {
        const selection = editor.selection.current();
        if (selection) {
          const range = editor.selection.range;
          const selectedText = range.toString();

          if (selectedText) {
            const lowercaseText = selectedText.toLowerCase();

            // Заменяем выделенный текст
            range.deleteContents();
            range.insertNode(document.createTextNode(lowercaseText));

            // Обновляем выделение
            editor.selection.select(range);
          }
        }
      },
    },
  },
};
export const slidesMain = [
  {
    image: "/img/slider_1.jpg",

    description:
      "Уверенность в качестве и надежности: строгий контроль качества на всех этапах производства.",
  },
  {
    image: "/img/slider_2.jpg",

    description:
      "Свобода и контроль: индивидуальная конфигурация оборудования под ваши нужды.",
  },
  {
    image: "/img/slider_3.jpg",

    description:
      "Экономия времени и ресурсов: оптимизация процессов проектирования и интеграции.",
  },
  {
    image: "/img/slider_4.jpg",

    description:
      "Снижение эксплуатационных расходов: высокая энергоэффективность и долговечность оборудования.",
  },
  {
    image: "/img/slider_5.jpg",

    description:
      "Партнёрские отношения на основе доверия и поддержки: мы предоставляем поддержку на каждом этапе проекта.",
  },
];
export const recensaAbout = [
  `• Уверенность в качестве и надежности:  строгий контроль качества на всех этапах производства.`,
  `• Свобода и контроль: индивидуальная конфигурация оборудования под ваши нужды.`,
  `• Экономия времени и ресурсов: оптимизация процессов проектирования и интеграции.`,
  `• Снижение эксплуатационных расходов: высокая энергоэффективность и долговечность оборудования.`,
  `• Партнёрские отношения на основе доверия и поддержки: мы предоставляем поддержку на каждом этапе проекта.`,
];

export const sliderTextSub = [
  `Мы используем современные технологии, передовые конструкторские решения, сертифицированные материалы и комплектующие, позволяющие создавать оборудование, которое идеально удовлетворяет потребностям клиента. `,
  `В своей работе стремимся соответствовать самым высоким европейским стандартам производства.`,
  `Над созданием наших установок работает штат высококвалифицированных профессионалов, который имеет многолетний опыт разработки 
и конструирования продукции.`,
];
export const slidesSub = [
  {
    image: "/img/subSlider_1.png",
  },
  {
    image: "/img/subSlider_2.png",
  },

  {
    image: "/img/subSlider_4.png",
  },
];
export const textEquipment = `Lorem ipsum dolor sit amet, consectetur adipiscing 
elit, sed do eiusmod tempor incididunt ut labore et 
dolore magna aliqua. Ut enim ad minim veniam, quis 
nostrud exercitation ullamco laboris nisi ut aliquip 
ex ea commodo consequat.`;
