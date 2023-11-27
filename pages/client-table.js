import { tableData } from "../data/tableData";

export default function Home({ data }) {
  const { columns, rows } = data;
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { columns, rows } = tableData;

  const data = {
    columns,
    rows,
  };

  return {
    props: {
      data,
    },
  };
}
