import React, { use } from 'react';
import WhyCard from './WhyCard';

const whyResponse = fetch('/WhyEvent.json').then(res => res.json());


const WhyChoose = () => {
	const whyData = use(whyResponse);
	
    return (
		<div className='space-y-4 py-6'>
			
			<h1 className='text-2xl md:text-3xl my-5 font-bold text-center'>Why You Should Join Our Event?</h1>
			<div className='grid lg:grid-cols-2 gap-10'>
			{
				whyData.map(data => <WhyCard key={data.id} data={data}></WhyCard>)
			}
			</div>
		</div>
	)
};

export default WhyChoose;