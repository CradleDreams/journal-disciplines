import {Route, Routes} from 'react-router-dom';
import Disciplines from './components/Disciplines';
import JournalDisciplines from "./components/JournalDisciplines";

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<JournalDisciplines/>}/>
				<Route path='/:id' element={<Disciplines/>}/>
			</Routes>
		</>
	);
}
export default App;
