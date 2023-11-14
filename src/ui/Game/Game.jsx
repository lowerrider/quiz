import cn from "./Game.module.scss";

function Game({ qustion, onClickVarioant, step, questions }) {
  const percentStep = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className={cn.progress}>
        <div style={{ width: `${percentStep}%` }} className={cn.progress__inner}></div>
      </div>
      <h1>{qustion.title}</h1>
      <ul>
        {qustion.variants.map((text, index) => (
          <li onClick={() => onClickVarioant(index)} key={index}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Game;
