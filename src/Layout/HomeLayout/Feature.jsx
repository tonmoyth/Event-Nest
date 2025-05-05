import React from 'react';
import sportsImage from '../../assets/sports.jpg'
import Button from '../../components/Header/Button/Button';

const Feature = () => {
    return (
        
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src={sportsImage} alt="" className="h-80 object-cover dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<h3 className="text-3xl font-bold uppercase">Powered by Running Spirit</h3>
				<p className="my-6 dark:text-gray-600">Sport is a form of physical activity or game. Often competitive and organized, sports use, maintain, or improve physical ability and skills. They also provide enjoyment to participants and, in some cases, entertainment to spectators..</p>
				<div>
				<Button level='View More'></Button>
				</div>
			</div>
		</div>
	
    );
};

export default Feature;