const seatsNumber = document.getElementsByClassName('seatNumber');
let leftSeat =40;
let totalSeatSale =0;

for(const seat of seatsNumber){
    seat.addEventListener('click',function(e){
        // total sale seat count
        checkTotalseatSale()
        function checkTotalseatSale(){
            if(totalSeatSale <= 3){
                totalSeatSale = totalSeatSale+1;
                document.getElementById("countSeat").innerText = totalSeatSale;
            }else{
                alert("You can't bye avobe 4 seat.")
            }
        }
        // available seat count
        availableSeatCoun()
        function availableSeatCoun(){
            if(leftSeat !== 0){
                
            }
            else{
                return alert('seat finished')
            }
        }
        leftSeat=leftSeat-1;
        document.getElementById('leftSits').innerText = leftSeat;
    })
}