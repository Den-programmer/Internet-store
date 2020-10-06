import templateBanner from '../../images/photoTemplate.jpg'

const Blog = {
    sidebar: {
        categories: [
            {
                id: 1,
                title: 'Creative'
            },
            {
                id: 2,
                title: 'Shopping'
            },
            {
                id: 3,
                title: 'Videos'
            },
            {
                id: 4,
                title: 'Uncategorized'
            }
        ],
        recentPosts: [
            {
                id: 1,
                title: 'Tour of Envato’s Melbourne Head quarters',
                date: {
                    year: '2020',
                    month: 'December',
                    day: '28'
                }
            },
            {
                id: 2,
                title: 'Echo Three to Echo Seven',
                date: {
                    year: '2020',
                    month: 'December',
                    day: '28'
                }
            },
            {
                id: 3,
                title: 'Oh, Princess Leia, are you all right?',
                date: {
                    year: '2020',
                    month: 'December',
                    day: '28'
                }
            }
        ],
        archives: [
            {
                id: 1,
                date: {
                    year: '2016',
                    month: 'November'
                }
            },
            {
                id: 2,
                date: {
                    year: '2016',
                    month: 'December'
                }
            },
            {
                id: 3,
                date: {
                    year: '2017',
                    month: 'January'
                }
            }
        ],
        tags: [
            {
                id: 1,
                title: 'Lookbook'
            },
            {
                id: 2,
                title: 'Electronics'
            },
            {
                id: 3,
                title: 'News'
            },
            {
                id: 4,
                title: 'Innovative'
            },
            {
                id: 5,
                title: 'Envato'
            }
        ]
    },
    article: {
        news: [
            {
                id: 1,
                title: 'Create an Amazing Store With us',
                tag: 'In Fashion, Clothing',
                comments: 0,
                authour: 'Hen whitman',
                subtitle: "The Love Boat soon will be making another run. The Love Boat promises something for everyone., Just two good old boys Wouldn't change if they could. Fightin' the system like a true modern day Robin Hood. That this group would somehow form a family that's the way we all became the Brady Bunch...",
                photo: templateBanner,
                date: {
                    day: '24',
                    month: 'Dec'
                }
            },
            {
                id: 2,
                title: 'A New Approach to Shopping UI',
                tag: 'In Fashion',
                comments: 0,
                authour: 'Hen whitman',
                subtitle: "The Love Boat soon will be making another run. The Love Boat promises something for everyone., Just two good old boys Wouldn't change if they could. Fightin' the system like a true modern day Robin Hood. That this group would somehow form a family that's the way we all became the Brady Bunch...",
                photo: templateBanner,
                date: {
                    day: '24',
                    month: 'Dec'
                }
            },
            {
                id: 3,
                title: 'Everything You Need to Create Your Store',
                tag: 'In Fashion',
                comments: 0,
                authour: 'Hen whitman',
                subtitle: "The Love Boat soon will be making another run. The Love Boat promises something for everyone., Just two good old boys Wouldn't change if they could. Fightin' the system like a true modern day Robin Hood. That this group would somehow form a family that's the way we all became the Brady Bunch...",
                photo: templateBanner,
                date: {
                    day: '24',
                    month: 'Dec'
                }
            },
            {
                id: 4,
                title: 'Everything You Need to Create Your Store',
                tag: 'In Fashion',
                comments: 0,
                authour: 'Hen whitman',
                subtitle: "The Love Boat soon will be making another run. The Love Boat promises something for everyone., Just two good old boys Wouldn't change if they could. Fightin' the system like a true modern day Robin Hood. That this group would somehow form a family that's the way we all became the Brady Bunch...",
                photo: templateBanner,
                date: {
                    day: '24',
                    month: 'Dec'
                }
            },
            {
                id: 5,
                title: 'Everything You Need to Create Your Store',
                tag: 'In Fashion',
                comments: 0,
                authour: 'Hen whitman',
                subtitle: "The Love Boat soon will be making another run. The Love Boat promises something for everyone., Just two good old boys Wouldn't change if they could. Fightin' the system like a true modern day Robin Hood. That this group would somehow form a family that's the way we all became the Brady Bunch...",
                photo: templateBanner,
                date: {
                    day: '24',
                    month: 'Dec'
                }
            }
        ]
    }
}

const reducerBlog = (state = Blog, action) => {
    switch (action.type) {        
        default:
            return state
    }
}

/* Action Creators! */

export default reducerBlog