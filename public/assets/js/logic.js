window.onload = function() {
    $(".menuItm").on("click", function() {
        axios.post("/", { burger_name: $(this).text() })
             .then(function(response) {
                 location.reload();
             })
             .catch(function(error) {
                 console.error(error);
             })
    });

    $(".plateItm").on("click", function() {
        axios.put("/", { id: $(this).attr("data-bid") })
             .then(function(response) {
                location.reload();
             })
             .catch(function(error) {
                 console.error(error);
             })
    })
}