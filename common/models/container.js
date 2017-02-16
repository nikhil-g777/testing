'use strict';

var watermark = require('image-watermark');
var fs = require('fs');
const gm = require('gm');
var imaginary = require('imaginary')
var lwip = require('lwip');
var Jimp = require("jimp");
var moment = require('moment');
var im = require('imagemagick');

var serverUrl = 'http://imaginary.company.net';
// var serverUrl = 'http://localhost:3000';
module.exports = function (Container) {

    Container.afterRemote('**', function addwatermark(ctx, res, next) {
        try {

            // gm('./server/storage/images/img_hkd.jpg')
            //     .write(fs.createWriteStream('./server/storage/images/fgin.jpg'), function (err) {
            //         if (err)
            //         console.log(err);
            //     });

            var options = {
                'text': 'sample watermark',
                'color': 'rgb(154, 50, 46)'
            };
            watermark.embedWatermark('./server/storage/images/img_hkd.jpg', options);


            setTimeout(function () {
                next();
            }, 2000)


        } catch (err) {
            console.log(err);
            next();
        }

    });





    // Container.afterRemote('upload', function (ctx, instance, next) {


    //     // gm('./server/storage/images/img_hkd.jpg')
    //     //     // .stroke("#ffffff")
    //     //     // .drawCircle(10, 10, 20, 10)
    //     //        .flip()
    //     //     // .resize(240, 240)
    //     //     // .font("Helvetica.ttf", 12)
    //     //     // .drawText(30, 20, "GMagick!")
    //     //     .write('./server/storage/images/img_hkd.png', function (err) {
    //     //         if(err)console.log(err);
    //     //         next();

    //     //     });

    //     // imaginary('./server/storage/images/img_hkd.jpg')
    //     //     .watermark({ text: 'copyright' })
    //     //     .on('error', function (err) {
    //     //         console.error('Cannot add watermark', err)
    //     //     })
    //     //     .pipe(fs.createWriteStream('./server/storage/images/result.jpg'))

    //     // Jimp.read(fileName)
    //     //     .then(function (image) {
    //     //         loadedImage = image;
    //     //         return Jimp.loadFont(Jimp.FONT_SANS_20_BLACK);
    //     //     })
    //     //     .then(function (font) {
    //     //         loadedImage.print(font, 1, 1, imageCaption)
    //     //         loadedImage.greyscale()
    //     //             .write('./server/storage/images/one.jpg');
    //     //     })
    //     //     .catch(function (err) {
    //     //         console.error(err);
    //     //     });

    //     // Jimp.read(fileName)
    //     //     .then(function (image) {
    //     //         Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
    //     //             image.print(font, 10, 10, "Hello world!").write("./server/storage/images/123456.jpg");
    //     //         });
    //     //     })
    //     //     .catch(function (err) {
    //     //         console.error(err);
    //     //     });


    //     // var writeStream = fs.createWriteStream('./server/storage/images/abc.jpg');
    //     // gm('./server/storage/images/img_hkd.png')
    //     //     .resize('200', '200')
    //     //     .stream()
    //     //     .pipe(writeStream);
    //     //     next();

    //     // watermark.embedWatermark('./server/storage/images/img_hkd.jpg', { 'text': 'sample watermark' });
    //     // imaginary('./server/storage/images/img_hkd.jpg')
    //     //     .server(serverUrl)
    //     //     .crop({ widht: 200, height: 200 })
    //     //     .on('error', function (err) {
    //     //         console.error('Cannot resize the image:', err)
    //     //     })
    //     //     .pipe(fs.createWriteStream('./server/storage/images/img_hkd.jpg'))

    //     // imaginary('http://sustainablefoodtrust.org/wp-content/uploads/2014/10/projects-grid-small-img.jpg')
    //     //     .server(serverUrl)
    //     //     .rotate({ rotate: 180 })
    //     //     .on('error', function (err) {
    //     //         console.error('Cannot resize the image:', err)
    //     //     })
    //     //     .pipe(fs.createWriteStream('./server/storage/images/one.jpg'))


    //     // // obtain an image object:
    //     // lwip.open('./server/storage/images/img_hkd.jpg', function(err, image){

    //     // //   // check err...
    //     // //   // define a batch of manipulations and save to disk as JPEG:
    //     //   image.batch()
    //     //     // .scale(0.1)          // scale to 75%
    //     //     // .rotate(45, 'white')  // rotate 45degs clockwise (white fill)
    //     //     // .crop(200, 200)       // crop a 200X200 square from center
    //     //     // .blur(5)              // Gaussian blur with SD=5
    //     //        .paste(1,1,fs.createReadStream('http://sustainablefoodtrust.org/wp-content/uploads/2014/10/projects-grid-small-img.jpg'))
    //     //     .writeFile('./server/storage/images/op.jpg', function(err){
    //     //       // check err...
    //     //       // done.
    //     //     });

    //     // });




    // })

    // //    console.log(ctx);
    // console.log('************************\n\n\n************************')
    // console.log("array :");
    // console.log(ctx.result.result.files);
    // var imgname = ctx.result.result.files.ran[0].name;
    // var containerName = ctx.result.result.files.ran[0].container;

    // var imgpth = './server/storage/' + containerName + '/' + imgname;

    // console.log(imgname);
    // imaginary(imgpth)
    //     .server(serverUrl)
    //     // .watermark({ text: 'copyright' })
    //     .rotate({ rotate: 180 })
    //     .on('error', function (err) {
    //         console.error('Cannot add watermark', err)
    //     })
    //     .pipe(fs.createWriteStream('./server/storage/images/result.jpg'))

    // var time = moment().utcOffset("+05:30").format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
    // console.log('time : '+time);
    //    var options = {
    //        'text': 'glee app2',
    //        'color': 'rgb(154, 50, 46)',
    //        'override-image': 'true'
    //    };

    //    var imgpth = './server/storage/' + containerName + '/' + imgname;
    //    watermark.embedWatermark(imgpth, options);
    //    console.log(imgpth);

    //    var options = {
    //        'text': 'glee app',
    //        'override-image': 'true'
    //    };

    //    watermark.addWatermark('./server/storage/' + containerName + '/' + imgname, options, function (err) {
    //        if (err)
    //            return console.log(err);

    //        console.log("Successful - no error");
    //        next();
    //    });


};
