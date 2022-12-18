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
        resourceAreaHeaderContent: 'Rooms',
        resources: '/Others/Others.json',
        events: ''
    });

    calendar.render();
});