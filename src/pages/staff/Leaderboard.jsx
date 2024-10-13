import StaffSideBar from "../../components/StaffSideBar";
import medalOne from "../../assets/psa/leaderboard_1.png";
import medalTwo from "../../assets/psa/leaderboard_2.png";
import medalThree from "../../assets/psa/leaderboard_3.png";
import normalMedal from "../../assets/psa/leaderboard_4.png";
import userPhoto from "../../assets/psa/user.png";

const Leaderboard = () => {
	return (
		<div className="w-full h-full flex">
			<StaffSideBar />
			<div className="bg-custom-grey-100 w-full flex justify-center items-start p-10">
				<OuterBox background={"white"}>
					<h3 className="text-3xl font-bold">Leaderboard</h3>
					<OuterBox background="#7857FF">
						<div className="space-y-6">
							<InnerCard
								medal={medalOne}
								medalAlt="First"
								name="Jerome"
								dept="Technician"
								email="jerome@google.com"
								hours="8"
								courses="3"
							/>
							<InnerCard
								medal={medalTwo}
								medalAlt="Second"
								name="Melissa"
								dept="Engineer"
								email="melissa@google.com"
								hours="7"
								courses="2"
							/>
							<InnerCard
								medal={medalThree}
								medalAlt="Third"
								name="Thomas"
								dept="Analyst"
								email="thomas@google.com"
								hours="6"
								courses="4"
							/>
							<InnerCard
								medal={normalMedal}
								medalAlt="Fourth"
								name="Sara"
								dept="Designer"
								email="sara@google.com"
								hours="5"
								courses="2"
							/>

							<InnerCard
								medal={normalMedal}
								medalAlt="Fifth"
								name="Andrew"
								dept="Support"
								email="andrew@google.com"
								hours="4"
								courses="1"
							/>
						</div>
					</OuterBox>
				</OuterBox>
			</div>
		</div>
	);
};

const OuterBox = ({ children, background }) => {
	return (
		<div
			className="rounded-[30px] w-[95%] my-5 mr-5 p-5 shadow-lg"
			style={{ backgroundColor: background }} // Pass style as an object
		>
			{children}
		</div>
	);
};

const InnerCard = ({ medal, medalAlt, name, dept, email, hours, courses }) => {
	return (
		<div className="rounded-[20px] w-full p-6 bg-white shadow-md flex items-center gap-6 mb-6">
			{/* Medal Image */}
			<img className="w-12 h-12" src={medal} alt={medalAlt} />

			{/* User Profile and Info */}
			<img
				className="w-16 h-16 rounded-full"
				src={userPhoto}
				alt="user"
			/>

			<div className="ml-4 flex flex-col">
				<h3 className="font-semibold text-2xl text-gray-800">{name}</h3>
				<p className=" text-lg">{dept}</p>
				<p className="text-lg">{email}</p>
			</div>

			{/* Stats */}
			<div className="ml-auto text-xl text-custom-small-grey-400 text-right">
				<p>{hours} hours</p>
				<p>{courses} courses</p>
			</div>
		</div>
	);
};

export default Leaderboard;
