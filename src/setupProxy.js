const bodyParser = require("body-parser");
const student = {
  userName: "student",
  password: "",
  token: "student-token",
  url: "/student/student",
  firstName: "Patryk",
  lastName: "Sitko",
  nationalNumber: 200528475036,
  imageURL: "https://avatars1.githubusercontent.com/u/22419442?s=400&v=4",
  grades: [
    {
      date: null,
      gradeValue: null,
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices orci vitae metus suscipit ullamcorper. Aliquam suscipit sapien ac dui maximus porta. Nam gravida hendrerit ullamcorper. Morbi semper finibus nibh, eu ornare turpis sagittis condimentum. Proin ut nisi tortor. Aliquam congue erat eget ex sodales consectetur. Nam vel diam sit amet nisl fermentum vulputate nec eget neque. Etiam molestie urna porttitor lectus tristique egestas. Nam convallis finibus porta. Donec est justo, ultrices non orci et, dapibus tincidunt eros. Aenean ullamcorper sem vel risus maximus ultrices. Sed porttitor magna justo, a pulvinar velit tincidunt finibus. Vestibulum sem augue, posuere id porta sit amet, aliquam id sapien.  Nunc mollis nibh sed blandit faucibus. Duis venenatis, ante non molestie gravida, elit ante lobortis arcu, id consectetur erat ligula sed turpis. Vestibulum at ipsum nec tellus finibus mollis sed in nibh. Morbi eu lacus malesuada, porttitor nisl in, ullamcorper sem. Etiam laoreet nibh et odio convallis, ac eleifend nisi porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam rutrum odio lorem, quis vestibulum orci viverra non. Ut condimentum sollicitudin viverra. Nunc quis dignissim ipsum. Suspendisse potenti. Cras placerat at risus id tincidunt. Nullam volutpat ipsum non diam finibus vestibulum quis vel mi. Curabitur vitae blandit arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi ac laoreet metus. Suspendisse vel justo in nunc facilisis euismod. Sed cursus odio et risus interdum viverra. Aliquam convallis euismod sapien, et imperdiet augue auctor ut. Quisque semper mi vel dui molestie ultrices. In ullamcorper diam libero, malesuada elementum ex porttitor id. Phasellus dignissim felis eget enim tincidunt ullamcorper. Curabitur dignissim sollicitudin laoreet. Suspendisse id semper ex. Nam pretium pulvinar eros tristique viverra. Pellentesque rutrum pulvinar rhoncus. Vivamus pulvinar rhoncus lorem. Praesent ultrices turpis ac orci accumsan, vitae commodo diam cursus. Nam venenatis mauris ut condimentum cursus. Vivamus tincidunt nec nulla non egestas. Integer a scelerisque nisl. Sed quis mi molestie, sodales nibh id, tincidunt ipsum. Nullam hendrerit eleifend elit. Vestibulum quam ex, pellentesque eget vulputate a, venenatis id dolor. Pellentesque semper tincidunt consectetur. Integer ligula dui, fermentum in pulvinar a, maximus eget ligula. Proin justo ligula, interdum nec tempor et, aliquam eu est. In vitae finibus ante, eu viverra erat. Suspendisse porttitor a orci ut tempus. Nullam hendrerit enim id leo tincidunt sollicitudin. Cras placerat, magna eu viverra ultricies, lectus urna suscipit nibh, a pellentesque diam mauris ac purus. Integer sit amet congue sem. Nunc ullamcorper lobortis consequat. Nam ut iaculis dolor, a fringilla lorem. Sed malesuada, nunc nec elementum cursus, massa diam tincidunt ligula, vitae tincidunt arcu nisl eu neque. Morbi porttitor pretium est, sodales lacinia eros auctor sed. Quisque et tortor nisl. Pellentesque quis congue tortor, ut euismod mauris.",
      examTitle: "Test exam 9",
      examMaxGrade: 120,
      examWeight: 15
    },
    {
      date: null,
      gradeValue: null,
      feedback: "Feedback for student about: Test exam 9",
      examTitle: "Test exam 10",
      examMaxGrade: 120,
      examWeight: 15
    },
    {
      date: null,
      gradeValue: null,
      feedback: "Feedback for student about: Test exam 4",
      examTitle: "Test exam 4",
      examMaxGrade: 50,
      examWeight: 6
    },
    {
      date: null,
      gradeValue: null,
      feedback: "Feedback for student about: Test exam 62",
      examTitle: "Test exam 62",
      examMaxGrade: 60,
      examWeight: 13
    },
    {
      date: null,
      gradeValue: null,
      feedback: "Feedback for student about: Test exam 97",
      examTitle: "Test exam 97",
      examMaxGrade: 90,
      examWeight: 14
    },
    {
      date: null,
      gradeValue: null,
      feedback: "Feedback for student about: Test exam 4",
      examTitle: "Test exam 4",
      examMaxGrade: 50,
      examWeight: 6
    },
    {
      date: null,
      gradeValue: null,
      feedback: "Feedback for student about: Test exam 62",
      examTitle: "Test exam 62",
      examMaxGrade: 60,
      examWeight: 13
    },
    {
      date: null,
      gradeValue: null,
      feedback: "Feedback for student about: Test exam 97",
      examTitle: "Test exam 97",
      examMaxGrade: 90,
      examWeight: 14
    },
    {
      date: null,
      gradeValue: null,
      feedback: "Feedback for student about: Test exam 4",
      examTitle: "Test exam 4",
      examMaxGrade: 50,
      examWeight: 6
    },
    {
      date: null,
      gradeValue: null,
      feedback: "Feedback for student about: Test exam 62",
      examTitle: "Test exam 62",
      examMaxGrade: 60,
      examWeight: 13
    },
    {
      date: null,
      gradeValue: null,
      feedback: "Feedback for student about: Test exam 97",
      examTitle: "Test exam 97",
      examMaxGrade: 90,
      examWeight: 14
    }
  ],
  percentage: 0.936231884057971
};
const grade = {
  date: null,
  gradeValue: null,
  feedback:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices orci vitae metus suscipit ullamcorper. Aliquam suscipit sapien ac dui maximus porta. Nam gravida hendrerit ullamcorper. Morbi semper finibus nibh, eu ornare turpis sagittis condimentum. Proin ut nisi tortor. Aliquam congue erat eget ex sodales consectetur. Nam vel diam sit amet nisl fermentum vulputate nec eget neque. Etiam molestie urna porttitor lectus tristique egestas. Nam convallis finibus porta. Donec est justo, ultrices non orci et, dapibus tincidunt eros. Aenean ullamcorper sem vel risus maximus ultrices. Sed porttitor magna justo, a pulvinar velit tincidunt finibus. Vestibulum sem augue, posuere id porta sit amet, aliquam id sapien.  Nunc mollis nibh sed blandit faucibus. Duis venenatis, ante non molestie gravida, elit ante lobortis arcu, id consectetur erat ligula sed turpis. Vestibulum at ipsum nec tellus finibus mollis sed in nibh. Morbi eu lacus malesuada, porttitor nisl in, ullamcorper sem. Etiam laoreet nibh et odio convallis, ac eleifend nisi porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam rutrum odio lorem, quis vestibulum orci viverra non. Ut condimentum sollicitudin viverra. Nunc quis dignissim ipsum. Suspendisse potenti. Cras placerat at risus id tincidunt. Nullam volutpat ipsum non diam finibus vestibulum quis vel mi. Curabitur vitae blandit arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi ac laoreet metus. Suspendisse vel justo in nunc facilisis euismod. Sed cursus odio et risus interdum viverra. Aliquam convallis euismod sapien, et imperdiet augue auctor ut. Quisque semper mi vel dui molestie ultrices. In ullamcorper diam libero, malesuada elementum ex porttitor id. Phasellus dignissim felis eget enim tincidunt ullamcorper. Curabitur dignissim sollicitudin laoreet. Suspendisse id semper ex. Nam pretium pulvinar eros tristique viverra. Pellentesque rutrum pulvinar rhoncus. Vivamus pulvinar rhoncus lorem. Praesent ultrices turpis ac orci accumsan, vitae commodo diam cursus. Nam venenatis mauris ut condimentum cursus. Vivamus tincidunt nec nulla non egestas. Integer a scelerisque nisl. Sed quis mi molestie, sodales nibh id, tincidunt ipsum. Nullam hendrerit eleifend elit. Vestibulum quam ex, pellentesque eget vulputate a, venenatis id dolor. Pellentesque semper tincidunt consectetur. Integer ligula dui, fermentum in pulvinar a, maximus eget ligula. Proin justo ligula, interdum nec tempor et, aliquam eu est. In vitae finibus ante, eu viverra erat. Suspendisse porttitor a orci ut tempus. Nullam hendrerit enim id leo tincidunt sollicitudin. Cras placerat, magna eu viverra ultricies, lectus urna suscipit nibh, a pellentesque diam mauris ac purus. Integer sit amet congue sem. Nunc ullamcorper lobortis consequat. Nam ut iaculis dolor, a fringilla lorem. Sed malesuada, nunc nec elementum cursus, massa diam tincidunt ligula, vitae tincidunt arcu nisl eu neque. Morbi porttitor pretium est, sodales lacinia eros auctor sed. Quisque et tortor nisl. Pellentesque quis congue tortor, ut euismod mauris.",
  examTitle: "Test exam 9",
  examMaxGrade: 120,
  examWeight: 15
};
const groups = [
  {
    id: 14,
    groupCode: "Java1",
    groupName: "Java1",
    active: true,
    studentList: null
  },
  {
    id: 15,
    groupCode: "Java2",
    groupName: "Java2",
    active: true,
    studentList: null
  },
  {
    id: 16,
    groupCode: "Java3",
    groupName: "Java3",
    active: true,
    studentList: null
  },
  {
    id: 17,
    groupCode: "JavaIOT1",
    groupName: "JavaIOT1",
    active: true,
    studentList: null
  },
  {
    id: 17,
    groupCode: "JavaIOT2",
    groupName: "JavaIOT2",
    active: true,
    studentList: null
  },
  {
    id: 17,
    groupCode: "JavaIOT3",
    groupName: "JavaIOT3",
    active: true,
    studentList: null
  },
  {
    id: 18,
    groupCode: "DotNET",
    groupName: "DotNET",
    active: true,
    studentList: null
  },
  {
    id: 19,
    groupCode: "PC",
    groupName: "PC",
    active: true,
    studentList: null
  }
];

