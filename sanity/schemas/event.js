export default {
    name: 'event',
    type: 'document',
    title: 'Events',
    fields: [
      {
        name:'order',
        type:'number',
        title:'Display Order',
      },
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
      },
      {
        name: 'poster',
        type: 'image',
        title: 'Poster',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'link',
        type: 'string',
        title: 'Form Link',
      },
      {
        name:'category',
        type:'string',
        title:'Category',
        options:{
          list:[
            {title:'Summit Day Events', value:'summitDay'},
            {title:'Road to Summit', value:'roadToSummit'},
            {title:'Everything is Entrepreneurship', value:'everythingEntrepreneurship'},
          ],
          layout: 'radio',
        }
      },
      {
        name:'buttonText',
        type:'string',
        title:'Button Text',
        options:{
          list:[
            {title:'Register Now', value:'registerNow'},
            {title:'Event completed', value:'eventCompleted'},
            {title:'Forthcoming Results', value:'resultsComing'},
            {title:'Guidelines', value:'guidelines'},
          ],
          layout: 'radio',
        }
      }
    ],
  };
  