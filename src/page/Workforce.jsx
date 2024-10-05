/** @format */

const team = [
  {
    id: 1,
    name: "John Doe",
    role: "Event Manager",
    imgUrl:
      "https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Marketing Head",
    imgUrl:
      "https://static1.squarespace.com/static/656f4e4dababbd7c042c4946/657236350931ee4538eea52c/65baf15103d8ad2826032a8a/1727029299965/how-to-stop-being-a-people-pleaser-1_1.jpg?format=1500w",
  },
  {
    id: 3,
    name: "Raj Patel",
    role: "Logistics",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrKhO81lwBpTySRIn6KqSSLNbiUA5s99aqWg&s",
  },
  {
    id: 4,
    name: "Sara Khan",
    role: "Creative Director",
    imgUrl:
      "https://img.freepik.com/free-photo/female-worker-against-office_155003-12608.jpg",
  },
];
function Workforce() {
  return (
    <section className=" min-h-screen px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl text-[#DECBA7] font-bold">
            Meet the Workforce
          </h1>
          <p className="text-xl text-gray-400 mt-4">
            Behind every great fest, there’s a great team!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-[#1a1a1a] shadow-lg rounded-lg p-6 hover:bg-[#AC1212] transition-all border-2 border-[#DECBA7]"
            >
              <img
                src={member.imgUrl}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto"
              />
              <div className="text-center mt-4">
                <h2 className="text-2xl text-[#DECBA7] font-semibold">
                  {member.name}
                </h2>
                <p className="text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Workforce;
