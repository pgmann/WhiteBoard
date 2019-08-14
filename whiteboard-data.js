// DATA
// In the real application, this data would get pulled from a server once a user has logged in.
var classes = {
    COM181: {
        id: 'COM181',
        name: 'COM181 Computer Hardware',
        times: [
            '9:15 - 17:15 Wed 27th June - Fri 29th June 2018',
            '9:15 - 17:15 Wed 1st August - Fri 3rd August 2018'
        ],
        lecturers: [
            'Dr George Martin'
        ]
    },
    COM182: {
        id: 'COM182',
        name: 'COM182 Systems in Organisations',
        pinned: true,
        times: [
            '15:15 - 19:15 Every Wed from 30th Jan - 17th April 2019 (12 weeks)'
        ],
        lecturers: [
            {
                name: 'Dr Jonathan Synnott',
                role: 'Module Coordinator',
                details: 'Room: 16E07\nEmail: j.synnott@ulster.ac.uk'
            },
            {
                name: 'Dr Samuel Moore',
                role: 'Lecturer'
            }
        ]
    },
    COM186: {
        id: 'COM186',
        name: 'COM186 Software Development I',
        times: [
            '13:15 - 17:15 Every Wed from 31st January - 21st March 2018 (8 weeks)',
            '13:15 - 17:15 Every Wed from 11th April - 2nd May 2018 (4 weeks)'
        ],
        lecturers: [
            'Dr Omar Nibouche'
        ]
    },
    COM187: {
        id: 'COM187',
        name: 'COM187 Software Development II',
        pinned: true,
        times: [
            '15:15 - 20:15 Every Wed from 26th September - 12th December 2018 (12 weeks)'
        ],
        lecturers: [
            {
                name: 'Dr Simon Fraser',
                role: 'Module Coordinator',
                details: 'Room: 16G03\nEmail: sg.fraser@ulster.ac.uk'
            }
        ]
    },
    COM188: {
        id: 'COM188',
        name: 'COM188 Study Skills & Prof Issues',
        times: [
            '15:15 - 17:15 Every Wed from 27th September - 13th December 2017 (12 weeks)',
            '17:15 - 19:15 Wed 27th September 2017',
            '18:15 - 20:15 Wed 15th November 2017',
            '18:15 - 20:15 Every Wed from 29th November - 13th December 2017 (3 weeks)'
        ],
        lecturers: [
            'Dr Jose Santos'
        ]
    },
    COM206: {
        id: 'COM206',
        name: 'COM206 Mathematics for Computing',
        times: [
            '13:15 - 15:15 Every Wed from 27th September - 13th December 2017 (12 weeks)',
            '17:15 - 19:15 Every Wed from 31st January - 21st March 2018 (8 weeks)',
            '17:15 - 19:15 Every Wed from 11th April - 2nd May 2018 (4 weeks)'
        ],
        lecturers: [
            'Dr Glenn Hawe'
        ]
    },
    COM308: {
        id: 'COM308',
        name: 'COM308 Human Computer Interaction',
        pinned: true,
        times: [
            '9:15 – 17:15 Mon 24th June – Wed 26th June 2019',
            '9:15 – 17:15 Mon 5th August – Wed 7th August 2019'
        ],
        lecturers: [
            {
                name: 'Dr Gaye Lightbody',
                role: 'Module Coordinator',
                details: 'Room: 16E04\nEmail: g.lightbody@ulster.ac.uk'
            },
            {
                name: 'Prof Jonathan Wallace',
                role: 'Guest Lecturer'
            }
        ],
        assignments: [
            {
                name: 'Coursework 1',
                description: 'A class test covering topics from the first 3 day block',
                type: 'Test',
                due: '10/10/2018 17:00',
                submission: {
                    content: 'This is my test. Most of the answers are correct.',
                    submitted: '08/10/2018 14:32',
                    graded: '16/10/2018 14:01',
                    score: 19
                },
                worth: 20
            },
            {
                name: 'Coursework 2',
                description: 'Development of a prototype application and report.',
                type: 'Assignment',
                due: '23/08/2019 17:00',
                submission: {
                    content: 'This is my assignment. It has not been graded yet.',
                    submitted: '21/08/2019 15:17'
                },
                worth: 70
            },
            {
                name: 'Coursework 3',
                description: 'Another assignment',
                type: 'Assignment',
                due: '01/09/2019 17:00',
                worth: 10
            },
        ],
        announcements: [
            {
                title: 'See you all in August!',
                author: 'Dr Gaye Lightbody',
                time: 'Wed 26/06/2019 16:02 BST',
                content: '<p>I hope you found the first three days useful. Thank you all for your contribution in class. These discussions are very helpful.</p>\n<p>We now have a break until August - during this time you should be working on your project with a submission of the storyboard by 5pm on the 5th August.</p>'
            },
            {
                title: 'Tutorial 2',
                author: 'Dr Gaye Lightbody',
                time: 'Tue 25/06/2019 13:35 BST',
                content: '<p>For this tutorial / practical I want you to start to tease out your ideas for your project (CW2).</p><p>You should be focusing on the first three aspects of User Centred System Design - <ul><li>Problem Statement</li><li>Task Analysis</li><li>Requirements Gathering</li></ul></p>'
            }
        ],
        content: [
            {
                title: 'Schedule',
                type: 'file',
                content: '<u><b>Day 1</b> – Monday 24th June 2019</u><ul>' +
                    '<li>09:15 – 12:15 Lectures 1 & 2 (16E26)</li>' +
                    '<li>12:15 – 13:15 Lunch</li>' +
                    '<li>13:15 – 14:15 Practical (16E28)</li>' +
                    '<li>14:15 – 17:15 Lecture 3 (16E26)</li>' +
                    '</ul>' +

                    '<u><b>Day 2</b> – Tuesday 25th June 2019</u><ul>' +
                    '<li>09:15 – 12:15 Lectures 4 & 5 (16E26)</li>' +
                    '<li>12:15 – 13:15 Lunch</li>' +
                    '<li>13:15 – 14:30 Practical (16E28)</li>' +
                    '<li>14:30 – 17:15 Lecture 6 (16E26)</li>' +
                    '</ul>' +

                    '<u><b>Day 3</b> – Wednesday 26th June 2019</u>'
            },
            {
                title: 'Practicals',
                type: 'folder',
                content: [
                    {
                        title: 'Practical 1',
                        type: 'file',
                        content: 'This is practical 1. You need to do some stuff then submit it through some link.'
                    },
                    {
                        title: 'Practical 2',
                        type: 'file',
                        content: 'This is another practical. It is harder than the last practical. There are more steps than the last one and the questions are harder.'
                    }
                ]
            },
            {
                title: 'Feedback Forum',
                type: 'forum',
                content: [
                    {
                        title: 'Paper 1: I don\'t want to wear a screen',
                        type: 'thread',
                        content: [
                            {
                                author: 'Dr Gaye Lightbody',
                                time: 'Wed 26/06/2019 22:57 BST',
                                content: 'Please review and provide comment on the attached paper.<br>16_CHI_Ebb.pdf (5.87 MB)'
                            }
                        ]
                    },
                    {
                        title: 'Paper 2: RapID',
                        type: 'thread',
                        content: [
                            {
                                author: 'Dr Gaye Lightbody',
                                time: 'Wed 26/06/2019 22:57 BST',
                                content: '2016 - CHI - RapID-Low_Latency_Interactive_Objects_with_RFID_Tags_Paper.pdf (4.459 MB)'
                            }
                        ]
                    },
                    {
                        title: 'Paper 3: Momentary Pleasure',
                        type: 'thread',
                        content: [
                            {
                                author: 'Dr Gaye Lightbody',
                                time: 'Wed 26/06/2019 22:57 BST',
                                content: 'Please review and comment on this paper.<br>CHI2016_MomentaryPleasures.pdf (659.467 KB)'
                            }
                        ]
                    },
                    {
                        title: 'Paper 4: Movement-based Play',
                        type: 'thread',
                        content: [
                            {
                                author: 'Dr Gaye Lightbody',
                                time: 'Wed 26/06/2019 22:57 BST',
                                content: 'Please review and comment on this paper.<br>p4447-gerling.pdf (1.106 MB)'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Lecture 1 - The Humanisation of ICT',
                type: 'file',
                content: 'Lecture 1, Room 16E26:<br>Guest Lecturer – Prof Johnny Wallace<br>The Humanisation of ICT (1 hour)'
            }
        ]
    },
    COM342: {
        id: 'COM342',
        name: 'COM342 Networks',
        times: [
            '13:15 - 15:15 Every Wed from 30th Jan - 17th April 2019 (12 weeks)',
            '13:15 - 15:15 Every Wed from 26th September - 12th December 2018 (12 weeks)'
        ],
        lecturers: [
            'Dr Aaron McConville'
        ]
    }
};

// The feed would typically be dynamically generated by the server based on recent events across all the
// user's classes. For the purposes of this prototype, a set list of example entries has been included.
function loadFeed() {
    // Load initial entries into feed
    addToFeed({
        type: 'assignment',
        class: 'COM308 Human Computer Interaction',
        title: 'CW2 Storyboards',
        time: new Date(2019, 8, 5, 17, 0, 0)
    });
    addToFeed({
        type: 'grade',
        class: 'COM308 Human Computer Interaction',
        title: 'Class Test',
        time: Date.now()
    });
    addToFeed({
        type: 'announcement',
        class: 'COM308 Human Computer Interaction',
        title: 'See you all in August!',
        time: Date.now()
    });
    addToFeed({
        type: 'content',
        class: 'COM308 Human Computer Interaction',
        title: 'Lecture - slides on universal design',
        time: Date.now()
    });
    addToFeed({
        type: 'comment',
        class: 'COM308 Human Computer Interaction',
        title: 'Peter Gordon - This is a test',
        time: Date.now()
    });
}