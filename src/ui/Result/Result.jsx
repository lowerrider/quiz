import cn from "./Result.module.scss";

function Result({ correct, questionsLenght }) {
  return (
    <div className={cn.result}>
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {correct} ответа из {questionsLenght}
      </h2>
      <a href="#" onclick={window.location.reload()}>
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

export default Result;
