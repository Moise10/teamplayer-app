import React from 'react'
import Main from './pages/Main'
import Header from './components/Header'
import CssBaseline from '@mui/material/CssBaseline';



function App() {
  return (
		<>
			<CssBaseline />
			<div className="App">
				{/* <Header /> */}
				<div className="app__body">
					<Main />
				</div>
			</div>
		</>
	);
}

export default App;
