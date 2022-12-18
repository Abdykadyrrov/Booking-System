document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        timeZone: 'UTC',
        headerToolbar: {
            left: 'today prev,next',
            center: 'title',
            right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
        },
        initialView: 'resourceTimelineDay',
        scrollTime: '08:00',
        aspectRatio: 1.5,
        views: {
            resourceTimelineDay: {
                slotDuration: '00:15'
            },
            resourceTimelineTenDay: {
                type: 'resourceTimeline',
                duration: {
                    days: 10
                },
                buttonText: 'week'
            }
        },
        
        editable: true,
        selectable: true,
        selectHelper: true,
        select: function(start, end, alldays){
            $('#bookModal').modal('toggle');
        },
        resourceAreaHeaderContent: 'Rooms',
        resources: '/B-block/B-block.json',
        events: [
            {"id": "1",
            "resourceId": "B",
            "title": "act",
            "start": '2022-12-09 10:15:00',
            "end": "2022-12-09 11:15:00"
            }
        ],

    
    });

    calendar.render();
});
let id = 0;
function Data(event){
    // event.preventDefault();
    let name = document.getElementById("name");
    console.log(name.value);
    let start = document.getElementById("start")
    console.log(start.value);
    let end = document.getElementById("end");
    console.log(end.value);
    // B-block.json
    console.log(B_events.json);
    
    id+=1;
}