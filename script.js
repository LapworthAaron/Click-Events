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
        // console.log(e);
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


const clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById('eventOutput').innerHTML = '';
    document.getElementById('eventOutputTouch').innerHTML = '';
    document.getElementById('eventOutputPointer').innerHTML = '';
    document.getElementById('eventOutputClick').innerHTML = '';
})


const hasTouchEvents = 'ontouchstart' in window;
document.querySelector('#test1').innerHTML = hasTouchEvents;
document.querySelector('#test1').classList.add(hasTouchEvents);
const isTouchDevice = 'ontouchstart' in document.documentElement;
document.querySelector('#test2').innerHTML = isTouchDevice;
document.querySelector('#test2').classList.add(isTouchDevice);
const hasTouchPoints = navigator.maxTouchPoints > 0;
document.querySelector('#test3').innerHTML = hasTouchPoints;
document.querySelector('#test3').classList.add(hasTouchPoints);
const hasTouchPointer = window.PointerEvent && navigator.maxTouchPoints > 0;
document.querySelector('#test4').innerHTML = hasTouchPointer;
document.querySelector('#test4').classList.add(hasTouchPointer);




