import "./CriptoHistorial.css"

const CriptoHistory = ({ history }) => {
  return (
    <div className="history">
      <table>
        <thead>
          <tr className="fijos">
            <th>Fecha</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {history.map(({date, priceUsd, time}) => (
            <tr key={time}>
              <td className="label-history">{new Date(date).toDateString()}</td>
              <td className="price-history">{parseFloat(priceUsd).toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CriptoHistory