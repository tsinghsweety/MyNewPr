               $(document).ready(function(e) {
                   $('.tab a').click(function(){
                        console.log("CLICKED");
                        console.log(this);
                        console.log($(this).attr('href').slice(1));
                        var url = 'data/'+$(this).attr('href').slice(1) +'.json';
                        console.log(url);
//                        return false;
                        $.getJSON(url,
                        function(data){
                            console.log(data);
                            console.log(data.type);
                            var x = document.getElementsByClassName("content");
                            $(x).text("Chant Hare Krishna And Be Happy !!!!!");
                                console.log(x);
                            if(data.type=='text'){
                                $(x).text(data.content);
                            }else{
                                if(data.type=='image'){
                                    console.log(data.content);
                                    console.log('<img src="'+data.content+'"></img>');
                                 $('<img src="'+data.content+'"></img>').prependTo(x);
                                }else{
                                    if(data.type=='video'){
                                        console.log(data.content);
                                        console.log('<video><source src="'+data.content+'"></video>');
                                        $('<video><source src="'+data.content+'"></video>').prependTo(x)
//                                        $('<video><source src="'+data.content+'" type="video/mp4">
//                                            Your browser does not support HTML5 video.
//                                          </video>').prependTo(x);
                                    }else{
                                        if(data.type=='url'){
                                            console.log(data.content);
                                             var url = data.content;
                                             $(location).attr('href',url);
                                        }
                                    }
                                }
                            }
                        });
                    });
               });
