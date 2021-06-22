var express = require('express');
var router = express.Router();
// var Video = require('../models/video/video');
// var checkUser = require('./check-user');

/* GET home page. */
router.get('/', function (req, res, next) {
    
    res.render('video/index', {
        title: '新生知訊網 | 影音專區'
    });
});



// 沒寫死
// var PartTimeJob = [],
//     School = [],
//     OldStudent = [],
//     Vlog = [],
//     Live = [],
//     Course = []
// var classname = ["PartTimeJob", "School", "OldStudent", "Vlog", "Live", "Course"]

// function PutIn(arr, video) {
//     arr.push([])
//     arr.push([])
//     arr.push([])
//     arr.push([])
//     for (var i = 0; i < video.length; i++) {
//         arr[0].push(video[i].videoID);
//         arr[1].push(video[i].text)
//         arr[2].push(video[i].imgName)
//         arr[3].push(video[i].information)
//     }
// }


// 寫死
var PartTimeJob = [
    [],
    [],
    [],
    [],
]

var School = [
    ["oPAD_pQEkD0", "dpNMfje74aE", "jLMhs8BEPyM", "_ZxpBpCwODs", "Jggwl4SR89Y", "F3-HHQbUUC0", "KDUeimfJNcs"],
    ["資工系", "化學系", "化學系", "化學系", "化學系", "化學系", "資工系"],
    ["Resurgence.png", "PartTimeJob.png", "BigWind.png", "GeneralCourse.png", "SchoolSong.png", "ChooseCourse.png", "principal.jpg"],
    ["謝謝XXX學長", "謝謝XXX學長", "謝謝XXX學姊", "謝謝XXX學姊", "謝謝XXX學姊", "謝謝XXX學姊", "謝謝XXX學姊"]
]
var OldStudent = [
    ["TOp--JRCZ80", "T6K2a4LC2h4", "-WGvWydP_7Y", "ksbK-aB7QCQ", "kWzlR8Tqrug", "adI4uXxUOuw", "FnqyT8GE0_o", "pGQUwrCXuO0", "nvopTZr4Wo0", "i4AUESbkIJg", "cKMk666jInQ", "YTUDvAwbARM", "TdiIf2Resm8", "T-sogO0vT2Y", "PXbKy2mK6f0", "HkPiW1_xfgg", "EQieH-Mwe8g", "BHUImPlOKqI", "5jQgP5kyyu4", "4a-XK6e08WQ", "QzztszGTqvc", "mdhMqFqMSXU", "9k_lgw8pQYE", "-aXMQb8nPSY", "OBG8EK5vtQE", "w70jvsY8E6I", "GMNib3Q1P5g", "OFrO4r0DkcY"],
    [],
    ["工學院學士班.png", "土木系.png", "化材系.png", "生醫系.png", "中文系.png", "地科學院學士班.png", "地科系.png", "太空系.png", "光電系.png", "化學系.png", "通訊系.png", "企管系.png", "理學院學士班.png", "生科系.png", "資管系.png", "經濟系.png", "資電學院學士班.png", "文學院學士班.png", "電機系.png", "數學系.png", "英文系.png", "資工系.png", "財金系.png", "客社系.png", "物理系.png", "機械系.png", "大氣系.png", "法文系.png"],
    ["謝謝XXX學長"]
]
var Vlog = [
    ["QR7m_5hxyqM"],
    ["資工系"],
    ["VLOG.png"],
    ["謝謝XXX學長"]
]
var Live = [
    ["S3o_OtModJo", "HxAW3uVV-fM", "UPBTHdg9HJ4", "ySij9UQKPRw", "NbC86T84yak"],
    ["電機系", "化學系", "化學系", "化學系", "化學系"],
    ["Food.png", "Housing.png", "Transportation.png", "Education.png", "Entertainment.png"],
    ["謝謝XXX學長", "謝謝XXX學姊", "謝謝XXX學長", "謝謝XXX學姊", "謝謝XXX學姊"]
]
var Course = [
    ["feOq6MWeUXA", "-wIHmPAvMBo"],
    ["電機系", "資工系"],
    ["test.jpg", "heart.jpg"],
    ["謝謝XXX學長", "謝謝XXX學姊"]
]
var data = {
    "PartTimeJob": PartTimeJob,
    "School": School,
    "OldStudent": OldStudent,
    "Vlog": Vlog,
    "Live": Live,
    "Course": Course
}
//沒寫死
// classname.forEach(function (ClsName) {
//     Video.find({
//         'type': ClsName
//     }).exec(function (err, video) {
//         if (err) return next(err);
//         switch (ClsName) {
//             case "PartTimeJob":
//                 PutIn(PartTimeJob, video)
//                 break
//             case "School":
//                 PutIn(School, video)
//                 break
//             case "OldStudent":
//                 PutIn(OldStudent, video)
//                 break
//             case "Vlog":
//                 PutIn(Vlog, video)
//                 break
//             case "Live":
//                 PutIn(Live, video);
//                 break
//             case "Course":
//                 PutIn(Course, video)
//                 break
//         }
//     })
// })


