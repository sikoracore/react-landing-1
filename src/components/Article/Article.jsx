import React from 'react'
import './Article.scss'

const Article = ({ imgUrl, date, text }) => {
	return (
		<div className='article'>
			<div className='article__image'>
				<img src={imgUrl} alt='blog__image' />
			</div>
			<div className='article__content'>
				<div>
					<p>{date}</p>
					<h3>{text}</h3>
				</div>
				<p>Read Full Article</p>
			</div>
		</div>
	)
}
// <div className='blog__container-article'>
// 				<div className='blog__container-article_image'>
// 								<div className='blog__container-article_content'>

export default Article
