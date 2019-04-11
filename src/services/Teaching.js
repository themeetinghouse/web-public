class TeachingService {

    allSeries = [
        {
            id: 'doubt-deconstruction-and-jesus',
            title: "Doubt, Deconstruction, and Jesus",
            description: "How a Jesus-centred faith helps us to hold on to what is most important."
        },
        {
            id: 2,
            title: "Jesus Collective",
            description: "Together, we cast a vision for Jesus Collective, hearing from Greg Boyd and our guest panel about why now is the time to unite a Kingdom movement."
        },
        {
            id: 3,
            title: "Her Story",
            description: "This year our annual peace & reconciliation series focusses on the image of God in women and how the Church can do a better job listening to and learning from all of God’s image bearers."
        },
    ]

    allTeaching = [
        {
            id: 'doubt-6168',
            type: 'SERMON',
            seriesId: 'doubt-deconstruction-and-jesus',
            title: "Doubt",
            timestamp: "2019-03-31",
            description: "Jimmy Rushton explores the biblical precedent for doubt in our walk with Jesus."
        },
        {
            id: 2,
            type: 'SERMON',
            seriesId: 'doubt-deconstruction-and-jesus',
            title: "Deconstruction",
            timestamp: "2019-03-24",
            description: "Jimmy Rushton walks through John 3 and how Jesus welcomes the questions and doubts of Nicodemus."
        },
        {
            id: 3,
            type: 'SERMON',
            seriesId: 2,
            title: "Jesus Collective - Our Kingdom Movement",
            timestamp: "2019-03-17",
            description: "We are joined by Matt Vincent, Maggie John, Josh Crain, and Greg Boyd to talk about Jesus Collective and our next steps!"
        },
        {
            id: 4,
            type: 'SERMON',
            seriesId: 2,
            title: "Seeing the Big Picture",
            timestamp: "2019-03-10",
            description: "We discuss why it is so important to have gender equality in church leadership."
        },
        {
            id: 5,
            type: 'SERMON',
            seriesId: 2,
            title: "Jesus and the New Covenant",
            timestamp: "2019-03-03",
            description: "Karmyn Bokma teaches on how patriarchy in the Old Covenant was God's accommodation for a season, yet Jesus restores the relationships between men and women in the New Covenant."
        },
    ]

    getSeries(seriesId){
        return this.allSeries.find(series => series.id === seriesId);
    }

    getTeaching(teachingId){
        return this.allTeaching.find(teaching => teaching.id === teachingId);
    }
}

export let teachingService = new TeachingService();