router.get('/ncutube', function (req, res, next) {
    console.log("ii")
    res.render('video/ncutube', {
        title: '新生知訊網 | 影音專區',
        user: req.user,
        PartTimeJob: PartTimeJob,
        School: School,
        OldStudent: OldStudent,
        Vlog: Vlog,
        Live: Live,
        Course: Course
    });
});

//新增
// function check(arr, ID) {
//     if (ID)
//         for (var i = 0; i < arr[0].length; i++) {
//             if (arr[0][i] == ID) return false;
//         }
//     return true;
// }

// function orderData(arr, req) {
//     arr[0].push(req.body.VideoID);
//     arr[1].push(req.body.VideoText);
//     arr[2].push(req.body.VideoPic);
//     arr[3].push(req.body.VideoInformation)
//     console.log(arr);
// }
// router.post('/add', checkUser.isAdmin, function (req, res, next) {
//     var type = req.body.VideoType.split("(")
//     console.log("ID:", req.body.VideoID);
//     if (req.body.VideoID) {
//         console.log("dd");
//         new Video({
//             type: type[0],
//             videoID: req.body.VideoID,
//             text: req.body.VideoText,
//             information: req.body.VideoInformation,
//             imgName: req.body.VideoPic
//         }).save();
//         Video.find({
//             'videoID': req.body.VideoID
//         }).exec(function (err, item) {
//             if (err) return next(err);
//             switch (type[0]) {
//                 case "PartTimeJob":
//                     if (check(PartTimeJob, req.body.VideoID)) orderData(PartTimeJob, req)
//                     break
//                 case "School":
//                     if (check(School, req.body.VideoID)) orderData(School, req)
//                     break
//                 case "OldStudent":
//                     if (check(OldStudent, req.body.VideoID)) orderData(OldStudent, req)
//                     break
//                 case "Vlog":
//                     if (check(Vlog, req.body.VideoID)) orderData(Vlog, req)
//                     break
//                 case "Live":
//                     if (check(Live, req.body.VideoID)) orderData(Live, req);
//                     break
//                 case "Course":
//                     if (check(Course, req.body.VideoID)) orderData(Course, req)
//                     break
//             }
//         })
//     }
//     res.redirect("/video/ncutube")
// });

// //刪除
// function reorderData(arr, id) {
//     var index1 = -1;
//     var buffer_one = [];
//     var buffer_two = [];
//     var buffer_three = [];
//     var buffer_zero = [];
//     for (var i = 0; i < arr[0].length; i++) {
//         if (arr[0][i] == id) {
//             index1 = i;
//             break;
//         }
//     }
//     console.log(index1);
//     for (var i = 0; i < arr[0].length; i++) {
//         if (i != index1) {
//             buffer_zero.push(arr[0][i])
//             buffer_three.push(arr[3][i])
//             buffer_two.push(arr[2][i])
//             buffer_one.push(arr[1][i])
//         }
//     }
//     arr[0] = buffer_zero;
//     arr[1] = buffer_one;
//     arr[2] = buffer_two;
//     arr[3] = buffer_three;
//     console.log(arr);
// }
// router.post('/delete', checkUser.isAdmin, function (req, res, next) {
//     console.log(req.body.DelVideoType)
//     console.log(req.body.DelVideoID)
//     Video.deleteOne({
//         videoID: req.body.DelVideoID
//     }, function (err) {
//         if (err) {
//             console.log("del_error")
//             return err;
//         }
//     })
//     switch (req.body.DelVideoType) {
//         case "PartTimeJob":
//             reorderData(PartTimeJob, req.body.DelVideoID)
//             break
//         case "School":
//             reorderData(School, req.body.DelVideoID)
//             break
//         case "OldStudent":
//             reorderData(OldStudent, req.body.DelVideoID)
//             break
//         case "Vlog":
//             reorderData(Vlog, req.body.DelVideoID)

//             break
//         case "Live":
//             reorderData(Live, req.body.DelVideoID);
//             break
//         case "Course":
//             reorderData(Course, req.body.DelVideoID)
//             break
//     }
//     res.redirect("/video/ncutube")
// });

