const bodyParser = require("body-parser");
const db = {
  userName: "patryk",
  password: "",
  token: "test-token",
  url: "student/patryk",
  firstName: "Patryk",
  lastName: "Sitko",
  nationalNumber: 200528475036,
  imageURL: "https://avatars1.githubusercontent.com/u/22419442?s=400&v=4",
  grades: [
    {
      date: null,
      gradeValue: 8,
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices orci vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lacinia turpis, a laoreet libero finibus vel. Suspendisse ultrices orci vitae metus suscipit ullamcorper. Aliquam suscipit sapien ac dui maximus porta. Nam gravida hendrerit ullamcorper. Morbi semper finibus nibh, eu ornare turpis sagittis condimentum. Proin ut nisi tortor. Aliquam congue erat eget ex sodales consectetur. Nam vel diam sit amet nisl fermentum vulputate nec eget neque. Etiam molestie urna porttitor lectus tristique egestas. Nam convallis finibus porta. Donec est justo, ultrices non orci et, dapibus tincidunt eros. Aenean ullamcorper sem vel risus maximus ultrices. Sed porttitor magna justo, a pulvinar velit tincidunt finibus. Vestibulum sem augue, posuere id porta sit amet, aliquam id sapien.  Nunc mollis nibh sed blandit faucibus. Duis venenatis, ante non molestie gravida, elit ante lobortis arcu, id consectetur erat ligula sed turpis. Vestibulum at ipsum nec tellus finibus mollis sed in nibh. Morbi eu lacus malesuada, porttitor nisl in, ullamcorper sem. Etiam laoreet nibh et odio convallis, ac eleifend nisi porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam rutrum odio lorem, quis vestibulum orci viverra non. Ut condimentum sollicitudin viverra. Nunc quis dignissim ipsum. Suspendisse potenti. Cras placerat at risus id tincidunt. Nullam volutpat ipsum non diam finibus vestibulum quis vel mi. Curabitur vitae blandit arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi ac laoreet metus. Suspendisse vel justo in nunc facilisis euismod. Sed cursus odio et risus interdum viverra. Aliquam convallis euismod sapien, et imperdiet augue auctor ut. Quisque semper mi vel dui molestie ultrices. In ullamcorper diam libero, malesuada elementum ex porttitor id. Phasellus dignissim felis eget enim tincidunt ullamcorper. Curabitur dignissim sollicitudin laoreet. Suspendisse id semper ex. Nam pretium pulvinar eros tristique viverra. Pellentesque rutrum pulvinar rhoncus. Vivamus pulvinar rhoncus lorem. Praesent ultrices turpis ac orci accumsan, vitae commodo diam cursus. Nam venenatis mauris ut condimentum cursus. Vivamus tincidunt nec nulla non egestas. Integer a scelerisque nisl. Sed quis mi molestie, sodales nibh id, tincidunt ipsum. Nullam hendrerit eleifend elit. Vestibulum quam ex, pellentesque eget vulputate a, venenatis id dolor. Pellentesque semper tincidunt consectetur. Integer ligula dui, fermentum in pulvinar a, maximus eget ligula. Proin justo ligula, interdum nec tempor et, aliquam eu est. In vitae finibus ante, eu viverra erat. Suspendisse porttitor a orci ut tempus. Nullam hendrerit enim id leo tincidunt sollicitudin. Cras placerat, magna eu viverra ultricies, lectus urna suscipit nibh, a pellentesque diam mauris ac purus. Integer sit amet congue sem. Nunc ullamcorper lobortis consequat. Nam ut iaculis dolor, a fringilla lorem. Sed malesuada, nunc nec elementum cursus, massa diam tincidunt ligula, vitae tincidunt arcu nisl eu neque. Morbi porttitor pretium est, sodales lacinia eros auctor sed. Quisque et tortor nisl. Pellentesque quis congue tortor, ut euismod mauris.",
      examTitle: "Test exam 9",
      examMaxGrade: 120,
      examWeight: 15
    },
    {
      date: null,
      gradeValue: 8,
      feedback: "Feedback for student about: Test exam 9",
      examTitle: "Test exam 9",
      examMaxGrade: 120,
      examWeight: 15
    },
    {
      date: null,
      gradeValue: 14,
      feedback: "Feedback for student about: Test exam 4",
      examTitle: "Test exam 4",
      examMaxGrade: 50,
      examWeight: 6
    },
    {
      date: null,
      gradeValue: 2,
      feedback: "Feedback for student about: Test exam 62",
      examTitle: "Test exam 62",
      examMaxGrade: 60,
      examWeight: 13
    },
    {
      date: null,
      gradeValue: 83,
      feedback: "Feedback for student about: Test exam 97",
      examTitle: "Test exam 97",
      examMaxGrade: 90,
      examWeight: 14
    },
    {
      date: null,
      gradeValue: 14,
      feedback: "Feedback for student about: Test exam 4",
      examTitle: "Test exam 4",
      examMaxGrade: 50,
      examWeight: 6
    },
    {
      date: null,
      gradeValue: 2,
      feedback: "Feedback for student about: Test exam 62",
      examTitle: "Test exam 62",
      examMaxGrade: 60,
      examWeight: 13
    },
    {
      date: null,
      gradeValue: 83,
      feedback: "Feedback for student about: Test exam 97",
      examTitle: "Test exam 97",
      examMaxGrade: 90,
      examWeight: 14
    },
    {
      date: null,
      gradeValue: 14,
      feedback: "Feedback for student about: Test exam 4",
      examTitle: "Test exam 4",
      examMaxGrade: 50,
      examWeight: 6
    },
    {
      date: null,
      gradeValue: 2,
      feedback: "Feedback for student about: Test exam 62",
      examTitle: "Test exam 62",
      examMaxGrade: 60,
      examWeight: 13
    },
    {
      date: null,
      gradeValue: 83,
      feedback: "Feedback for student about: Test exam 97",
      examTitle: "Test exam 97",
      examMaxGrade: 90,
      examWeight: 14
    }
  ],
  percentage: 0.336231884057971
};
module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/login", (req, res) => {
    if (
      req.body.userName === db.userName &&
      req.body.password === db.password
    ) {
      res.status(200);
      res.json({ url: db.url, token: db.token });
    } else {
      if (req.body.userName !== db.userName) {
        res.statusMessage =
          "We could not find you in our database... contact your teacher";
        res.sendStatus(203);
      } else {
        res.statusMessage = "Wrong password!";
        res.sendStatus(203);
      }
    }
  });

  app.post("/student/:userName", (req, res) => {
    const { userName, password, token, ...data } = db;
    if (req.params.userName === userName && req.body.token === token) {
      res.status(200);
      res.json(data);
    } else {
      res.statusMessage = "Acces denied!";
      res.sendStatus(203);
    }
  });
};
