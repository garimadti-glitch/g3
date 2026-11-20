
const events = [
    {
        name: "Web Development Workshop",
        date: "25 November 2026",
        category: "Workshop",
        venue: "Computer Lab"
    },
    {
        name: "AI Technology Seminar",
        date: "28 November 2026",
        category: "Seminar",
        venue: "Auditorium"
    },
    {
        name: "Annual Cultural Fest",
        date: "5 December 2026",
        category: "Cultural",
        venue: "College Ground"
    },
    {
        name: "Python Programming Workshop",
        date: "10 December 2026",
        category: "Workshop",
        venue: "Lab 2"
    },
    {
        name: "Data Science Seminar",
        date: "15 December 2026",
        category: "Seminar",
        venue: "Seminar Hall"
    },
    {
        name: "Music and Dance Competition",
        date: "20 December 2026",
        category: "Cultural",
        venue: "Main Auditorium"
    }
];

function displayEvents(list) {
    let eventList = document.getElementById("eventList");

    eventList.innerHTML = "";

    list.forEach(event => {
        eventList.innerHTML += `
            <div class="event">
                <h3>${event.name}</h3>
                <p><b>Date:</b> ${event.date}</p>
                <p><b>Category:</b> ${event.category}</p>
                <p><b>Venue:</b> ${event.venue}</p>
                <button onclick="registerEvent('${event.name}')">
                    Register
                </button>
            </div>
        `;
    });
}

function filterEvents(category) {
    if (category === "All") {
        displayEvents(events);
    } else {
        let filtered = events.filter(
            event => event.category === category
        );

        displayEvents(filtered);
    }
}

function registerEvent(name) {
    alert("Successfully registered for " + name);
}

// Display all events initially
displayEvents(events);
