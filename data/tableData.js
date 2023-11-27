export const tableData = {
  columns: ["ID", "이름", "나이"],
  rows: Array.from({ length: 30000 }, (_, i) => ({
    id: i + 1,
    name: `홍길동${i + 1}`,
    age: Math.floor(Math.random() * 100),
  })),
};
