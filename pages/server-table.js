import { tableData } from "../data/tableData";

export default function Home({ htmlContent }) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { columns, rows } = tableData;
  // HTML 테이블 생성
  const htmlContent = `
    <table>
      <thead>
        <tr>${columns.map((col) => `<th>${col}</th>`).join("")}</tr>
      </thead>
      <tbody>
        ${rows
          .map(
            (row) =>
              `<tr><td>${row.id}</td><td>${row.name}</td><td>${row.age}</td></tr>`
          )
          .join("")}
      </tbody>
    </table>
  `;

  return {
    props: {
      htmlContent,
    },
  };
}
