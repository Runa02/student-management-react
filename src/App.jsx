import { useEffect, useState } from "react";

const initialStudents = [
  {
    nim: "2301001",
    nama: "Andi Saputra",
    noHp: "081234567801",
    email: "andi@mail.com",
    alamat: "Surabaya",
    prodi: "Informatika",
    tahunMasuk: 2023,
  },
  {
    nim: "2301002",
    nama: "Budi Santoso",
    noHp: "081234567802",
    email: "budi@mail.com",
    alamat: "Malang",
    prodi: "Sistem Informasi",
    tahunMasuk: 2023,
  },
  {
    nim: "2301003",
    nama: "Citra Amelia",
    noHp: "081234567803",
    email: "citra@mail.com",
    alamat: "Lumajang",
    prodi: "Informatika",
    tahunMasuk: 2023,
  },
  {
    nim: "2401001",
    nama: "Dinda Putri",
    noHp: "081234567804",
    email: "dinda@mail.com",
    alamat: "Jember",
    prodi: "Manajemen",
    tahunMasuk: 2024,
  },
  {
    nim: "2401002",
    nama: "Eko Pratama",
    noHp: "081234567805",
    email: "eko@mail.com",
    alamat: "Kediri",
    prodi: "Informatika",
    tahunMasuk: 2024,
  },
];

const dateFormatter = new Intl.DateTimeFormat("id-ID", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

const timeFormatter = new Intl.DateTimeFormat("id-ID", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

export default function App() {
  // A. Menyimpan data dummy mahasiswa dalam React state.
  const [students] = useState(initialStudents);

  // B. Menyimpan waktu saat ini dalam React state.
  const [currentTime, setCurrentTime] = useState(() => new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const totalStudents = students.length;
  const totalPrograms = new Set(students.map((student) => student.prodi)).size;

  return (
    <div className="app-shell">
      <main className="main-content">
        <section className="page-content">
          <div className="page-heading">
            <div>
              <h1>Daftar Data Mahasiswa</h1>
            </div>
          </div>

          <div className="stats-grid">
            <article className="stat-card">
              <h3>Jumlah Mahasiswa</h3>
              <div className="stat-value">
                {totalStudents} <span>Mahasiswa</span>
              </div>
              <div className="stat-foot">Data mahasiswa yang terdaftar</div>
            </article>
            <article className="stat-card">
              <h3>Program Studi Aktif</h3>
              <div className="stat-value">
                {totalPrograms} <span>Program Studi</span>
              </div>
              <div className="stat-foot">Berdasarkan data mahasiswa</div>
            </article>
            <article className="stat-card clock-card">
              <h3>Jam Digital</h3>
              <div
                className="clock-value"
                role="timer"
                aria-label="Jam digital"
              >
                {timeFormatter.format(currentTime)}
              </div>
              <div className="stat-foot">
                {" "}
                {dateFormatter.format(currentTime)}
              </div>
            </article>
          </div>

          <section className="table-card" aria-labelledby="student-table-title">
            <div className="table-heading">
              <div>
                <div className="table-title-row">
                  <h2 id="student-table-title">Data Mahasiswa</h2>
                </div>
              </div>
            </div>
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>NIM</th>
                    <th>NAMA MAHASISWA</th>
                    <th>NO. HP</th>
                    <th>EMAIL</th>
                    <th>ALAMAT</th>
                    <th>PROGRAM STUDI</th>
                    <th>TAHUN MASUK</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.nim}>
                      <td className="nim-cell">{student.nim}</td>
                      <td>
                        <div className="student-cell">
                          <div className="student-avatar">
                            {student.nama
                              .split(" ")
                              .map((word) => word[0])
                              .slice(0, 2)
                              .join("")}
                          </div>
                          <span>{student.nama}</span>
                        </div>
                      </td>
                      <td>{student.noHp}</td>
                      <td>
                        <a href={`mailto:${student.email}`}>{student.email}</a>
                      </td>
                      <td>{student.alamat}</td>
                      <td>
                        <span className="program-pill">{student.prodi}</span>
                      </td>
                      <td>{student.tahunMasuk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="table-footer">
              Menampilkan <strong>{totalStudents}</strong> dari{" "}
              <strong>{totalStudents}</strong> mahasiswa{" "}
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
