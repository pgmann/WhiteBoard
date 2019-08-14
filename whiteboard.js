var currentClass = null;

// ALL CLASSES LIST
function updateClasses(classes) {
    // Update the list of classes in the 'More' dropdown menu from nav bar
    var container = $('#classes').empty();
    for (var i in classes) {
        var clazz = classes[i];
        var a = document.createElement('a');
        a.classList.add('dropdown-item', 'class-link');
        a.href = '#' + clazz.id;
        a.innerHTML = clazz.name + ' <i class="fa fa-thumbtack' + (clazz.pinned ? ' pinned' : '') + '"></i>';
        $(a).mouseenter(function () {
            if ($('.pinned').length < 3) $(this).find('.fa-thumbtack').show();
        }).mouseleave(function () {
            $(this).find('.fa-thumbtack:not(.pinned)').hide();
        });
        container.append(a);
    }
    // Make sure the pinned items in the nav bar are up to date
    updatePins();
    $('.fa-thumbtack').click(function (e) {
        var clazz = classes[this.parentElement.hash.substr(1)];
        clazz.pinned = !clazz.pinned;
        $(this).toggleClass('pinned').show();
        updatePins();
        e.stopPropagation();
        e.preventDefault();
    });
}
updateClasses(classes);

// PINS
function updatePins() {
    // Create a link in the main nav bar for each pinned class
    $('.pins').empty();
    $('.pinned').parent().each(function () {
        var li = document.createElement('li');
        li.classList.add('nav-item');
        var a = document.createElement('a');
        a.classList.add('nav-link', 'class-link');
        a.href = this.href;
        a.innerHTML = this.innerText;
        li.appendChild(a);
        $('.pins').append(li);
    });
    updateActiveClass();
}

// FEED
// event format
// {
//      type: 'assignment/grade/announcement/content/comment',
//      class: 'COM308 Human Computer Interaction',
//      title: '<text>',
//      time: <date/time>
// }
function addToFeed(event) {
    // Create elements for feed row
    var row = document.createElement('div');
    row.classList.add('mb-3');
    var icon = document.createElement('i');
    icon.classList.add('fa', 'feed-icon');
    row.appendChild(icon);
    var text = document.createElement('span');
    row.appendChild(text);
    var module = document.createElement('span');
    module.innerText = ' - ' + event.class;
    module.classList.add('faded');
    row.appendChild(module);
    $('#content').append(row);

    // Set row icon, description and date/time formatting depending on event type
    switch (event.type) {
        case 'assignment':
            icon.classList.add('fa-file-alt');
            var dateOptions = { weekday: 'short', day: 'numeric', month: 'long' };
            if (event.time.getFullYear() != new Date().getFullYear()) dateOptions.year = 'numeric';
            var date = event.time.toLocaleString(undefined, dateOptions);
            var timeOptions = { hour: 'numeric', hour12: true };
            if (event.time.getMinutes() != 0) timeOptions.minute = '2-digit';
            if (event.time.getSeconds() != 0) timeOptions.second = '2-digit';
            var time = event.time.toLocaleString(undefined, timeOptions).replace(/ /g, '');
            text.innerHTML = 'Assignment <b>' + event.title + '</b> due on <b>' + date + '</b> at <b>' + time + '</b>';
            break;

        case 'grade':
            icon.classList.add('fa-star');
            text.innerHTML = 'Grade available for <b>' + event.title + '</b>';
            break;

        case 'announcement':
            icon.classList.add('fa-bullhorn');
            text.innerHTML = 'Class announcement - <b>' + event.title + '</b>';
            break;

        case 'content':
            icon.classList.add('fa-plus-square');
            text.innerHTML = 'New class content added - <b>' + event.title + '</b>';
            break;

        case 'comment':
            icon.classList.add('fa-comment-alt');
            text.innerHTML = 'Comment posted by <b>' + event.title + '</b>';
            break;
    }
}

