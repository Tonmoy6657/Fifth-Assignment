const allBtn = document.getElementsByClassName("add-btn");

let count = 0;
for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {

        if (count >= 4) {
            return; 
        }

        if (!e.target.disabled) {
            
        count = count + 1;
        setInnerText("seat-count", count);
        const seatName = e.target.parentNode.childNodes[1].innerText;
        const category = "Economy";
        const price = "550";

        if (count > 4) {
            return;
        }
        if (count > 4) {
            for (const btn of allBtn) {
                btn.disabled = true;
            }
        }


        const selectedContainer = document.getElementById("selected-place-container");
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerText = seatName;
        const p2 = document.createElement("p");
        p2.innerText = category;
        const p3 = document.createElement("p");
        p3.innerText = price;

        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);

        const totalSeat = document.getElementById("total-seat").innerText;
        const convertedTotalSeat = parseInt(totalSeat);
        if (convertedTotalSeat - 1 < 0) {
            alert("All Seat are Booked")
            return;
        }
        document.getElementById("total-seat").innerText = convertedTotalSeat - 1;

        selectedContainer.appendChild(li);

        const totalPrice = document.getElementById("total-cost").innerText;
        const convertedTotalPrice = parseInt(totalPrice);
        const sum = convertedTotalPrice + parseInt(price);
        setInnerText("total-cost", sum);

        const grandTotal = document.getElementById("grand-total").innerText;
        const convertedGrandTotal = parseInt(grandTotal);
        const sum2 = convertedGrandTotal + parseInt(price);
        setInnerText("grand-total", sum2);

        e.target.parentNode.childNodes[1].style.backgroundColor = "limegreen";
        e.target.disabled = true;



        const clickBtn = document.getElementById("apply-btn");
        clickBtn.addEventListener("click", function () {

            const couponElement = document.getElementById("input-field").value;
            if (couponElement === "NEW15") {

                const discountElement = document.getElementById("discountPrice");
                const discountAmount = sum * 0.15;
                discountElement.innerText = discountAmount.toFixed(2);
                const restTotal = document.getElementById("grand-total");
                restTotal.innerText = sum - discountAmount.toFixed(2);

                const disableInput = document.getElementById("join");
                disableInput.classList.add("hidden");

                const discountEnable = document.getElementById("discount-part");
                discountEnable.classList.remove("hidden")
            }

            else if (couponElement === "Couple 20") {
                const discountElement = document.getElementById("discountPrice");
                const discountAmount = sum * 0.2;
                discountElement.innerText = discountAmount.toFixed(2);
                const restTotal = document.getElementById("grand-total");
                restTotal.innerText = sum - discountAmount.toFixed(2);

                const disableInput = document.getElementById("join");
                disableInput.classList.add("hidden");

                const discountEnable = document.getElementById("discount-part");
                discountEnable.classList.remove("hidden")
            }

            else {
                alert("Please input right coupon");
            }


        })






        }


       


    })
}


function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}


const nextBtn = document.getElementById("next");

nextBtn.addEventListener('click', function(){

    const allPartDisable = document.getElementById("all-part");
    allPartDisable.classList.add("hidden");

    const successPartEnable = document.getElementById("success-part");
    successPartEnable.classList.remove("hidden")

})


document.addEventListener("DOMContentLoaded", function() {
    const directBtn = document.getElementById("direct-btn");
    const seatSelectionSection = document.getElementById("seat-selection-section");

    directBtn.addEventListener("click", function(event) {
        event.preventDefault();
        
        const sectionPosition = seatSelectionSection.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: sectionPosition,
            behavior: "smooth"
        });
    });
});
