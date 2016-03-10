var module = (function (pub) {	

        var imgClickHandler = function(){
            $('#gallery .imgCover').on('click',function(){
                var src = $(this).find('img').attr('src');
                var img = '<img src="' + src + '" class="img-responsive"/>';

                $('#myModal').on('shown.bs.modal', function(){
                    $('#myModal .modal-body').html(img);
                });

                $('#myModal').on('hidden.bs.modal', function(){
                    $('#myModal .modal-body').html('');
                });

                $('#myModal').modal();
            });
        };
        var lightboxPreviousNextButtonsHandler = function(){
            var previousButtonHandler = (function(){
                $('#btnPrevious').on('click',function(){
                    var currentPhotoSrc = $("#myModal img").attr('src');
                    var currentPhotoObjectFromGallery = $("#gallery img[src$='"+currentPhotoSrc+"']");
                    var galleryImagesNumber=$("#gallery img").length;
                    var currentPhotoIndex=$("#gallery img").index(currentPhotoObjectFromGallery);
                    var nextPhotoIndex=currentPhotoIndex-1;
                    
                    if (nextPhotoIndex<0){
                        $("#myModal img").attr("src",$("#gallery img").eq(galleryImagesNumber-1).attr('src'));
                    }
                    else{
                        $("#myModal img").attr("src",$("#gallery img").eq(nextPhotoIndex).attr('src'));
                    }
                });
                
            })();
            var nextButtonHandler = (function(){
                $('#btnNext').on('click',function(){
                    var currentPhotoSrc = $("#myModal img").attr('src');
                    var currentPhotoObjectFromGallery = $("#gallery img[src$='"+currentPhotoSrc+"']");
                    var galleryImagesNumber=$("#gallery img").length;
                    var currentPhotoIndex=$("#gallery img").index(currentPhotoObjectFromGallery);
                    var nextPhotoIndex=currentPhotoIndex+1;
                    
                    if (nextPhotoIndex===galleryImagesNumber){
                        $("#myModal img").attr("src",$("#gallery img").eq(0).attr('src'));
                    }
                    else{
                        $("#myModal img").attr("src",$("#gallery img").eq(nextPhotoIndex).attr('src'));
                    }
                });
            })();
        };

        pub.modalInit = function() {
            imgClickHandler();
            lightboxPreviousNextButtonsHandler();
        };

	return pub;
})(module || {});