$(document).ready(function () {
          
    $(window).load(function() {
        $("#bear").delay(2000).fadeIn(600);
        $("#eagle").delay(5000).fadeIn(600);
        $("#borisNatasha").delay(60000).fadeIn(800);
    });

    $("#freqAll").click(function() {

        $(".chartHeading").html("Frequency of All Posts");

        $.ajax({
            type: "GET",
            url: "twitterPosts.json",
            dataType: "json",
            success: function (postsArray) {
                var dateArray = [];
                var dateArrayOriginal = [];
                var dateFrequencyArray = [];
                //get all post dates, put into two seperate arrays with no times just dates.
                $.each(postsArray, function (index, post) {
                    if (post.created_str != null && post.created_str != "" && post.created_str != "undefined") {
                        var date = post.created_str;
                        dateArrayOriginal.push(date.substring(0,7));
                        dateArray.push(date.substring(0,7));
                    }
                });
                //sort one of the arrays, eliminate duplicates.
                var uniqueDates = Array.from(new Set(dateArray));
                dateArray = uniqueDates;
                dateArray.sort();
                //fill the counting array to await values.
                for (i = 0; i<dateArray.length; i++) {
                    dateFrequencyArray[i] = 0;
                }
                //count the frequency by iterating the unsorted array.
                var n = 1;
                for (i = 0; i<dateArrayOriginal.length; i++) {
                    for (j = 0; j < dateArray.length; j++) {
                        if (dateArrayOriginal[i] === dateArray[j]) {
                            dateFrequencyArray[j] = dateFrequencyArray[j] + n;
                        }
                    }
                }
                // for (i=0; i<dateFrequencyArray.length; i++) {
                //     console.log(dateArray[i]);
                //     console.log(dateFrequencyArray[i]);
                // }
                //the values for this chart were generated through the code above, manually extracted from consolelog (see immediately above to duplicate).
                var data3 = [
                {
                    x: ['2014-07','2014-08','2014-09','2014-11','2014-12','2015-01','2015-02','2015-03','2015-04','2015-05','2015-06','2015-07','2015-08','2015-09','2015-10','2015-11','2015-12','2016-01','2016-02','2016-03','2016-04','2016-05','2016-06','2016-07','2016-08','2016-09','2016-10','2016-11','2016-12','2017-01','2017-02','2017-03','2017-04','2017-05','2017-06','2017-07','2017-08','2017-09'],    
                    y: [12,1,1,388,442,2191,2091,2325,2250,1900,3611,1697,1016,325,1070,971,3949,1749,5192,3792,443,1942,1047,7278,11668,25648,27983,21805,19965,21067,10151,8186,4591,638,694,3938,1407,37],
                    type: 'bar'
                }
                ];
    
                var layout3 = {
                    height: 600   
                };
                
                Plotly.newPlot('plot', data3, layout3);
    
            },
            error: function () {
                alert("FAILURE!");
            }
        });
    });

    $("#freqHillary").click(function() {
        
        $(".chartHeading").html("Frequency of Posts Containing 'Hillary'");

        $.ajax({
            type: "GET",
            url: "twitterPosts.json",
            dataType: "json",
            success: function (postsArray) {
                var dateArray = [];
                var dateArrayOriginal = [];
                var dateFrequencyArray = [];
                var hillary = "hillary";
                var hillary1 = "Hillary";
                //get all post dates, put into two seperate arrays with no times just dates.
                $.each(postsArray, function (index, post) {                   
                    if (post.text != null && post.created_str != null) {
                        var text = post.text;
                        if (text.indexOf(hillary) > -1 || text.indexOf(hillary1) > -1) {
                            var date = post.created_str;
                            dateArrayOriginal.push(date.substring(0,7));
                            dateArray.push(date.substring(0,7));
                        }
                    }                   
                });
                //sort one of the arrays, eliminate duplicates.
                var uniqueDates = Array.from(new Set(dateArray));
                dateArray = uniqueDates;
                dateArray.sort();
                //fill the counting array to await values.
                for (i = 0; i<dateArray.length; i++) {
                    dateFrequencyArray[i] = 0;
                }
                //count the frequency by iterating the unsorted array.
                var n = 1;
                for (i = 0; i<dateArrayOriginal.length; i++) {
                    for (j = 0; j < dateArray.length; j++) {
                        if (dateArrayOriginal[i] === dateArray[j]) {
                            dateFrequencyArray[j] = dateFrequencyArray[j] + n;
                        }
                    }
                }
                // for (i=0; i<dateFrequencyArray.length; i++) {
                //     console.log(dateArray[i]);
                //     console.log(dateFrequencyArray[i]);
                // }
                //the values for this chart were generated through the code above, manually extracted from consolelog (see immediately above to duplicate).
                var data3 = [
                {
                    x: ['2015-02','2015-03','2015-04','2015-05','2015-06','2015-07','2015-08','2015-09','2015-10','2015-11','2015-12','2016-01','2016-02','2016-03','2016-04','2016-05','2016-06','2016-07','2016-08','2016-09','2016-10','2016-11','2016-12','2017-01','2017-02','2017-03','2017-04','2017-07','2017-08'],
                    y: [21,4,57,62,78,14,19,5,26,55,101,55,155,147,16,67,131,964,1781,6218,4474,2205,283,258,72,102,9,6,2],
                    type: 'bar'
                }
                ];

                var layout3 = {
                    height: 600
                };
                
                Plotly.newPlot('plot', data3, layout3);

            },
            error: function () {
                alert("FAILURE!");
            }
        });
    });
        
    $("#freqCreate").click(function() {
        
        $(".chartHeading").html("Frequency of Account Creation");

        $.ajax({
            type: "GET",
            url: "twitterAccounts.json",
            dataType: "json",
            success: function (accountsArray) {
                var dateArray = [];
                var dateArrayOriginal = [];
                var dateFrequencyArray = [];
                //get all post dates, put into two seperate arrays with no times just dates.
                $.each(accountsArray, function (index, account) {
                    if (account.created_at != null) {
                        var date = account.created_at;
                        if (account.created_at != null && account.created_at != "" && account.created_at != "undefined") {
                            var date = account.created_at;
                            var newDateYear = new Date(date).getFullYear();
                            var newDateMonth = new Date(date).getMonth()+1;
                            if (newDateMonth < 10) {
                                newDateMonth = "0" + newDateMonth;
                            }
                            date = newDateYear + "-" + newDateMonth;
                            dateArrayOriginal.push(date);
                            dateArray.push(date);
                        }
                    }                   
                });
                //sort one of the arrays, eliminate duplicates.
                var uniqueDates = Array.from(new Set(dateArray));
                dateArray = uniqueDates;
                dateArray.sort();
                //fill the counting array to await values.
                for (i = 0; i<dateArray.length; i++) {
                    dateFrequencyArray[i] = 0;
                }
                //count the frequency by iterating the unsorted array.
                var n = 1;
                for (i = 0; i<dateArrayOriginal.length; i++) {
                    for (j = 0; j < dateArray.length; j++) {
                        if (dateArrayOriginal[i] === dateArray[j]) {
                            dateFrequencyArray[j] = dateFrequencyArray[j] + n;
                        }
                    }
                }
                // for (i=0; i<dateFrequencyArray.length; i++) {
                //     console.log(dateArray[i]);
                //     console.log(dateFrequencyArray[i]);
                // }
                //the values for this chart were generated through the code above, manually extracted from consolelog (see immediately above to duplicate).
                var data3 = [
                {
                    x: ['2009-01','2009-05','2009-11','2009-12','2011-02','2011-12','2012-01','2012-03','2012-12','2013-06','2013-07','2013-08','2013-09','2013-12','2014-02','2014-03','2014-04','2014-05','2014-06','2014-07','2014-08','2014-09','2014-10','2014-12','2015-01','2015-03','2015-06','2015-08','2015-09','2015-10','2015-11','2015-12,2016-01','2016-02,2016-03','2016-04','2016-05','2016-06','2016-07','2016-08','2016-10'],
                    y: [1,2,1,11,13,94,16,1,9,12,64,49,4,7,1,4,6,1,15,1,3,8,13,1,2,4,1,6,3,2,18,2,1],
                    type: 'bar'
                }
                ];

                var layout3 = {
                    height: 600
                };
                
                Plotly.newPlot('plot', data3, layout3);

            },
            error: function () {
                alert("FAILURE!");
            }
        });
    });
    
    $("#freqRetweet").click(function() {
        
        $(".chartHeading").html("Frequency of Retweeted");

        $.ajax({
            type: "GET",
            url: "twitterPosts.json",
            dataType: "json",
            success: function (postsArray) {
                var dateArray = [];
                var dateArrayAll = [];
                var dateFrequencyArray = [];
                //get all post dates, put into two seperate arrays with no times just dates.
                $.each(postsArray, function (index, post) {
                    if (post.created_str != null) {
                        var date = post.created_str;
                        dateArrayAll.push(date.substring(0,7));
                        if (post.retweet_count != null) {                        
                            if (parseInt(post.retweet_count) > 0) {                                
                                dateArray.push(date.substring(0,7));
                            }
                        }     
                    }                                 
                });
                //sort one of the arrays, eliminate duplicates.
                var uniqueDates = Array.from(new Set(dateArrayAll));
                dateArrayAll = uniqueDates;
                dateArrayAll.sort();
                //fill the counting array to await values.
                for (i = 0; i<dateArrayAll.length; i++) {
                    dateFrequencyArray[i] = 0;
                }
                //count the frequency by iterating the unsorted array.
                var n = 1;
                for (i = 0; i<dateArray.length; i++) {
                    for (j = 0; j < dateArrayAll.length; j++) {
                        if (dateArrayAll[j] === dateArray[i]) {
                            dateFrequencyArray[j] = dateFrequencyArray[j] + n;
                        }
                    }
                }
                // for (i=0; i<dateFrequencyArray.length; i++) {
                //     console.log(dateArrayAll[i]);
                //     console.log(dateFrequencyArray[i]);
                // }
                //the values for this chart were generated through the code above, manually extracted from consolelog (see immediately above to duplicate).
                var data3 = [
                {
                    x: ['2014-07','2014-08','2014-09','2014-11','2014-12','2015-01','2015-02','2015-03','2015-04','2015-05','2015-06','2015-07','2015-08','2015-09','2015-10','2015-11','2015-12','2016-01','2016-02','2016-03','2016-04','2016-05','2016-06','2016-07','2016-08','2016-09','2016-10','2016-11','2016-12','2017-01','2017-02','2017-03','2017-04','2017-05','2017-06','2017-07','2017-08','2017-09'],
                    y: [0,0,0,0,0,0,0,0,0,0,1,0,2,5,1,2,4,2,14,28,14,58,108,1428,2299,2441,2269,1551,0,0,0,0,0,0,0,0,0,0],
                    type: 'bar'
                }
                ];

                var layout3 = {
                    height: 600
                };
                
                Plotly.newPlot('plot', data3, layout3);

            },
            error: function () {
                alert("FAILURE!");
            }
        });
    });

    $("#freqFav").click(function() {
        
        $(".chartHeading").html("Frequency of Favorited");

        $.ajax({
            type: "GET",
            url: "twitterPosts.json",
            dataType: "json",
            success: function (postsArray) {
                var dateArray = [];
                var dateArrayAll = [];
                var dateFrequencyArray = [];
                //get all post dates, put into two seperate arrays with no times just dates.
                $.each(postsArray, function (index, post) {
                    if (post.created_str != null) {
                        var date = post.created_str;
                        dateArrayAll.push(date.substring(0,7));
                        if (post.favorite_count != null) {                        
                            if (parseInt(post.favorite_count) > 0) {                                
                                dateArray.push(date.substring(0,7));
                            }
                        }     
                    }                                 
                });
                //sort one of the arrays, eliminate duplicates.
                var uniqueDates = Array.from(new Set(dateArrayAll));
                dateArrayAll = uniqueDates;
                dateArrayAll.sort();
                //fill the counting array to await values.
                for (i = 0; i<dateArrayAll.length; i++) {
                    dateFrequencyArray[i] = 0;
                }
                //count the frequency by iterating the unsorted array.
                var n = 1;
                for (i = 0; i<dateArray.length; i++) {
                    for (j = 0; j < dateArrayAll.length; j++) {
                        if (dateArrayAll[j] === dateArray[i]) {
                            dateFrequencyArray[j] = dateFrequencyArray[j] + n;
                        }
                    }
                }
                // for (i=0; i<dateFrequencyArray.length; i++) {
                //     console.log(dateArrayAll[i]);
                //     console.log(dateFrequencyArray[i]);
                // }
                //the values for this chart were generated through the code above, manually extracted from consolelog (see immediately above to duplicate).
                var data3 = [
                {
                    x: ['2014-07','2014-08','2014-09','2014-11','2014-12','2015-01','2015-02','2015-03','2015-04','2015-05','2015-06','2015-07','2015-08','2015-09','2015-10','2015-11','2015-12','2016-01','2016-02','2016-03','2016-04','2016-05','2016-06','2016-07','2016-08','2016-09','2016-10','2016-11','2016-12','2017-01','2017-02','2017-03','2017-04','2017-05','2017-06','2017-07','2017-08','2017-09'],
                    y: [0,0,0,0,0,0,0,1,0,0,1,0,2,5,1,2,4,2,13,26,15,54,106,1231,2171,2248,2027,1335,0,0,0,0,0,0,0,0,0,0],
                    type: 'bar'
                }
                ];

                var layout3 = {
                    height: 600
                };
                
                Plotly.newPlot('plot', data3, layout3);

            },
            error: function () {
                alert("FAILURE!");
            }
        });
    });

    $("#cntTz").click(function() {

        $(".chartHeading").html("Percentage of Non-USA Time Zone Accounts");

        $.ajax({
            type: "GET",
            url: "twitterAccounts.json",
            dataType: "json",
            success: function (accountsArray) {
                var accountsRuss = 0;
                $.each(accountsArray, function (index, account) {
                    if (account.time_zone != "Pacific Time (US & Canada)" && account.time_zone != "Mountain Time (US & Canada)" && account.time_zone != "Eastern Time (US & Canada)" && account.time_zone != "Central Time (US & Canada)") {
                        accountsRuss = accountsRuss + 1;
                    }
                });
                var data = [{
                    values: [accountsRuss, Object.keys(accountsArray).length-accountsRuss],
                    labels: ['Non-USA Time Zone', 'USA Time Zone'],
                    type: 'pie'
                }];
                
                var layout = {
                    width: 600,
                    height: 800
                };
                
                Plotly.newPlot('plot', data, layout);
            },
            error: function () {
                alert("FAILURE!");
            }
        });
    });

    $("#cntRetweet").click(function() {
        
        $(".chartHeading").html("Percentage of Retweeted Posts");

        $.ajax({
            type: "GET",
            url: "twitterPosts.json",
            dataType: "json",
            success: function (postsArray) {
                var postsRetweet = 0;
                $.each(postsArray, function (index, post) {
                    if (post.retweet_count != null && post.retweet_count != "" && post.retweet_count != "undefined" && post.retweet_count != "0") {
                        postsRetweet = postsRetweet + 1;
                    }
                });
                var data = [{
                    values: [postsRetweet, (Object.keys(postsArray).length)-postsRetweet],
                    labels: ['Retweeted', 'Not Retweeted'],
                    type: 'pie'
                }];
                
                var layout = {
                    width: 600,
                    height: 800
                };
                
                Plotly.newPlot('plot', data, layout);
            },
            error: function () {
                alert("FAILURE!");
            }
        });
    });

    $("#cntFav").click(function() {
        
        $(".chartHeading").html("Percentage of Favorited Posts");

        $.ajax({
            type: "GET",
            url: "twitterPosts.json",
            dataType: "json",
            success: function (postsArray) {
                var postsFavorite = 0;
                $.each(postsArray, function (index, post) {
                    if (post.favorite_count != null) {
                        if (parseInt(post.favorite_count) > 0) {
                            postsFavorite = postsFavorite + 1;
                        }
                    }
                    
                });
                var data = [{
                    values: [postsFavorite, (Object.keys(postsArray).length)-postsFavorite],
                    labels: ['Favorited', 'Not Favorited'],
                    type: 'pie'
                }];
                
                var layout = {
                    width: 600,
                    height: 800
                };
                
                Plotly.newPlot('plot', data, layout);
            },
            error: function () {
                alert("FAILURE!");
            }
        });
    });

    $("#cntFollow").click(function() {

        $(".chartHeading").html("Percentage of Accounts With Followers");

        $.ajax({
            type: "GET",
            url: "twitterAccounts.json",
            dataType: "json",
            success: function (accountsArray) {
                var accountsFollowers = 0;
                $.each(accountsArray, function (index, account) {
                    if (account.followers_count != null) {
                        var count = account.followers_count;
                        if (parseInt(count) > 0) {
                            accountsFollowers = accountsFollowers + 1;
                        }
                    }
                    
                });
                var data = [{
                    values: [accountsFollowers, Object.keys(accountsArray).length-accountsFollowers],
                    labels: ['Followed Accounts', 'Not Followed'],
                    type: 'pie'
                }];
                
                var layout = {
                    width: 600,
                    height: 800
                };
                
                Plotly.newPlot('plot', data, layout);
            },
            error: function () {
                alert("FAILURE!");
            }
        });
    });

    $("#cntCrooked").click(function() {

        $(".chartHeading").html("Percentage of Posts Containing 'Crooked'");

        $.ajax({
            type: "GET",
            url: "twitterPosts.json",
            dataType: "json",
            success: function (postsArray) {var postsRuss = 0;
                var crooked = "crooked";
                var crooked1 = "Crooked";  
                var postsCrooked = 0; 
                $.each(postsArray, function (index, post) {
                    if (post.text != null) {
                        var text = post.text;
                        if(text.indexOf(crooked) > -1 || text.indexOf(crooked1) > -1) {
                            postsCrooked = postsCrooked + 1;
                        }
                    }
                });
    
                var data2 = [{
                    values: [postsCrooked, Object.keys(postsArray).length-postsCrooked],
                    labels: ['Mentions Crooked', 'Total Posts'],
                    type: 'pie'
                }];
                
                var layout2 = {
                    height: 600,
                    width: 800
                };
                
                Plotly.newPlot('plot', data2, layout2);
            },
            error: function () {
                alert("FAILURE!");
            }
        });
    });

    $("#cntTrump").click(function() {
        
        $(".chartHeading").html("Percentage of Posts Containing 'Trump'");

        $.ajax({
            type: "GET",
            url: "twitterPosts.json",
            dataType: "json",
            success: function (postsArray) {var postsRuss = 0;
                var trump = "trump";
                var trump1 = "Trump";  
                var postsTrump = 0; 
                $.each(postsArray, function (index, post) {
                    if (post.text != null) {
                        var text = post.text;
                        if(text.indexOf(trump) > -1 || text.indexOf(trump1) > -1) {
                            postsTrump = postsTrump + 1;
                        }
                    }
                });
    
                var data2 = [{
                    values: [postsTrump, Object.keys(postsArray).length-postsTrump],
                    labels: ['Mentions Trump', 'Total Posts'],
                    type: 'pie'
                }];
                
                var layout2 = {
                    height: 600,
                    width: 800
                };
                
                Plotly.newPlot('plot', data2, layout2);
            },
            error: function () {
                alert("FAILURE!");
            }
        });
    });

    $("#cntRt").click(function() {
        
        $(".chartHeading").html("Percentage of Posts Containing 'RT'");

        $.ajax({
            type: "GET",
            url: "twitterPosts.json",
            dataType: "json",
            success: function (postsArray) {
                var rt = "rt";
                var rt1 = "RT";  
                var postsRt = 0; 
                $.each(postsArray, function (index, post) {
                    if (post.text != null) {
                        var text = post.text;
                        if(text.indexOf(rt) > -1 || text.indexOf(rt1) > -1) {
                            postsRt = postsRt + 1;
                        }
                    }
                });
    
                var data2 = [{
                    values: [postsRt, Object.keys(postsArray).length-postsRt],
                    labels: ['Mentions RT', 'Total Posts'],
                    type: 'pie'
                }];
                
                var layout2 = {
                    height: 600,
                    width: 800
                };
                
                Plotly.newPlot('plot', data2, layout2);
            },
            error: function () {
                alert("FAILURE!");
            }
        });
    });

    $("#cntBlm").click(function() {
        
        $(".chartHeading").html("Percentage of Posts Containing 'BLM'");

        $.ajax({
            type: "GET",
            url: "twitterPosts.json",
            dataType: "json",
            success: function (postsArray) {
                var blm = "BLM";
                var blm1 = "blm"; 
                var blm2 = "BlackLivesMatter";
                var blm3 = "blacklivesmatter";
                var postsBlm = 0; 
                $.each(postsArray, function (index, post) {
                    if (post.text != null) {
                        var text = post.text;
                        if(text.indexOf(blm) > -1 || text.indexOf(blm1) > -1 || text.indexOf(blm2) > -1 || text.indexOf(blm3) > -1) {
                            postsBlm = postsBlm + 1;
                        }
                    }
                });
    
                var data2 = [{
                    values: [postsBlm, Object.keys(postsArray).length-postsBlm],
                    labels: ['Mentions BLM', 'Total Posts'],
                    type: 'pie'
                }];
                
                var layout2 = {
                    height: 600,
                    width: 800
                };
                
                Plotly.newPlot('plot', data2, layout2);
            },
            error: function () {
                alert("FAILURE!");
            }
        });
    });

    $("#cntPotus").click(function() {
        
        $(".chartHeading").html("Percentage of Posts Containing 'RT'");

        $.ajax({
            type: "GET",
            url: "twitterPosts.json",
            dataType: "json",
            success: function (postsArray) {
                var potus = "potus";
                var potus1 = "POTUS";  
                var postsPotus = 0; 
                $.each(postsArray, function (index, post) {
                    if (post.text != null) {
                        var text = post.text;
                        if(text.indexOf(potus) > -1 || text.indexOf(potus1) > -1) {
                            postsPotus = postsPotus + 1;
                        }
                    }
                });
    
                var data2 = [{
                    values: [postsPotus, Object.keys(postsArray).length-postsPotus],
                    labels: ['Mentions POTUS', 'Total Posts'],
                    type: 'pie'
                }];
                
                var layout2 = {
                    height: 600,
                    width: 800
                };
                
                Plotly.newPlot('plot', data2, layout2);
            },
            error: function () {
                alert("FAILURE!");
            }
        });
    });

    $("#cntClinton").click(function() {
        
        $(".chartHeading").html("Percentage of Posts Containing 'Clinton'");

        $.ajax({
            type: "GET",
            url: "twitterPosts.json",
            dataType: "json",
            success: function (postsArray) {
                var clinton = "clinton";
                var clinton1 = "Clinton";  
                var postsClinton = 0; 
                $.each(postsArray, function (index, post) {
                    if (post.text != null) {
                        var text = post.text;
                        if(text.indexOf(clinton) > -1 || text.indexOf(clinton1) > -1) {
                            postsClinton = postsClinton + 1;
                        }
                    }
                });
    
                var data2 = [{
                    values: [postsClinton, Object.keys(postsArray).length-postsClinton],
                    labels: ['Mentions Clinton', 'Total Posts'],
                    type: 'pie'
                }];
                
                var layout2 = {
                    height: 600,
                    width: 800
                };
                
                Plotly.newPlot('plot', data2, layout2);
            },
            error: function () {
                alert("FAILURE!");
            }
        });
    });

    $("#cntFakenews").click(function() {
        
        $(".chartHeading").html("Percentage of Posts Containing 'Fake News'");

        $.ajax({
            type: "GET",
            url: "twitterPosts.json",
            dataType: "json",
            success: function (postsArray) {
                var fakeNews = "fakenews";
                var fakeNews1 = "FakeNews";  
                var postsFakeNews = 0; 
                $.each(postsArray, function (index, post) {
                    if (post.text != null) {
                        var text = post.text;
                        if(text.indexOf(fakeNews) > -1 || text.indexOf(fakeNews1) > -1) {
                            postsFakeNews = postsFakeNews + 1;
                        }
                    }
                });
    
                var data2 = [{
                    values: [postsFakeNews, Object.keys(postsArray).length-postsFakeNews],
                    labels: ['Mentions Fake News', 'Total Posts'],
                    type: 'pie'
                }];
                
                var layout2 = {
                    height: 600,
                    width: 800
                };
                
                Plotly.newPlot('plot', data2, layout2);
            },
            error: function () {
                alert("FAILURE!");
            }
        });
    });

    $("#cntBuildWall").click(function() {
        
        $(".chartHeading").html("Percentage of Posts Containing 'Build The Wall'");

        $.ajax({
            type: "GET",
            url: "twitterPosts.json",
            dataType: "json",
            success: function (postsArray) {
                var buildWall = "buildthewall";
                var buildWall1 = "BuildTheWall";  
                var postsBtw = 0; 
                $.each(postsArray, function (index, post) {
                    if (post.text != null) {
                        var text = post.text;
                        if(text.indexOf(buildWall) > -1 || text.indexOf(buildWall1) > -1) {
                            postsBtw = postsBtw + 1;
                        }
                    }
                });
    
                var data2 = [{
                    values: [postsBtw, Object.keys(postsArray).length-postsBtw],
                    labels: ['Mentions Build the Wall', 'Total Posts'],
                    type: 'pie'
                }];
                
                var layout2 = {
                    height: 600,
                    width: 800
                };
                
                Plotly.newPlot('plot', data2, layout2);
            },
            error: function () {
                alert("FAILURE!");
            }
        });
    });

    $("#cntMakeOwn").click(function() {
        $(".input").show();
    });

    $(".reset").click(function() {
        $(".input").hide();
    });

    $("#cntMakeOwnBtn").click(function() {
        var input = $("#input").val();
        $(".chartHeading").html("Percentage of Posts Containing '" + input + "'");

        $.ajax({
            type: "GET",
            url: "twitterPosts.json",
            dataType: "json",
            success: function (postsArray) {
                var userVar = input; 
                var posts = 0; 
                $.each(postsArray, function (index, post) {
                    if (post.text != null) {
                        var text = post.text;
                        if(text.indexOf(userVar) > -1) {
                            posts = posts + 1;
                        }
                    }
                });
    
                var data2 = [{
                    values: [posts, Object.keys(postsArray).length-posts],
                    labels: ['Mentions ' + userVar, 'Total Posts'],
                    type: 'pie'
                }];
                
                var layout2 = {
                    height: 600,
                    width: 800
                };
                
                Plotly.newPlot('plot', data2, layout2);
            },
            error: function () {
                alert("FAILURE!");
            }
        });
    });
            
});

