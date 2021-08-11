import './questions.css'

const Questions = ({questions}:any) => {

  const getDate = (date:any) => new Date(date).toDateString()

  return (
    <ul className="questions">
      { questions.length ?
        questions.map((question:any, index:number) => (
        <li className="questions__item" key={index}>
          <div className="questions__item-title">{question.question}</div>
          <div className="questions__item-info">{question.customer_name} - {getDate(question.sent_at)}</div>
          <div className="questions__item-paragraph">{question.answer}</div>
        </li>
        ))
        : 'no hay comentarios'
      }
    </ul>
  )
}

export default Questions
