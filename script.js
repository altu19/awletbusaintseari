var subtopics = {
    physics: {
        "Physical world and measurement": [
            { name: "SubTopic1", link: "https://drive.google.com/file/d/1dKa16H5N2731AfgagC2sPdC5B6dYTSgm/view?usp=drive_link" },
            { name: "SubTopic2", link: "ques.pdf" },
            { name: "SubTopic3", link: "Physical_world_measurement_pdf3.pdf" },
            { name: "SubTopic4", link: "Physical_world_measurement_pdf4.pdf" },
            { name: "SubTopic5", link: "Physical_world_measurement_pdf5.pdf" }
        ],
        "Kinematics": [
            { name: "SubTopic1", link: "Kinematics_pdf1.pdf" },
            { name: "SubTopic2", link: "Kinematics_pdf2.pdf" },
            { name: "SubTopic3", link: "Kinematics_pdf3.pdf" },
            { name: "SubTopic4", link: "Kinematics_pdf4.pdf" }
        ],
        "NLM": [
            { name: "SubTopic1", link: "qs.pdf" },
            { name: "SubTopic4", link: "Physical_world_measurement_pdf4.pdf" },
            { name: "SubTopic5", link: "Physical_world_measurement_pdf5.pdf" }
        ]
    },
    chemistry: {
        "Some Chemistry Topic 1": [
            { name: "SubTopic1", link: "https://drive.google.com/file/d/16XxDYQ3gUaUyibvnmu6pWQ3Ucy9sa_Hw/view?usp=drive_link" },
            { name: "SubTopic2", link: "Chemistry_topic1_pdf2.pdf" },
            { name: "SubTopic3", link: "Chemistry_topic1_pdf3.pdf" },
            { name: "SubTopic4", link: "Chemistry_topic1_pdf4.pdf" },
            { name: "SubTopic5", link: "Chemistry_topic1_pdf5.pdf" }
        ]
    }
};

function showTopics(subject) {
    var topics = Object.keys(subtopics[subject]);
    var topicContainer = document.getElementById("topics-container");
    var html = "<h2>Topics inside " + subject.charAt(0).toUpperCase() + subject.slice(1) + ":</h2>";
    html += "<ul class='topic-list'>";
    topics.forEach(function(topic) {
        html += "<li><button class='topic-button' onclick='showSubtopics(\"" + subject + "\", \"" + topic + "\")'>" + topic + "</button></li>";
    });
    html += "</ul>";
    topicContainer.innerHTML = html;
}

function showSubtopics(subject, topic) {
    var subtopicList = subtopics[subject][topic];
    var subtopicContainer = document.getElementById("topics-container"); // Change here
    var html =  "<h2>" + topic + "</h2>";
    subtopicList.forEach(function(subtopic) {
        html += "<div class='box'>";
        html += "<h2>" + subtopic.name + "</h2>";
        html += "<a href='" + subtopic.link + "'target=_blank class='button' download>Download " + subtopic.name + "</a>";
        html += "</div>";
    });
    subtopicContainer.innerHTML = html;
}
function openPDF(pdfLink) {
    window.open(pdfLink, '_blank');
}