// PAGE SWITCHING
function updateActiveClass() {
    if (!currentClass) {
        $(".class-link").removeClass('active');
        $('.sidebar').hide();
    } else {
        // update navbar state
        var sameClass = $(".class-link[href$='#" + currentClass.id + "']").hasClass('active');
        $(".class-link").removeClass('active');
        $(".class-link[href$='#" + currentClass.id + "']").addClass('active');
        $('#class-name').text(currentClass.name);
        // update sidebar links
        $('.sidebar .home').attr('href', '#' + currentClass.id);
        $('.sidebar .assignments').attr('href', '#' + currentClass.id + '/assignments');
        $('.sidebar .announcements').attr('href', '#' + currentClass.id + '/announcements');
        // load content folder sub entries
        if(!sameClass) {
            $('.sidebar .nav ul').remove();
            loadContentFolder(currentClass.content, $('.sidebar .content'));
        }
        // update sidebar state
        $('.sidebar').show();
        var activeLinkCandidates = $('.sidebar .nav-link').removeClass('active');
        if(currentSection == 'content' && currentSubpage) {
            // sections where the subpage path is active
            activeLinkCandidates.filter("[href$='#" + currentClass.id + '/' + currentSection + '/' + currentSubpage + "']").addClass('active');
        } else {
            // sections where the section path remains active, even for subpages
            activeLinkCandidates.filter('.' + currentSection).addClass('active');
        }
        // bind click event to folders
        $('.sidebar .fa-folder, .sidebar .fa-folder-open').parent().unbind('click').click(function() {
            $(this).children().toggleClass('fa-folder fa-folder-open');
            $(this).next().toggle();
        })
    }
}

function loadContentFolder(content, parentFolder, path) {
    if(!path) path = "";
    var ul = $('<ul class="nav flex-column pl-3"></ul>');
    $(parentFolder).after(ul);
    if(path) ul.hide();
    var li = $('<li class="nav-item"></li>');
    ul.append(li);
    for(var i in content) {
        var child = content[i];
        var iconName = child.type == 'forum' ? 'comment-alt' : child.type;
        var href = child.type == 'folder' ? '' : 'href="#' + currentClass.id + '/content/' + path + child.title + '" ';

        var a = $('<a ' + href + 'class="nav-link bg-light"><i class="fa fa-' + iconName + '"></i> ' + child.title + '</a>');
        li.append(a);
        if(child.type == 'folder') {
            loadContentFolder(child.content, a, path + child.title + '/');
        }
    }
}

