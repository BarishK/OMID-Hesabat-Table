import TableRow from "./TableRow";

import testData from "../testData";

export default function Table() {
  // Function for get today
  function getTodayDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const todayDate = getTodayDate();

  // Gecici test icin yazilmis datalar
  const datas = testData;

  return (
    <div className="container mt-4">
      <table className="table table-striped-columns text-center">
        {/* BAŞLIKLAR BURADA */}
        <thead className="table-dark">
          <tr>
            <th scope="col">Bölge</th>
            <th scope="col">Kod</th>
            <th scope="col">Mağaza adı</th>
            <th scope="col">{todayDate}</th>
            <th scope="col">Ortalama Günlük Satış</th>
            <th scope="col">Ortalama Günlük Plan</th>
            <th scope="col">Kümülatif Satış</th>
            <th scope="col">Kümülatif Plan</th>
            <th scope="col">Ay Sonu Tahmini</th>
            <th scope="col">Aylık Plan</th>
            <th scope="col">%</th>
          </tr>
        </thead>

        <tbody>
          {datas.map((data, index) => {
            return <TableRow data={data} key={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
