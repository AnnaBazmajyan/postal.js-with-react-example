import postal from 'postal';

const turrisExampleChannel = postal.channel('generated');

turrisExampleChannel.subscribe('request', ({request}) => {
    if (request === 'test') {
        turrisExampleChannel.publish('response', {data: 'ok!'});
    }
});
let items = [];
turrisExampleChannel.subscribe('getCoursesRequest', ({request}) => {
    // request = 'coursesList'
    // do api call etc.
    items = ['name', 'age'];
    turrisExampleChannel.publish('getCoursesResponse', {data: items});
});

console.log(items);
export default turrisExampleChannel;