function switchPage(clazz, page) {
    // Handle page state variables
    console.log('Page Switch:', clazz, decodeURI(page));
    currentClass = clazz;
    if (!page) page = 'home';
    page = decodeURI(page).split('/');
    currentSection = page.shift();
    currentSubpage = page.join('/');

    // update navbar and sidebar
    updateActiveClass();
    var content = $('#content').empty();
    $('.navbar .navbar-collapse').collapse('hide');

    // show relevant content
    if (!clazz) {
        loadFeed();
        return;
    }
    switch (currentSection) {
        case 'home':
            var schedule = '';
            for (var i in clazz.times) schedule += '<li>' + clazz.times[i] + '</li>';
            var staff = '';
            for (var i in clazz.lecturers) {
                var user = clazz.lecturers[i];
                staff += '<div class="col-sm-6 lecturer-card mb-4"><i class="fa fa-user fa-3x"></i><div>';
                if (!user.hasOwnProperty('name')) {
                    staff += '<b>' + user + '</b>'; // user is a String containing the lecturer's name
                } else {
                    staff += '<b>' + user.name + '</b>';
                    if (user.hasOwnProperty('role')) staff += '<br><i>' + user.role + '</i>';
                    if (user.hasOwnProperty('details')) staff += '<br>' + user.details.replace(/\n/g, '<br>\n');
                }
                staff += '</div></div>';
            }
            content.html('<h1>' + clazz.name + '</h1>' +
                'Please use the links on the left menu to navigate through the module content. The Module Handbook is available. ' +
                'Module content is presented in daily order under the menu title Learning Materials.' +
                '<h2 class="mt-4">Timetable</h2>' +
                '<ul>' + schedule + '</ul>' +
                '<h2 class="mt-4">Lecturers</h2>' +
                '<div class="row">' + staff + '</div>'
            );
            break;
        case 'assignments':
            // Assignment/test format example:
            // {
            //     name: <String>>,
            //     description: <String>,
            //     type: <Assignment/Test>,
            //     due: 'dd/mm/yyyy hh:mm',
            //     submission: {
            //         content: <String>,
            //         submitted: 'dd/mm/yyyy hh:mm',
            //         graded: 'dd/mm/yyyy hh:mm',
            //         score: <number>
            //     },
            //     worth: <number>
            // }
            if (!currentSubpage) { // main assignments and grades table
                var html = '<h1>Assignments</h1>' +
                    '<table class="table table-hover border border-dark">' +
                    '<thead class="thead-dark">' +
                    '<tr><th>Assignment Name</th><th>Details</th><th>Status</th><th>Grade</th></tr>' +
                    '</thead>' +
                    '<tbody>';
                var assignments = currentClass.assignments;
                var totalScore = 0, maxScore = 0;
                for (var i in assignments) {
                    var assignment = assignments[i];
                    if (assignment.submission && assignment.submission.score) {
                        // Running total of score
                        totalScore += assignment.submission.score;
                        maxScore += assignment.worth;
                    }
                    html += '<tr>' +
                        '<td><a href="#' + currentClass.id + '/' + currentSection + '/' + assignment.name + '">' +
                        assignment.name +
                        '</a></td>' +
                        '<td>' + assignment.type + '<br>Due ' + assignment.due + '</td>' +
                        '<td>' + (assignment.submission ? assignment.submission.graded ?
                            'Graded<br>' + assignment.submission.graded :
                            'Submitted<br>' + assignment.submission.submitted :
                            'Not submitted yet') +
                        '</td>' +
                        '<td>' + (assignment.submission && assignment.submission.score ?
                            assignment.submission.score + '/' + assignment.worth + ' (' + (assignment.worth == 0 ?
                                100 :
                                Math.floor(assignment.submission.score / assignment.worth * 100)) +
                            '%)' :
                            assignment.worth + ' points available') +
                        '</td>' +
                        '</tr>'
                }
                html += '<tr><td>Total</td><td colspan="2"></td><td>' +
                    totalScore + '/' + maxScore + ' (' + (maxScore == 0 ? 100 : Math.floor(totalScore / maxScore * 100)) + '%)' +
                    '</td></tr>' +
                    '</tbody>' +
                    '</table>';
                content.html(html);
            } else { // display details about a specific assignment or test
                var assignment = currentClass.assignments.find(a => a.name == currentSubpage);
                if (!assignment) {
                    content.html('<h1>Not Found</h1>The assignment you requested does not exist.');
                    break;
                }
                var html = '<h1>' + assignment.name + '</h1>' +
                    '<h5 class="mt-4 mb-0">Due date</h5>' + assignment.due +
                    (assignment.submission && assignment.submission.score ?
                        '<h5 class="mt-4 mb-0">Grade</h5>' + assignment.submission.score + '/' + assignment.worth + ' (' + (assignment.worth == 0 ?
                            100 :
                            Math.floor(assignment.submission.score / assignment.worth * 100)) + '%)' :
                        '<h5 class="mt-4 mb-0">Points available</h5>' + assignment.worth
                    ) +
                    '<h5 class="mt-4 mb-0">Description</h5>' + assignment.description +
                    (assignment.submission ?
                        '<h5 class="mt-4 mb-0">Submission</h5>' +
                        assignment.submission.content :
                        '<div class="mt-4">' +
                        '<button class="bg-light px-2 mr-3" onclick="alert(\'A text area would appear allowing the user to input their submission and click submit.\')">Write Text Submission</button>' +
                        '<button class="bg-light px-2" onclick="alert(\'A file selection window would open and allow file(s) to be selected for upload. After reviewing these the user would be able to submit them for grading.\')">Upload Submission</button>' +
                        '</div>'
                    );
                content.html(html);
            }
            break;
        case 'announcements':
            // Announcement format example:
            // {
            //     title: <String>,
            //     author: <String>,
            //     time: 'DDD dd/mm/yyyy hh:mm Z',
            //     content: <String>
            // }
            var html = '<div class="d-flex align-items-center">' +
            '<h1 class="d-inline-block">Announcements</h1>' +
            '<button class="bg-light px-2 ml-3" onclick="alert(\'This button will be visible only to class teachers. Clicking this will prompt for an announcement title and content. Rich text input will be accepted.\')">Add New</button>' +
            '</div>';
            for(var i in currentClass.announcements) {
                var announcement = currentClass.announcements[i];
                html += '<div class="mt-2 mb-4">' +
                '<h6><b><u>' + announcement.title + '</u> - </b><span class="text-muted"><b>' +
                announcement.author + '</b> - ' +
                announcement.time + '<span>' +
                '</h6>' +
                announcement.content +
                '</div>'
            }
            content.html(html);
            break;
        case 'content':
            // Find and display file/forum content
            var classContent = currentClass.content;
            var path = currentSubpage.split('/');
            for(var i in path) {
                var child = classContent.find(c => c.title == path[i]);
                if(child && child.type == 'folder') classContent = child.content;
                if(i == path.length - 1) classContent = child;
            }

            if (!classContent || classContent.type == 'folder') {
                content.html('<h1>Not Found</h1>The content you requested does not exist.');
                break;
            }
            content.html('<h1>'+classContent.title+'</h1>'+classContent.content);
            break;
    }
}
$(window).on('hashchange', function () {
    // Switch to requested page from hash parameter
    var hash = window.location.hash.substr(1).split('/');
    var classCode = hash.shift();
    var page = hash.join('/');
    if (classCode && classes.hasOwnProperty(classCode)) switchPage(classes[classCode], page);
    else switchPage();
}).trigger('hashchange');