const mongoose = require("mongoose");
const CV = mongoose.model("CV");

exports.getHomePage = (req, res) => {
    CV.find((error, CVs) => {
        if (!error) {
            if (!IsEmpty(CVs)) {
                res.render('index.ejs', {
                    Items: CVs,
                });
            }
            else {
                console.log('Database is empty.');
                res.render('empty.ejs');
            }
        }
        else {
            console.log('Failed to retrieve data.');
        }
    });
};

function IsEmpty(CVs){
    let Items = null;
    CVs.forEach(Object => {
        Items += Object;
    });

    return (Items == null);
}

exports.GetAdminPage = (req, res) => {
    CV.find((error, CVs) => {
        if (!error) {
            if (!IsEmpty(CVs)) {
                res.render("index.ejs", {
                    Items:CVs,
                });
            }
            else{
                console.log("Database is empty.");
                res.render('empty.ejs');
            }
        }
        else{
            console.log('Failed to retrieve data.');
        }
    });
};

exports.GetCV = (req, res) => {
    CV.find((error, CVs) => {
        if (!error) {
            res.render("AddCV.ejs", {
                Items: CVs,
            });
        }
        else{
            console.log("Failed to retrieve data.");
        }
    });
};

exports.PostCV = (req, res) => {
    let MyCV = new CV();
    MyCV.First_Name = req.body.NewFirst;
    MyCV.Last_Name = req.body.NewLast;
    MyCV.Objective = req.body.NewObjective;
    var Array = req.body.Input_education.split(",").map(String);
    MyCV.Education = Array;

    MyCV.Education = [
        "Tallinna Tööstushariduskeskus (Eesti, Kutseharidus)",
        "Keila kool (Eesti, Põhiharidus)"
    ];

    MyCV.Education_Year = [
        "2019 - ...",
        "2010 - 2019"
    ];

    MyCV.Languages = [
        "Eesti C1 C1 C1 C1",
        "Inglise B2 B2 B2 B2",
        "Vene A1 A1 A1 A1"
    ]

    MyCV.Computer_Knowledge = [
        "Python",
        "Word",
        "Excel",
        "C#",
        "JavaScript",
        "CSS",
        "Powerpoint",
        "HTML"
    ];

    MyCV.save((error, response) => {
        if (!error) {
            res.redirect("/")
        }
        else{
            console.log("Failed to save data.");
        }
    })
};

exports.GetJson = (req, res) => {
    CV.find((error, CVs) => {
        if (!error) {
            const data = {Items: CVs};
            res.json(data);
        }
        else{
            console.log("Failed to save data.");
        }
    });
};

exports.DBDelete = (req, res) => {
    CV.remove((error, response) => {
        if (!error) {
            res.redirect("/admin");
            console.log("Successfully deleted database.");
        }
        else{
            console.log("Failed to delete database");
        }
    });
};