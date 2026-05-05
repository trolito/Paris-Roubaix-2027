// Paris-Roubaix 2027 Schedule Data
// Edit this file to update the itinerary

const schedule = [
    {
        title: "Friday, April 9 – Arrival",
        activities: [
            { time: "08:00", icon: "✈️", description: "Depart Copenhagen (CPH) with SAS flight to Brussels (BRU)" },
            { time: "10:30", icon: "🚆", description: "Arrival in Brussels, transfer to Kortrijk (~1.5 hours)" },
            { time: "12:30", icon: "🏨", description: "Check-in at Park Hotel Kortrijk" },
            { time: "14:00", icon: "🍽️", description: "Lunch in Kortrijk" },
            { time: "16:00", icon: "🚖", description: "Transfer to Ghent (~30 minutes)" },
            { time: "18:00", icon: "🍷", description: "Dinner and socializing in Ghent" }
        ]
    },
    {
        title: "Saturday, April 10 – Ghent",
        activities: [
            { time: "09:00", icon: "🏛️", description: "Sightseeing in Ghent: Gravensteen, Graslei, Korenlei" },
            { time: "12:00", icon: "🍽️", description: "Lunch in Ghent" },
            { time: "14:00", icon: "🍺", description: "Beer tasting at a local brewery" },
            { time: "18:00", icon: "🍷", description: "Dinner and socializing" }
        ]
    },
    {
        title: "Sunday, April 11 – Paris-Roubaix 🏆",
        activities: [
            { time: "05:00", icon: "☕", description: "Early wake-up and breakfast" },
            { time: "06:00", icon: "🚍", description: "Meeting point in Kortrijk - Go4Cycling VIP bus", go4cycling: true },
            { time: "06:15", icon: "🚌", description: "Transfer Kortrijk → Compiègne (2h) with coffee, tea & pastries", go4cycling: true },
            { time: "08:30", icon: "🚴‍♂️", description: "Start area in Compiègne - experience team buses and preparations", go4cycling: true },
            { time: "09:55", icon: "🚍", description: "Return to bus", go4cycling: true },
            { time: "10:05", icon: "🏁", description: "Bus departs - race starts at 10:15", go4cycling: true },
            { time: "10:05", icon: "🌍", description: "Follow the race from key positions along the route", go4cycling: true },
            { time: "12:00", icon: "🍾", description: "Lunch break with packed meal & CAVA on board", go4cycling: true },
            { time: "12:30", icon: "🎬", description: "Live experience at multiple strategic points", go4cycling: true },
            { time: "16:30", icon: "🏟️", description: "Arrival at Roubaix Velodrome - finish line!", go4cycling: true },
            { time: "17:15", icon: "🚍", description: "Return to Kortrijk", go4cycling: true },
            { time: "19:00", icon: "🍷", description: "Dinner and reliving the day's events" }
        ]
    },
    {
        title: "Monday, April 12 – Departure",
        activities: [
            { time: "08:00", icon: "☕", description: "Breakfast and check-out" },
            { time: "09:00", icon: "🚖", description: "Transfer to Brussels Airport (~1 hour)" },
            { time: "11:00", icon: "✈️", description: "SAS flight SK523: Brussels (BRU) → Copenhagen (CPH), 13:30–15:00" }
        ]
    }
];