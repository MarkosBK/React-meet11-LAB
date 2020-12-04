export default function Reciept() {
    let cardStyle={width: '18rem'}
    return (
    <div className="card mx-auto" style={cardStyle}>
        <img src="bludo.jpg" className="card-img-top" alt="img"></img>
        <div className="card-body">
            <h5 className="card-title">Севиче </h5>
            <h4 className="card-text">Севиче — классическое южноамериканское блюдо</h4>
            <p>По сути, севиче — это свежая рыба или морепродукты, маринованные в соке цитрусовых с различными дополнительными ингредиентами</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">300 гр филе белой рыбы (палтус, белый амур, сибас или другие на ваше усмотрение)</li>
            <li className="list-group-item">Горсть измельчённых листьев петрушки</li>
            <li className="list-group-item">1/2 сладкого лука (полукольцами)</li>
            <li className="list-group-item">1 стл соевого соуса (или соль по вкусу)</li>
            <li className="list-group-item">1 лимон</li>
            <li className="list-group-item">1 апельсин</li>
            <li className="list-group-item">Перец чили</li>
            <li className="list-group-item">2 ст л масла из виноградных косточек (можно заменить на оливковое)</li>
            <li className="list-group-item">Листья салата, для подачи (по желанию)</li>
        </ul>
    </div>
    )
  }
  