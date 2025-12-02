export default function TableRow({ data }) {
  console.log(data);

  return (
    <tr>
      <td className="marketId">{data.marketId}</td>
      <td className="marketCode">{data.marketCode}</td>
      <td className="marketName">{data.marketName}</td>
      <td className="todayIncome">{data.todayIncome}</td>
      <td className="todayOrtalama">{data.ortalama}</td>
      <td className="ortalamaAim">{data.aim}</td>
      <td className="kumulatifSatis">{data.kumulatifSatis}</td>
      <td className="kumulatifPlan">{data.kumulatifPlan}</td>
      <td className="aySonuTahmin">{data.aySonuTahmin}</td>
      <td className="aylikPlan">{data.aylikPlan}</td>
      <td className="percent">{data.percent}%</td>
    </tr>
  );
}
