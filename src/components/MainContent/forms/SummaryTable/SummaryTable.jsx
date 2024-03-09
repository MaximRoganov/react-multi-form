import style from "./SummaryTable.module.css"
export default function SummaryTable(){
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td className={style.firstCell}>
              <p>Arcade (Monthly)</p>
              <button>Change</button>
            </td>
            <td className={style.secondCell}>$9/mo</td>
          </tr>
          <tr>
            <td className={style.firstCell}>Online service</td>
            <td className={style.secondCell}>+$1/mo</td>
          </tr>
          <tr>
            <td className={style.firstCell}>Larger storage</td>
            <td className={style.secondCell}>+$2/mo</td>
          </tr>
          <tr>
            <td className={style.firstCell}>Total (per month)</td>
            <td className={style.secondCell}>+$12/mo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}