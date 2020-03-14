import React from 'react';
import Card from './Card';

const CardList = ({robotsInCard}) => {
	return (
		<div>
			{
				robotsInCard.map((user,i) => {
					return (
						<Card 
							key={i} 
							id={robotsInCard[i].id} 
							name={robotsInCard[i].name} 
							email={robotsInCard[i].email} 
						/>
					);
				})
			}
		</div> 
	);
};



export default CardList;