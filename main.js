let grid = document.querySelectorAll("[id^='g']");
let resetButton = document.querySelector(".button");
let turn = 0;
let color = "red";

let t = document.querySelector(".currentTurn");
t.innerHTML = color;
t.style.color = color;

let winConditions = [ 
                [0,1,2],[3,4,5], [6,7,8],
                [0,3,6], [1,4,7], [2,5,8],
                [0,4,8], [2,4,6] ];

function checkWinCondition()
{

    let a;
    let b;
    let c;

    let d;
    let e;
    let f;
    for(let i=0;i<winConditions.length;i++)
    {

            a = winConditions[i][0];
            b = winConditions[i][1];
            c = winConditions[i][2];

            if(grid[a].getAttribute("data-clicked") == "1" && grid[b].getAttribute("data-clicked") == "1" && grid[c].getAttribute("data-clicked") == "1")
            {
                d = grid[a].style.backgroundColor;
                e = grid[b].style.backgroundColor;
                f = grid[c].style.backgroundColor;

                if(d === e && e === f)
                {
                    alert(d+ " wins!");
                    
                    color = "red";
                    t.style.color = color;
                    t.innerHTML = color;
                    setTimeout(() => {
                        resetGrid();
                    }, 1000);
                  
                }
            }
    }
}

function alternate()
{
    if(color === "red") 
        color = "blue";
    else if (color === "blue") 
        color = "red";

    t.innerHTML = color;
    t.style.color = color;
}

function setColor(event)
{
    if(event.target.getAttribute("data-clicked") == 0)
    {
        event.target.setAttribute("data-clicked", 1);
        event.target.style.background = color;
        alternate();
      
        checkWinCondition();
    }

}

function resetGrid()
{
    for(let i=0;i<grid.length;i++)
    {
        grid[i].style.background = "";
        grid[i].setAttribute("data-clicked", 0);
    }

    color = "red";
    t.innerHTML = color;
    t.style.color = color;

}

for(let i=0;i<grid.length;i++)
{
    grid[i].setAttribute("data-clicked", 0);
    grid[i].addEventListener("click", setColor);

}

resetButton.addEventListener("click", resetGrid);

console.log(grid);