import ManagerSideBar from "../../components/ManagerSideBar";
import { useLocation } from "react-router-dom";
import BentoCard from "../../components/BentoCard";
import teamService from "../../services/teamServices";

const TEAMS = [
	{ name: "Team A", score: "83" },
	{ name: "Team B", score: "73" },
	{ name: "Team C", score: "68" },
	{ name: "Team D", score: "65" },
	{ name: "Team E", score: "58" },
];

const HEADER = {
	mainHeader: "Teams",
	subHeaders: ["Team Name", "Scores"],
};

const Manager = () => {
	const location = useLocation();
	const { personName } = location.state || {};

	return (
		<div className="flex">
			<ManagerSideBar personName={personName} />
			<div className="w-full  ml-[37px]">
				<h2 className="text-2xl font-semibold mt-[44px] mb-[55px]">
					Good morning {personName}!
				</h2>
				<BentoCardTeams
					headers={HEADER}
					teams={TEAMS}
					currentPage={1}
					totalPages={3}
				/>
			</div>
		</div>
	);
};

const BentoCardTeams = ({
	headers,
	teams,
	currentPage,
	totalPages,
	handlePageChange,
}) => {
	//const [teamNames, setTeamNames] = useState('');

	const handleGenerateClick = async () => {
		const getTeams = async () => {
			const team = await teamService.getMembers(); // Fetch the data
			return team;
		};
		const teamData = await getTeams();

		const setTeamData = (teamData) => {
			localStorage.setItem("teamData", JSON.stringify(teamData));
		};
		setTeamData(teamData);
		console.log("this is data from Manager.jsx", teamData);
	};

	return (
		<div className="w-full relative max-w-5xl p-6 bg-white shadow-lg rounded-[30px] border border-gray-200 mb-2">
			<BentoCard headers={headers} />

			{/* Teams and Scores Section */}
			<div className="flex space-x-6 mx-10">
				{/* Left Column - Teams */}
				<div className="flex-[2] space-y-4">
					{teams.map((team, index) => (
						<div
							key={index}
							className="h-[55px] flex items-center justify-between space-x-4 border-b border-gray-200 pb-4"
						>
							{/* Team Name */}
							<div className="font-semibold text-gray-800">
								{team.name}
							</div>

							{/* Team Score */}
							<div className="font-semibold text-gray-800 pr-8">
								{team.score}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Button Below the last score */}
			<div className="mt-3 flex justify-center">
				<GenerateButton handleClick={() => handleGenerateClick()} />
			</div>

			{/* Page Navigator */}
			<div className="mt-3 flex justify-center items-center">
				<button
					className="px-3 py-1 text-gray-600 hover:text-gray-800"
					onClick={() => handlePageChange("prev")}
					disabled={currentPage === 1}
				>
					{"<"}
				</button>
				<div className="mx-4 text-gray-800">
					Page {currentPage} of {totalPages}
				</div>
				<button
					className="px-3 py-1 text-gray-600 hover:text-gray-800"
					onClick={() => handlePageChange("next")}
					disabled={currentPage === totalPages}
				>
					{">"}
				</button>
			</div>
		</div>
	);
};

const GenerateButton = ({ handleClick }) => {
	// when button here is pressed, a new team will be generated by retrieving new teams data

	return (
		<button
			onClick={handleClick}
			className="px-10 py-2 bg-custom-purple-600 text-white rounded-[25px] hover:bg-custom-purple-500"
		>
			Generate Team
		</button>
	);
};

export default Manager;
