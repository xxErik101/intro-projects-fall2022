window.addEventListener("load", function()
{
    // Get click element references.
    let clickCounterElement = document.getElementById("click-counter");
    let clickButtonElement = document.getElementById("click-button");

    // Counter value.
    let counter = 0;

    // CLick button fuction.
    let clickButtonFunction = function ()
    {
        //Increment counter.
        counter++;

        //Update counter value.
        clickCounterElement.innerHTML = counter;
    };

    // Attach button function.
    clickButtonElement.addEventListener("click", clickButtonFunction);
});