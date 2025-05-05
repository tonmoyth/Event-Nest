import React, { use } from 'react';
import WhyCard from './WhyCard';

const whyResponse = fetch('/WhyEvent.json').then(res => res.json());


const WhyChoose = () => {
	const whyData = use(whyResponse);
	
    return (
		<div className='space-y-4 py-10'>
			<span className='px-3 py-2 bg-primary text-white rounded-2xl'>Why choose up</span>
			<h1 className='text-3xl mt-5 font-bold'>Why You Should Join Our Event?</h1>
			<div className='grid lg:grid-cols-2 gap-10'>
			{
				whyData.map(data => <WhyCard data={data}></WhyCard>)
			}
			</div>
		</div>
	)
};

export default WhyChoose;