const group14 = {
  id: 14,
  groupCode: "Java1",
  groupName: "Java1",
  active: true,
  examList: [
    {
      examHash:
        "4549e672770b1fd163ac68a0bcc203e40298394d536c8eff4cdd814d5bd79c42",
      date: "2019-03-22",
      examTitle: "Test exam 9",
      examMaxGrade: 120,
      examWeight: 15
    },
    {
      examHash:
        "4549e672770b1fd163ac68a0bcc203e40298394d536c8eff4cdd814d5bd79c42",
      date: "2019-01-01",
      examTitle: "Test exam 8",
      examMaxGrade: 100,
      examWeight: 10
    },
    {
      examHash:
        "4549e672770b1fd163ac68a0bcc203e40298394d536c8eff4cdd814d5bd79c42",
      date: "2019-01-02",
      examTitle: "Test exam 7",
      examMaxGrade: 90,
      examWeight: 5
    }
  ],
  studentList: [
    {
      studentHash:
        "4549e672770b1fd163ac68a0bcc203e40298394d536c8eff4cdd814d5bd79c42",
      studentName: "Frances Reinold",
      imageURL: "https://i.imgur.com/veXMns9.png"
    },
    {
      studentHash:
        "f98c21117fd5b51ac796fa6e8c560a61c32370615c06af2615f3e0bc10b8c3eb",
      studentName: "Ninnette Redman",
      imageURL:
        "http://www.naijatori.com/wordpress/wp-content/uploads/2012/07/Page_14.jpg"
    },
    {
      studentHash:
        "367086e8e22dc0a24715f55a6b539363b44200e2c5df22b9d7fb6d8214dcd6be",
      studentName: "Annalise Orest",
      imageURL: "https://i.imgur.com/veXMns9.png"
    },
    {
      studentHash:
        "60ca21c08e0290809506bc07ecd9bf13911397552a35ff5904cf85feb3dd8a2a",
      studentName: "Margot Brianna",
      imageURL: "https://i.imgur.com/veXMns9.png"
    },
    {
      studentHash:
        "06427fc6becb63639cb38811b6ba41266d690eafcf01f8e0c7775a94adb56c98",
      studentName: "Doreen Alage",
      imageURL: "https://i.imgur.com/veXMns9.png"
    },
    {
      studentHash:
        "969f93943b3913a0aca5455b49fc1514a2f2b41169fd94b245faa40998490f8a",
      studentName: "Kaylyn Josephine",
      imageURL: "https://i.imgur.com/veXMns9.png"
    },
    {
      studentHash:
        "2bac3c49958d43fede79c4762ab3feb05a5da44fdae81a55bdc1ac8ee0bf5b98",
      studentName: "Eleen Mellisa",
      imageURL: "https://i.imgur.com/veXMns9.png"
    },
    {
      studentHash:
        "dec32b54d6eaa97e790460763a61b4782a9a9ff355c8977f02ad237873a328e9",
      studentName: "Jasmin Aaren",
      imageURL: "https://i.imgur.com/veXMns9.png"
    },
    {
      studentHash:
        "122bd2d2423b8a7f00e6b7996b1fe7525d893c4c6eb579e426ef32b94aca2d6e",
      studentName: "Corella Lodhia",
      imageURL: "https://i.imgur.com/veXMns9.png"
    },
    {
      studentHash:
        "81b661986fed2ee6c56b30fec59f1b478ea9559cde51e446c09e690c3ecc268f",
      studentName: "Othella Joel",
      imageURL: "https://i.imgur.com/veXMns9.png"
    },
    {
      studentHash:
        "e494492f8b45344432ce9c9239fc5c999aa48254d5e866a6fb6fa44c2185f3bf",
      studentName: "Geralda Morley",
      imageURL: "https://i.imgur.com/veXMns9.png"
    },
    {
      studentHash:
        "91852ccbd37109bc597805618dfe175064876456c539738e504c413bfb375d54",
      studentName: "Ottilie Arlana",
      imageURL: "https://i.imgur.com/veXMns9.png"
    },
    {
      studentHash:
        "1a8e25e333217a8f1cf220e8fdd2515266d2921d29c116aa7eddcddd6309ada4",
      studentName: "Yvette Carvey",
      imageURL: "https://i.imgur.com/veXMns9.png"
    }
  ]
};
const group15 = {
  id: 15,
  groupCode: "Java2",
  groupName: "Java2",
  active: true,
  examList: [
    {
      examHash:
        "4549e672770b1fd163ac68a0bcc203e40298394d536c8eff4cdd814d5bd79c42",
      date: "2019-03-22",
      examTitle: "Test exam 9",
      examMaxGrade: 120,
      examWeight: 15
    },
    {
      examHash:
        "4549e672770b1fd163ac68a0bcc203e40298394d536c8eff4cdd814d5bd79c42",
      date: "2019-01-01",
      examTitle: "Test exam 8",
      examMaxGrade: 100,
      examWeight: 10
    },
    {
      examHash:
        "4549e672770b1fd163ac68a0bcc203e40298394d536c8eff4cdd814d5bd79c42",
      date: "2019-01-02",
      examTitle: "Test exam 7",
      examMaxGrade: 90,
      examWeight: 5
    }
  ],
  studentList: [
    {
      studentHash:
        "4549e672770b1fd163ac68a0bcc203e40298394d536c8eff4cdd814d5bd79c42",
      studentName: "Frances Reinold",
      imageURL: "https://i.imgur.com/veXMns9.png"
    },
    {
      studentHash:
        "f98c21117fd5b51ac796fa6e8c560a61c32370615c06af2615f3e0bc10b8c3eb",
      studentName: "Ninnette Redman",
      imageURL:
        "http://www.naijatori.com/wordpress/wp-content/uploads/2012/07/Page_14.jpg"
    },
    {
      studentHash:
        "367086e8e22dc0a24715f55a6b539363b44200e2c5df22b9d7fb6d8214dcd6be",
      studentName: "Annalise Orest",
      imageURL: "https://i.imgur.com/veXMns9.png"
    },
    {
      studentHash:
        "60ca21c08e0290809506bc07ecd9bf13911397552a35ff5904cf85feb3dd8a2a",
      studentName: "Margot Brianna",
      imageURL: "https://i.imgur.com/veXMns9.png"
    },
    {
      studentHash:
        "06427fc6becb63639cb38811b6ba41266d690eafcf01f8e0c7775a94adb56c98",
      studentName: "Doreen Alage",
      imageURL: "https://i.imgur.com/veXMns9.png"
    },
    {
      studentHash:
        "969f93943b3913a0aca5455b49fc1514a2f2b41169fd94b245faa40998490f8a",
      studentName: "Kaylyn Josephine",
      imageURL: "https://i.imgur.com/veXMns9.png"
    },
    {
      studentHash:
        "2bac3c49958d43fede79c4762ab3feb05a5da44fdae81a55bdc1ac8ee0bf5b98",
      studentName: "Eleen Mellisa",
      imageURL: "https://i.imgur.com/veXMns9.png"
    },
    {
      studentHash:
        "dec32b54d6eaa97e790460763a61b4782a9a9ff355c8977f02ad237873a328e9",
      studentName: "Jasmin Aaren",
      imageURL: "https://i.imgur.com/veXMns9.png"
    },
    {
      studentHash:
        "122bd2d2423b8a7f00e6b7996b1fe7525d893c4c6eb579e426ef32b94aca2d6e",
      studentName: "Corella Lodhia",
      imageURL: "https://i.imgur.com/veXMns9.png"
    },
    {
      studentHash:
        "81b661986fed2ee6c56b30fec59f1b478ea9559cde51e446c09e690c3ecc268f",
      studentName: "Othella Joel",
      imageURL: "https://i.imgur.com/veXMns9.png"
    },
    {
      studentHash:
        "e494492f8b45344432ce9c9239fc5c999aa48254d5e866a6fb6fa44c2185f3bf",
      studentName: "Geralda Morley",
      imageURL: "https://i.imgur.com/veXMns9.png"
    },
    {
      studentHash:
        "91852ccbd37109bc597805618dfe175064876456c539738e504c413bfb375d54",
      studentName: "Ottilie Arlana",
      imageURL: "https://i.imgur.com/veXMns9.png"
    },
    {
      studentHash:
        "1a8e25e333217a8f1cf220e8fdd2515266d2921d29c116aa7eddcddd6309ada4",
      studentName: "Yvette Carvey",
      imageURL: "https://i.imgur.com/veXMns9.png"
    }
  ]
};
const instructors = [
  {
    userName: "instructor",
    password: "",
    token: "instructor-token",
    url: "/instructor/groups",
    firstName: "Patryk",
    lastName: "Sitko",
    nationalNumber: 200528475036,
    imageURL: "https://avatars1.githubusercontent.com/u/22419442?s=400&v=4"
  }
];
module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/login", (req, res) => {
    res.status(200);
    if (req.body.userName === "student" && req.body.password === "") {
      res.json({
        url: "/student/student",
        token: "student-token"
      });
    } else {
      if (req.body.userName !== "student") {
        if (req.body.userName === "instructor" && req.body.password === "") {
          res.json({
            url: "/instructor/group",
            token: "instructor-token"
          });
        } else {
          res.statusMessage =
            "We could not find you in our database... contact your teacher";
          res.sendStatus(203);
        }
      } else {
        res.statusMessage = "Wrong password!";
        res.sendStatus(203);
      }
    }
  });

  app.post("/student/:userName", (req, res) => {
    const { userName, password, token, ...data } = student;
    if (
      (req.params.userName === "student" &&
        req.body.token === "student-token") ||
      req.body.token === "instructor-token"
    ) {
      res.status(200);
      res.json(data);
    } else {
      res.statusMessage = "Acces denied!";
      res.sendStatus(203);
    }
  });
  app.get("/instructor/group", (req, res) => {
    res.status(200);
    res.json(groups);
  });
  app.get("/instructor/group/:id", (req, res) => {
    res.status(200);
    console.log(req.params);
    if (req.params.id == 14) res.json(group14);
    else res.json(group15);
  });
  app.get("/instructor/group/:id/:examId/:studentHash", (req, res) => {
    res.status(200);
    res.json(grade);
  });
};
