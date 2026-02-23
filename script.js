const eventContainer = document.querySelector('#eventContainer');

// All events you want to listen for
const events = [
    // Touch
    'touchstart', 'touchmove', 'touchend', 'touchcancel',

    // Pointer
    'pointerover', 'pointerenter', 'pointerdown',
    'pointerup', 'pointerout', 'pointerleave', 'pointercancel',

    // Mouse / Click
    'mousedown', 'mouseup', 'click', 'dblclick',
    'mouseover', 'mouseenter', 'mouseout', 'mouseleave',
    'contextmenu'
];
  
// Attach listeners to the whole document (or any element you want)
events.forEach(eventName => {
    eventContainer.addEventListener(eventName, e => {
        console.log(e);
        // 1. Create a new <p> element
        const p = document.createElement('p');
        // 2. Add text to the <p>
        p.textContent = eventName + ` ( ${Math.round(e.timeStamp * 100) / 100})`;
        // 3. Append the <p> to the div
        const eventOutput = document.getElementById('eventOutput');
        eventOutput.appendChild(p);

        if (eventName.includes('touch')) {
            const ptouch = document.createElement('p');
            ptouch.textContent = eventName;
            const eventOutputTouch = document.getElementById('eventOutputTouch');
            eventOutputTouch.appendChild(ptouch);
        } else if (eventName.includes('pointer')) {
            const ppointer = document.createElement('p');
            ppointer.textContent = eventName;
            const eventOutputPointer = document.getElementById('eventOutputPointer');
            eventOutputPointer.appendChild(ppointer);
        } else {
            const pclick = document.createElement('p');
            pclick.textContent = eventName;
            const eventOutputClick = document.getElementById('eventOutputClick');
            eventOutputClick.appendChild(pclick);
        }
    });
});
