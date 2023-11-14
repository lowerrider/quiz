import cn from "./Result.module.scss";

function Result({ correct, questionsLenght, onBackClick }) {
  return (
    <div className={cn.result}>
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {correct} ответа из {questionsLenght}
      </h2>

      <button onClick={onBackClick}>Попробовать снова</button>
    </div>
  );
}

export default Result;
