AFRAME.registerComponent("markerhandler",{
    init: async function(){
        this.el.addEventListener("markerFound", ()=> {
            console.log("marker is found");
            this.handleMarkerFound();
        });

        this.el.addEventListener("markerlost", ()=>{
            console.log("marker is lost");
            this.handleMarkerFound();
        });
    },
    handleMarkerFound: function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex";

        var orderButton = document.getElementById("order-button");
        var orderSummaryButton=documnet.getElementById("order-summary-button");

        orderButton.addEventListener("click", ()=>{
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                title: "Thanks For The Order !",
                text: " ",
                timer: 2000,
                buttons: false
            });
        });

        orderSummaryButton.addEventListener("click",()=>{
            swal({
                icon:"warning",
                title:"Oredr Summary",
                text:"Work In Progress"
            });
        });
    }
})

