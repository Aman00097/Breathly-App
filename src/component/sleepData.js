const sleepData = [
    {
        id: 1,
        title: "Peaceful Sleep",
        img: "https://images.unsplash.com/photo-1520206183501-b80df61043c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        audio: ["https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation1.mp3", "https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation2.mp3", "https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation3.mp3"]
    },
    {
        id: 2,
        title: "Gratitude Body Scan for Sleep",
        img: "https://images.unsplash.com/photo-1511295742362-92c96b1cf484?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
        audio: ["https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation1.mp3", "https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation2.mp3", "https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation3.mp3"]
    },
    {
        id: 4,
        title: "Unwind Into Sleep",
        img: "https://images.unsplash.com/photo-1455642305367-68834a1da7ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        audio: ["https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation1.mp3", "https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation2.mp3", "https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation3.mp3"]
    },
    {
        id: 5,
        title: "Night Time Gratitude",
        img: "https://images.unsplash.com/photo-1552858725-2758b5fb1286?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        audio: ["https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation1.mp3", "https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation2.mp3", "https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation3.mp3"]
    },
    {
        id: 6,
        title: "7 Days of Sleep",
        img: "https://images.unsplash.com/photo-1495197359483-d092478c170a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
        audio: ["https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation1.mp3", "https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation2.mp3", "https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation3.mp3"]
    },
    {
        id: 7,
        title: "Soothing the Body for Rest",
        img: "https://cdn.pixabay.com/photo/2016/03/28/09/45/tiger-1285229__340.jpg",
        audio: ["https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation1.mp3", "https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation2.mp3", "https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation3.mp3"]
    },
    {
        id: 8,
        title: "Bedtime Body Scan",
        img: "https://images.unsplash.com/photo-1517898717281-8e4385a41802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        audio: ["https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation1.mp3", "https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation2.mp3", "https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation3.mp3"]
    },
    {
        id: 9,
        title: "Connecting With the Night",
        img: "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        audio: ["https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation1.mp3", "https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation2.mp3", "https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation3.mp3"]
    },
    {
        id: 10,
        title: "Softly Back to Sleep",
        img: "https://images.unsplash.com/photo-1526725702345-bdda2b97ef73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
        audio: ["https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation1.mp3", "https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation2.mp3", "https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation3.mp3"]
    },
    {
        id: 11,
        title: "Quieting the Mind and Body",
        img: "https://images.unsplash.com/photo-1606103836293-0a063ee20566?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        audio: ["https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation1.mp3", "https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation2.mp3", "https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation3.mp3"]
    },
    {
        id: 12,
        title: "Deep Sleep",
        img: "https://cdn.pixabay.com/photo/2012/03/04/01/01/father-22194_960_720.jpg",
        audio: ["https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation1.mp3", "https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation2.mp3", "https://breathlly.netlify.app/assets/Daily-Motivation/Daily-Motivation3.mp3"]
    }
]

export default sleepData;
