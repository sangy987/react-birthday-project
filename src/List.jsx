import React from 'react'



const List = (props) => {
	const { people } = props
	return (
		people.map(people => (
			<article class="person">
				<img src={people.image} alt={people.name} />
				<div>
					<h4>{people.name}</h4>
					<p>{people.age}</p>
				</div>
			</article>
		))
	)
}

export default List
