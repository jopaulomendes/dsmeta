import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
    return (
        <div className="card">

            <h2 className="sales-title">Vendas</h2>

            <div>
                <div className="form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="sales-table">
                    <thead>
                        <tr>
                            <th className="show992">Código</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">11/07/2022</td>
                            <td>Bruna Suellen</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 1000.00,00</td>
                            <td>
                                <div className="btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">11/07/2022</td>
                            <td>Bruna Suellen</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 1000.00,00</td>
                            <td>
                                <div className="btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">11/07/2022</td>
                            <td>Bruna Suellen</td>
                            <td className="show992">15</td>
                            <td className="show992">11</td>
                            <td>R$ 1000.00,00</td>
                            <td>
                                <div className="btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard
