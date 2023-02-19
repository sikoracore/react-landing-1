import React from 'react'
import { google, slack, atlassian, dropbox, shopify } from './imports'
import './Brand.scss'

const Brand = () => {
	return (
		<div className='brand section__padding'>
			<div className='brand__item'>
				<img src={google} alt='googleImg' />
			</div>
			<div className='brand__item'>
				<img src={slack} alt='slackImg' />
			</div>
			<div className='brand__item'>
				<img src={atlassian} alt='atlassianImg' />
			</div>
			<div className='brand__item'>
				<img src={dropbox} alt='dropboxImg' />
			</div>
			<div className='brand__item'>
				<img src={shopify} alt='shopifyImg' />
			</div>
		</div>
	)
}

export default Brand
