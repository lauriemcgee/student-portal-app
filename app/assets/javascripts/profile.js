/* global Vue $ */
/* eslint camelcase: 0 */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      students: [
        {first_name: "Laurie", last_name: "McGee", email: "laurie.mcgee@email.com", phone_number: "3019227297", bio: "Hey I'm Laurie", id: 6},
        {first_name: "Ross", last_name: "Dupaw", email: "ross.dupaw@email.com", phone_number: "3018288282", bio: "Hey I'm Ross", id: 26}
      ],
      experiences: [ 
        {student_id: 6, start_date: "April 1, 2016", end_date: "April 2, 2016", job_title: "Market Guru", company_name: "Axa", details: "this is some shit that I did"
        },
        {student_id: 26, start_date: "September 1, 2000", end_date: "June 3, 2002", job_title: "QA Dude", company_name: "CDW", details: "this is some shit that I did"
        },
        {student_id: 26, start_date: "July 4, 2002", end_date: "Present", job_title: "Head QA dude", company_name: "Accenture", details: "this is some shit that I did"
        }
      ],
      educations: [
        {student_id: 6, start_date: "August 10, 2010", end_date: "May 5, 2014", degree: "Bullshitting You", university_name: "Deez city streets", details: "#yorkroadladyforever"},
        {student_id: 26, start_date: "August 10, 2012", end_date: "May 5, 2016", degree: "A Normal Degree", university_name: "Yale Universit", details: "In this world, Ross is intelligent"}
      ],
      skills: [ 
        {student_id: 6, skill_name: "doing things"},
        {student_id: 6, skill_name: "sleeping"},
        {student_id: 26, skill_name: "ror"},
        {student_id: 26, skill_name: "javascript"},

      ],
      capstones: [ 
        {student_id: 6, name: "DnD thing", description: "maybe it'll work", url: "iwishihadone.com", screenshot: ""},
        {student_id: 6, name: "Super top secret api", description: "maybe it'll work", url: "topsecretapi.com", screenshot: ""}
      ],
      changeFirstName: [],
      changeLastName: [],
      changePhone: [],
      changeBio: [],
      changeLinkedin: [],
      changeTwitterHandle: [],
      changeWebsite: [],
      changeGithub: [],
      changePhoto: []
    },
  });
});