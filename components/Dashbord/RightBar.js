import React from 'react';
import {Line, Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Pending',
		'Ongoing',
		'Cancelled',
        'Delivered',
        'Rejected'
	],
	datasets: [{
		data: [100, 100, 75, 100, 75],
		backgroundColor: ["#BE185D" ,"#4338CA", "#1D4ED8", "#047857", "#D97706"],
		hoverBackgroundColor: [" #F472B6","#6366F1", "#3B82F6", "#10B981", "#FBBF24"]
	}]
};

const RightBar = () => (
    <div className="bg-white  w-4/12 rounded-xl border border-gray-100 shadow-sm">
        <div className="border-b p-3 border-gray-100">
		<h2>Pie Chart</h2>
        </div>
        <div className="rounded-xl border">
		<Pie
			data={data}
			width={400}
			height={400}
		/>
        </div>
	</div>
);

export default RightBar