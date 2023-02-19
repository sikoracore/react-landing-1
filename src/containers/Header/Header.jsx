import React from 'react'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import './Header.scss'

const Header = () => {
	return (
		<div className='main section__padding' id='home'>
			<div className='main__content'>
				<h1 className='main__content-title gradient__text'>
					Let's Build Something amazing with GPT-3 OpenAI
				</h1>
				<p className='main__content-desc'>
					Yet bed any for travelling assistance indulgence unpleasing. Not
					thoughts all exercise blessing. Indulgence way everything joy
					alteration boisterous the attachment. Party we years to order allow
					asked of.
				</p>
				<form className='main__content-form'>
					<input type='email' placeholder='Your Email Address' />
					<button className='button' type='button'>
						Get Started
					</button>
				</form>
				<div className='main__content-people'>
					<img src={people} alt='peopleImg' />
					<p>1,600 people requested access a visit in last 24 hours</p>
				</div>
			</div>
			<div className='main__image'>
				<img src={ai} alt='mainImage' />
			</div>
		</div>
	)
}

export default Header
