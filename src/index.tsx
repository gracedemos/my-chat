import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from "./Login";
import Signup from "./Signup";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login/>}/>
				<Route path="/signup" element={<Signup/>}/>
				<Route path="/" element={<App/>}/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
