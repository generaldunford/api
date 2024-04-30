$(document).ready(function () {

    $.ajax({
        url: 'https://bayut.p.rapidapi.com/auto-complete?query=abu%20dhabi&hitsPerPage=25&page=0&lang=en',
        method: "GET",
        async: true,
        crossDomain: true,
        cache: false,
        headers: {
            'X-RapidAPI-Key': '9e5a33a184msh76b0a8a94ca1803p183ed0jsn43f01dceb31d',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'

        },
        beforeSend: function() {
            
        },

        success: function(result){
        // console.log(result.hits);
        $.each(result.hits, function(index,house,title){     
        // console.log(house.title);
        // console.log(house.price);
        // console.log(house.coverphoto.url);
        // console.log(house.baths);
        //  console.log(house.rooms);
        //  console.log(house.purpose);
        //  console.log(house.phoneNumber.mobile);
        
                
        })
        },

        error: function(error){
            console.log(error);
            
        }

    })
    
});

let result = [
    {title: "2bedroom", price: "1.4", bath: 1},
    {title: "2bedroom",  price: "800k", bath:1},
    {title: "2bedroom", price: "1.4", bath: 1},
    {title: "2bedroom", price: "1.4", bath},
]

// how to display each result 1 by 1
// console.log(result[0].title);
// console.log(result[1].title);
// console.log(result[2].title);

// for(let each of result){
//    console.log(each.title);
// }
$.each(result, function(index,house) {
    console.log(house,title);
    
})


  