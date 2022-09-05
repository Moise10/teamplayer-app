import React from 'react'
import Main from './pages/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import CssBaseline from '@mui/material/CssBaseline';



function App() {
  return (
		<>
			<CssBaseline />
			<div className="App">
				<Header />
				<div className="app__body">
					<Main />
				</div>
				<Footer />
			</div>
		</>
	);
}

export default App;
