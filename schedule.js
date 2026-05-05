// Paris-Roubaix 2027 Schedule Data
// Edit this file to update the itinerary
// Flight times based on current SAS timetables (SK1593/SK1594) — verify at flysas.com once 2027 schedule is published.

const schedule = [
    {
        title: "Friday, April 9 – Arrival",
        activities: [
            { time: "12:55", icon: "✈️", description: "Depart Copenhagen (CPH) · SAS flight SK1593 → Brussels (BRU) 14:30" },
            { time: "14:30", icon: "🛬", description: "Arrival at Brussels Airport (BRU)" },
            { time: "15:00", icon: "🚌", description: "Transfer Brussels Airport → Kortrijk (~1.5 hours by coach/taxi)" },
            { time: "16:30", icon: "🏨", description: "Check-in at hotel in Kortrijk (TBD)" },
            { time: "18:00", icon: "🍽️", description: "Dinner and socializing in Kortrijk" }
        ]
    },
    {
        title: "Saturday, April 10 – Ghent Day Trip",
        activities: [
            { time: "09:00", icon: "🚆", description: "Train or coach from Kortrijk to Ghent (~30 minutes)" },
            { time: "09:30", icon: "🏛️", description: "Sightseeing in Ghent: Gravensteen, Graslei, Korenlei" },
            { time: "12:30", icon: "🍽️", description: "Lunch in Ghent" },
            { time: "14:30", icon: "🍺", description: "Beer tasting at a local brewery" },
            { time: "17:30", icon: "🚆", description: "Return to Kortrijk (~30 minutes)" },
            { time: "19:00", icon: "🍷", description: "Dinner and socializing in Kortrijk" }
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
            { time: "19:00", icon: "🍷", description: "Dinner and reliving the day's events in Kortrijk" }
        ]
    },
    {
        title: "Monday, April 12 – Departure",
        activities: [
            { time: "09:00", icon: "☕", description: "Breakfast and hotel check-out" },
            { time: "13:00", icon: "🚌", description: "Transfer Kortrijk → Brussels Airport (~1.5 hours by coach/taxi)" },
            { time: "14:30", icon: "🛫", description: "Arrive Brussels Airport (BRU) · check in for departure" },
            { time: "15:10", icon: "✈️", description: "SAS flight SK1594: Brussels (BRU) 15:10 → Copenhagen (CPH) 16:40" }
        ]
    }
];
