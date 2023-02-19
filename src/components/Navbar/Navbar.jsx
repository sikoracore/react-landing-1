import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './Navbar.scss'
import '../../styles/variables.scss'
import logo from '../../assets/logo.svg'

const Menu = () => (
	<>
		<li>
			<a href='#home'>Home</a>
		</li>
		<li>
			<a href='#wgpt3'>What is GPT3?</a>
		</li>
		<li>
			<a href='#possibility'>Open AI</a>
		</li>
		<li>
			<a href='#features'>Case Studies</a>
		</li>
		<li>
			<a href='#blog'>Library</a>
		</li>
	</>
)
const Navbar = () => {
	const [toggle, setToggle] = useState(false)

	return (
		<div className='nav'>
			<div className='nav__links'>
				<div className='nav__links-logo'>
					<img src={logo} alt='logo' />
				</div>
				<ul className='nav__links-container'>
					<Menu />
				</ul>
			</div>
			<div className='nav__sign'>
				<p>Sing In</p>
				<button className='button'>Sign Up</button>
			</div>
			<div className='nav__menu'>
				{toggle ? (
					<RiCloseLine
						color='#fff'
						size={27}
						onClick={() => setToggle(false)}
					/>
				) : (
					<RiMenu3Line color='#fff' size={27} onClick={() => setToggle(true)} />
				)}
				{toggle && (
					<div className='nav__menu-container scale-up-center'>
						<div className='nav__menu-container_links'>
							<Menu />
						</div>
						<div className='nav__menu-container_links-sign'>
							<p>Sing In</p>
							<button className='button'>Sign Up</button>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Navbar
