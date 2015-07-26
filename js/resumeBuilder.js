var bio = {
	"name" : "Brian Hao ",
	"role" : "Android Developer",
	"contactInfo" : {
		"mobile" : "+I (2I5) 8I3-3O7I",
		"email" : "haoguanqing@gml.com",
		"github" : "haoguanqing",
		"facebook" : "haoguanqing",
		"location" : "Salem, OR"
	},
	"welcomeMsg" : " - Recent graduate actively looking for software developing long-term position - ",
	"picture" : "images/fry.jpg",
	"skills" : ["Java (Eclipse)", "Android Studio", "JavaScript", "Python", "Nanofabrication", "and ... Kerbal Space Program!"]
}
bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
	var formattedFacebook = HTMLFacebook.replace("%data%", bio.contactInfo.facebook);
	var formattedLocation = HTMLLocation.replace("%data%", bio.contactInfo.location);

	var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
	var formattedWelMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedFacebook);
	$("#topContacts").append(formattedLocation);

	$("#header").append(formattedPic);
	$("#header").append(formattedWelMsg);

	if (bio.skills.length>0) {
		$("#header").append(HTMLskillsStart);
		for (i in bio.skills){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}
}
bio.display();

var work = {
	"jobs" : [
	{
		"employer" : "University of Pennsylvania",
		"title" : "Research Assistant",
		"dates" : "01/2014-05/2015 ",
		"location" : "Philadelphia, PA, US",
		"description" : "Device simulation and chronic experiment data cleaning and analysis with Matlab and Python."
	},{
		"employer" : "Beijing Beiye Functional Materials Inc.",
		"title" : "Summer Intern",
		"dates" : "07/2012-09/2012 ",
		"location" : "Beijing, China",
		"description" : "Gained exposure to the full manufacturing process as well as the ERP system."
	}]
}
work.display = function() {
	for (var i in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
	$(".work-entry:last").append(formattedEmployer);
	$(".work-entry:last").append(formattedTitle);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedLocation);
	$(".work-entry:last").append(formattedDescription);
}
}
work.display();

var education = {
	"school" : [
	{
		"name" : "University of Pennsylvania",
		"dates" : "08/2013-06/2015",
		"degree" : "Master of Science",
		"major" : "Materials Science and Engineering",
		"location" : "Philadelphia, PA"
	},
	{
		"name" : "University of Science and Technology Beijing",
		"dates" : "09/2009-07/2013",
		"degree" : "Bachelor of Engineering",
		"major" : "Materials Science and Engineering",
		"location" : "Beijing, China"
	},
	{
		"name" : "Peking University",
		"dates" : "09/2010-07/2013",
		"degree" : "Bachelor of Science",
		"major" : "Economics",
		"location" : "Beijing, China"
	}],
	"onlineCourses" : [
	{
		"title" : "Algorithms: Design and Analysis",
		"school" : "Coursera",
		"dates" : 2015,
		"url" : "https://class.coursera.org/algo-008"
	},{
		"title" : "JavaScript Basics - The Programming Language of the Web",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "https://www.udacity.com/course/ud804"
	},{
		
		"title" : "Developing Android Apps - Android Fundamentals",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "hhttps://www.udacity.com/course/developing-android-apps--ud853"
	}]
}
education.display = function() {
	for (s in education.school){
		$("#education").append(HTMLschoolStart);
		
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.school[s].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.school[s].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.school[s].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.school[s].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.school[s].major);

		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
	}
	for (d in education.onlineCourses){
		$("#onlineCourses").append(HTMLonlineStart);
		
		var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[d].title);
		var formattedCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[d].school);
		var formattedCourseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[d].dates);
		var formattedCourseUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[d].url);

		$(".course-entry:last").append(formattedCourseTitle);
		$(".course-entry:last").append(formattedCourseSchool);
		$(".course-entry:last").append(formattedCourseDates);
		$(".course-entry:last").append(formattedCourseUrl);
	}
}
education.display();


var projects = {
	"projects" : [
	{
		"title" : "Chronic Experiments Data Processing and Analysis of DTA Files",
		"dates" : "09/2014-11/2014",
		"description" : "Designed a program in Python so as to read from massive DTA files, obtain useful data, and save differential and integral calculation results in a new file.",
		"image" : ["images/1.png", "images/ridge.jpg", "images/f.jpg"]
	}]
}

//encapsulation
projects.display = function() {
	for (i in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		var formattedProjDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		var formattedProjDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$(".project-entry:last").append(formattedProjTitle);
		$(".project-entry:last").append(formattedProjDates);
		$(".project-entry:last").append(formattedProjDescription);
		if (projects.projects[i].image.length>0){
			for (j in projects.projects[i].image){
				var formattedProjImage = HTMLprojectImage.replace("%data%", projects.projects[i].image[j]);
				$(".project-entry:last").append(formattedProjImage);
			}
		}
	}
}
projects.display();

//add a google map
$("#mapDiv").append(googleMap);

/*internationalize the name*/
function inName(_name){
	var firstName = _name.trim().split(" ")[0];
	var lastName = _name.trim().split(" ")[1];
	var name2 = firstName[0].toUpperCase()+firstName[1,firstName.length-1].toLowerCase()+" "+lastName.toUpperCase();
	return name2;
}
//$("#main").append(internationalizeButton);

