import cn from "./Menu.module.scss";

const buttonsCategories = [
  { id: 0, name: "Исскуство" },
  { id: 1, name: "Космос" },
  { id: 2, name: "Фильмы" },
  { id: 3, name: "Еда мира" },
  { id: 4, name: "Звездные войны" },
  { id: 5, name: "Marvel" },
  { id: 6, name: "Флаги" },
  { id: 7, name: "React" },
];
function Menu({ setCategory }) {
  return (
    <div>
      <h1>Выбери тему вопросов</h1>
      {buttonsCategories.map((category) => (
        <button className={cn.butMenu} onClick={() => setCategory(category.name)} key={category.id}>
          {category.name}
        </button>
      ))}
      {/* <button>Искусство</button>
      <button>Космос</button>
      <button>Фильмы</button>
      <button>Еда мира</button>
      <button>Звездные войны</button>
      <button>Marvel</button>
      <button>Флаги</button>
      <button>React</button> */}
    </div>
  );
}

export default Menu;
