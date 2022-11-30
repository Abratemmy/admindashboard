import person from "../../assets/person.jpg"
export const userColumns = [
    {
      field: "user",
      headerName: "User Name",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
        field: "date",
        headerName: "Date",
        width: 170,
    },
    {
      field: "email",
      headerName: "Email",
      width: 170,
    },
    {
        field: "userType",
        headerName: "User Type",
        width: 120,
    },
  
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.kycstatus}`}>
            {params.row.kycstatus}
          </div>
        );
      },
    },
];
  

export const userRows = [
    {
      id: 1,
      username: "Snow white",
      img: person,
      email: "1snow@gmail.com",
      kycstatus:"Approved",
      date: '17 May 2022',
      userType: "Individual"
    },
    {
      id: 2,
      username: "Jamie Lannister",
      img: person,
      email: "2snow@gmail.com",
      kycstatus:"Update",
      date: '17 May 2022',
      userType: "Corporate"
    },
    {
      id: 3,
      username: "Lannister Temmy",
      img: person,
      email: "3snow@gmail.com",
      kycstatus:"Approved",
      date: '17 May 2022',
      userType: "Joint"
    },
    {
      id: 4,
      username: "Stark",
      img: person,
      email: "4snow@gmail.com",
      kycstatus:"Update",
      date: '17 May 2022',
      userType: "Individual"
    },
    {
      id: 5,
      username: "Targaryen",
      img: person,
      email: "5snow@gmail.com",
      kycstatus:"Approved",
      date: '17 May 2022',
      userType: "Joint"
    },
    {
      id: 6,
      username: "Melisandre",
      img: person,
      email: "6snow@gmail.com",
      kycstatus:"Approved",
      date: '17 May 2022',
      userType: "Corporate"
    },
    {
      id: 7,
      username: "Clifford",
      img: person,
      email: "tt@yahoo.com",
      kycstatus:"Approved",
      date: '17 May 2022',
      userType: "Joint"
    },
    {
      id: 8,
      username: "Frances",
      img: person,
      email: "8snow@gmail.com",
      kycstatus:"Approved",
      date: '17 May 2022',
      userType: "Individual"
    },
    {
      id: 9,
      username: "Roxie",
      img: person,
      email: "snow@gmail.com",
      kycstatus:"Update",
      date: '17 May 2022',
      userType: "Individual"
    },
    {
      id: 10,
      username: "Roxie",
      img: person,
      email: "snow@gmail.com",
      kycstatus:"Approved",
      date: '17 May 2022',
      userType: "Individual"
    },
  ]