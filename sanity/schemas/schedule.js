export default {
    name: 'schedule',
    type: 'document',
    title: 'Schedule',
    fields:[
        {
          name: 'event',
					type: 'string',
					title: 'Event Name',
				},
				{
					name:'order',
					type:'number',
					title:'Display Order',
				},
				{
					name:'venue',
					type:'string',
					title:'Venue',
					options: {
						list: [
							{title: 'DJ Hall', value: 'djHall'},
							{title: 'Sargam Stage', value: 'sargamStage'},
							{title: 'CGPU Hall', value: 'cgpuHall'},
							{title: 'Substage', value: 'substage'},
							{title: 'CETAA Hall', value: 'ceataaHall'},
							{title: 'EC Seminar Hall', value: 'ecSeminarHall'},
							{title: 'PG Kuriakose Hall', value: 'pgKuriakoseHall'},
							{title: 'Mech Seminar Hall', value: 'mechSeminarHall'},
							{title: 'EEE PG Seminar Hall', value: 'eeePgSeminarHall'},
							{title: 'Civil Seminar Hall 1', value: 'civilSeminarHall1'},
							{title: 'Civil Seminar Hall 2', value: 'civilSeminarHall2'},
							{title: 'EC Conference Hall', value: 'ecConferenceHall'},
							{title: 'Archie Department', value: 'archieDept'},
							{title: 'CS', value: 'cs'},
							{title: 'MCA', value: 'mca'},
							{title: 'Dhwani Stage', value: 'dhwaniStage'},
							{title: 'Other Venues', value: 'otherVenues'}
						],
						layout: 'radio',
					},
				},
				{
					name: 'speaker',
					type: 'string',
					title: 'Speaker',
        },
				{
					name:'job',
					type:'string',
					title:'Job Title',	
				},
				{
					name:'image',
					type:'image',
					title:'Image',
				},
				{
					name:'time',
					type:'string',
					title:'Time',
					description:'Format 11:00 AM - 12:00 PM',
				}

    ]
}