import React from 'react'
import './App.scss'
import { Navbar, Brand, CTA } from './components'
import {
	Header,
	WhatGPT,
	Features,
	Possibility,
	Blog,
	Footer,
} from './containers'

function App() {
	return (
		<div className='App'>
			<div className='gradient__bg'>
				<Navbar />
				<Header />
			</div>
			<Brand />
			<WhatGPT />
			<Features />
			<Possibility />
			<CTA />
			<Blog />
			<Footer />
		</div>
	)
}

export default App
