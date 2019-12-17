var randomImage = {
    paths: [
        "/images/img_1.jpg",
        "/images/img_2.jpg",
        "/images/img_3.jpg"
    ],

    generate: function () {
        var path = randomImage.paths[Math.floor(Math.random() * randomImage.paths.length)];
        var img = new Image();
        img.src = path;
        $("#randomImage a").html(img);
        $("#randomImage a").attr("href", path);
    }
}

randomImage.generate();