// function editorderData(arr, id, newid, text, Pic, Info) {
//     var index = -1;
//     for (var i = 0; i < arr[0].length; i++) {
//         if (arr[0][i] == id) {
//             index = i;
//             break;
//         }
//     }
//     if (newid == "nothing") newid = arr[0][index]
//     if (text == "nothing") text = arr[1][index]
//     if (Pic == "nothing") Pic = arr[2][index]
//     if (Info == "nothing") Info = arr[3][index]
//     arr[0][index] = newid;
//     arr[1][index] = text;
//     arr[2][index] = Pic;
//     arr[3][index] = Info;
//     console.log(arr)
// }
// router.post('/edit', checkUser.isAdmin, function (req, res, next) {
//     console.log("edit")
//     console.log(req.body.EditVideoText, req.body.EditVideoPic)
//     var id = req.body.EditVideoID;
//     var newid = 'nothing'
//     var text = 'nothing'
//     var Pic = 'nothing'
//     var Info = "nothing"
//     Video.findOne({
//         videoID: req.body.EditVideoID
//     }, function (err, data) {
//         if (err) {
//             return err;
//         }
//         if (data == null) return
//         if (req.body.EditVideoNewID) {
//             data.videoID = req.body.EditVideoNewID
//             newid = req.body.EditVideoNewID
//         }
//         if (req.body.EditVideoText) {
//             data.text = req.body.EditVideoText
//             text = req.body.EditVideoText;
//         }
//         if (req.body.EditVideoPic) {
//             data.imgName = req.body.EditVideoPic
//             Pic = req.body.EditVideoPic
//         }
//         if (req.body.EditVideoInformation) {
//             data.information = req.body.EditVideoInformation
//             Info = req.body.EditVideoInformation
//         }
//         data.save();
//         switch (req.body.EditVideoType) {
//             case "PartTimeJob":
//                 if (check(PartTimeJob, req.body.VideoID))
//                     editorderData(PartTimeJob, id, newid, text, Pic, Info)
//                 break
//             case "School":
//                 if (check(School, req.body.VideoID))
//                     editorderData(School, id, newid, text, Pic, Info)
//                 break
//             case "OldStudent":
//                 if (check(OldStudent, req.body.VideoID))
//                     editorderData(OldStudent, newid, id, text, Pic, Info)
//                 break
//             case "Vlog":
//                 if (check(Vlog, req.body.VideoID))
//                     editorderData(Vlog, id, newid, text, Pic, Info)
//                 break
//             case "Live":
//                 if (check(Live, req.body.VideoID))
//                     editorderData(Live, id, newid, text, Pic, Info);
//                 break
//             case "Course":
//                 if (check(Course, req.body.VideoID))
//                     editorderData(Course, id, newid, text, Pic, Info)
//                 break
//         }
//     })
//     res.redirect("/video/ncutube")
// });

// router.post('/edit', identity.isAdmin, function (req, res, next) {
//     console.log("edit")
//     // department_data.findOne({
//     name: req.body.name
// }, function (err, data) {
//     if (err) {
//         return err;
//     }
//     console.log(data)
//     data.type = req.body.type,
//         data.en_name = req.body.en_name,
//         data.de_link = req.body.de_link,
//         data.stu_link = req.body.stu_link,
//         data.qna_link = req.body.qna_link,
//         data.save();
//     console.log(data);
//     console.log("edited" + req.body.name);
//     res.send(data);

// })



// });
// router.get('/ShowTV/:class/:id', function (req, res, next) {
//     console.log(req.params.class);
//     vlist = data[req.params.class]
//     // console.log(req.body. + "screen")
//     var vinfomation
//     for (var i = 0; i < vlist[0].length; i++) {
//         if (vlist[0][i] == req.params.id) {
//             vinfomation = vlist[1][i];
//             break;
//         }
//     }
//     console.log(vinfomation);
//     res.render('video/ShowTV', {
//         title: '新生知訊網 | 影音專區',
//         user: req.user,
//         video: req.params.id,
//         vtext: vinfomation,
//         vlist: vlist,
//         vclass: req.params.class
//     });
// });
// router.get('/add', function (req, res, next) {
//     console.log("add");
//     new Video({
//         type: "OldStudent",
//         videoID: "tJM0yIbg8iQ",
//         text: "資工系",
//         imgName: "test"
//     }).save();
//     new Video({
//         type: "Vlog",
//         videoID: "D1PvIWdJ8xo",
//         text: "化學系",
//         imgName: "test"
//     }).save();


//     // res.render('video/ncutube');
// });

module.exports = router;