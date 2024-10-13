import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Manager from "./pages/manager/Manager";
import Members from "./pages/manager/Members";
import Profile from "./pages/manager/Profile";
import Staff from "./pages/staff/Staff";
import Leaderboard from "./pages/staff/Leaderboard";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/manager/teams" element={<Manager />} />
				<Route path="/manager/members" element={<Members />} />
				<Route path="/manager/profile" element={<Profile />} />

				<Route path="/staff/profile" element={<Staff />} />
				<Route path="/staff/leaderboard" element={<Leaderboard />} />

				<Route path="*" element={<div>404: Page Not Found</div>} />
			</Routes>
		</Router>
	);
}

export default App;
