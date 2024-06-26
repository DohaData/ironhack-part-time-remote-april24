const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");
const port = 3000;
 
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views")); // `${__dirname}/views`
app.use(express.static(path.join(__dirname, "public"))); // `${__dirname}/public`
hbs.registerPartials(__dirname + "/views/partials"); // handlebars knows where to find the partials

app.get("/", (req, res, next) => res.render("index", ));// disable layout with {layout: false}
 
app.get("/players", (req, res, next) => {
    const players = [
        {
          name: "Russell",
          lastName: "Westbrook",
          team: "OKC",
          photo: "https://thunderousintentions.com/wp-content/uploads/getty-images/2017/12/891998404-oklahoma-city-thunder-v-indiana-pacers.jpg",
          average: [
            { year: 2013, points: 82 },
            { year: 2014, points: 82 },
            { year: 2015, points: 60 },
            { year: 2016, points: 46 },
            { year: 2017, points: 67 },
            { year: 2018, points: 80 }
          ]
        },
        {
          name: "Kevin",
          lastName: "Durant",
          team: "GSW",
          photo: "https://img.bleacherreport.net/img/images/photos/003/670/482/hi-res-3c2473cd8600df96c4b94c93808562c8_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top",
          average: [
            { year: 2013, points: 76 },
            { year: 2014, points: 80 },
            { year: 2015, points: 65 },
            { year: 2016, points: 50 },
            { year: 2017, points: 67 },
            { year: 2018, points: 78 }
          ]
        },
        {
          name: "Lebron",
          lastName: "James",
          team: "CLE",
          photo: "https://usatftw.files.wordpress.com/2018/01/ap_cavaliers_timberwolves_basketball.jpg?w=1000&h=600&crop=1",
          average: [
            { year: 2013, points: 78 },
            { year: 2014, points: 82 },
            { year: 2015, points: 76 },
            { year: 2016, points: 84 },
            { year: 2017, points: 67 },
            { year: 2018, points: 60 }
          ]
        },
        {
          name: "Emanuel",
          lastName: "Ginóbilli",
          team: "SAS",
          photo: "https://cdn.vox-cdn.com/thumbor/Z9kR0HDJrzOzxOdwGe7Jwyxxvjk=/0x0:2802x4203/1200x800/filters:focal(1329x1158:1777x1606)/cdn.vox-cdn.com/uploads/chorus_image/image/57733525/usa_today_10429631.0.jpg",
          average: [
            { year: 2013, points: 82 },
            { year: 2014, points: 76 },
            { year: 2015, points: 74 },
            { year: 2016, points: 80 },
            { year: 2017, points: 66 },
            { year: 2018, points: 63 }
          ]
        },
        {
          name: "Kyrie",
          lastName: "Irving",
          team: "BOS",
          photo: "https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/11/11/kyrie-irving-mvp-case.jpg?itok=PWYqUSGf",
          average: [
            { year: 2013, points: 74 },
            { year: 2014, points: 72 },
            { year: 2015, points: 66 },
            { year: 2016, points: 82 },
            { year: 2017, points: 64 },
            { year: 2018, points: 61 }
          ]
        }
      ];

    res.render("players", { players })});
 
app.get("/teams", (req, res, next) => res.render("teams"));
 
app.listen(port, ()=>console.log(`Iron-nba-project is listening on port ${port}`));