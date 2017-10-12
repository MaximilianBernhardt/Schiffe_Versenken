var shipSize;
var shipSelection = false;
var shipClass;
var row;

var battleship = 1;
var cruiser = 1;
var destroyer = 2;
var submarine = 3;
var dinghy = 4;

var thisIsHorizontal = [false, false, false, false, false, false, false, false, false, false, false];
var isHorizontal = false;

var countBattleship = 0;
var countCruiser = 0;
var countDestroyer = 0;
var countSubmarine = 0;
var countDinghy = 0;

$(document).ready(function() {

    resetShipCounter();

    $(".btn_battleship").mousedown(function() {
        countBattleship++;
        if (countBattleship < 2) {
            shipSelection = true;
            shipSize = 5;
            shipClass = "battleship";
            isHorizontal = false;
        }
    });
    $(".btn_cruiser").mousedown(function() {
        countCruiser++;
        if (countCruiser < 2) {
            shipSelection = true;
            shipSize = 4;
            shipClass = "cruiser";
            isHorizontal = false;
        }
    });
    $(".btn_destroyer").mousedown(function() {
        countDestroyer++;
        if (countDestroyer < 3) {
            shipSelection = true;
            shipSize = 3;
            shipClass = "destroyer" + countDestroyer;
            isHorizontal = false;
        }
        // shipSetEvents();
    });
    $(".btn_submarine").mousedown(function() {
        countSubmarine++;
        if (countSubmarine < 4) {
            shipSelection = true;
            shipSize = 2;
            shipClass = "submarine" + countSubmarine;
            isHorizontal = false;
        }
    });
    $(".btn_dinghy").mousedown(function() {
        countDinghy++;
        if (countDinghy < 5) {
            shipSelection = true;
            shipSize = 1;
            shipClass = "dinghy" + countDinghy;
            isHorizontal = false;
        }
    });

    $(document).on('mouseup', '#fieldTable', function() {
            switch (shipClass) {
                case "battleship":
                    if (countBattleship < 2) {
                        $(".battleshipCounter").html(1 - countBattleship + "x");
                    }
                    break;
                case "cruiser":
                    if (countCruiser < 2) {
                        $(".cruiserCounter").html(1 - countCruiser + "x");
                    }
                    break;
                case "destroyer1":
                    if (countDestroyer < 3) {
                        $(".destroyerCounter").html(2 - countDestroyer + "x");
                    }
                    break;
                case "destroyer2":
                    if (countDestroyer < 3) {
                        $(".destroyerCounter").html(2 - countDestroyer + "x");
                    }
                    break;
                case "submarine1":
                    if (countSubmarine < 4) {
                        $(".submarineCounter").html(3 - countSubmarine + "x");
                    }
                    break;
                case "submarine2":
                    if (countSubmarine < 4) {
                        $(".submarineCounter").html(3 - countSubmarine + "x");
                    }
                    break;
                case "submarine3":
                    if (countSubmarine < 4) {
                        $(".submarineCounter").html(3 - countSubmarine + "x");
                    }
                    break;
                case "dinghy1":
                    if (countDinghy < 5) {
                        $(".dinghyCounter").html(4 - countDinghy + "x");
                    }
                    break;
                case "dinghy2":
                    if (countDinghy < 5) {
                        $(".dinghyCounter").html(4 - countDinghy + "x");
                    }
                    break;
                case "dinghy3":
                    if (countDinghy < 5) {
                        $(".dinghyCounter").html(4 - countDinghy + "x");
                    }
                    break;
                case "dinghy4":
                    if (countDinghy < 5) {
                        $(".dinghyCounter").html(4 - countDinghy + "x");
                    }
                    break;
            }
    });

    $(".section_three").mouseup(function() {
        shipSelection = false;
    });

    $("#btn_back").click(function() {
        $(".fieldPoint").removeClass("battleship");
        $(".fieldPoint").removeClass("cruiser");
        $(".fieldPoint").removeClass("destroyer1");
        $(".fieldPoint").removeClass("destroyer2");
        $(".fieldPoint").removeClass("submarine1");
        $(".fieldPoint").removeClass("submarine2");
        $(".fieldPoint").removeClass("submarine3");
        $(".fieldPoint").removeClass("dinghy1");
        $(".fieldPoint").removeClass("dinghy2");
        $(".fieldPoint").removeClass("dinghy3");
        $(".fieldPoint").removeClass("dinghy4");
        isHorizontal = false;
        countSubmarine = 0;
        countDinghy = 0;
        countDestroyer = 0;
        countCruiser = 0;
        countBattleship = 0;
        resetShipCounter();
    });

    // $(document).on('mouseenter','.fieldPoint',function () {
    //     if(shipSelection===true) {
    //
    //             $(".fieldPoint").removeClass(shipClass);
    //         }
    //
    // });
    $(".ship_selection").mouseleave(function() {
        if (shipSelection === true) {
            $(".fieldPoint").removeClass(shipClass);

        }
    });

    $(document).on('mousedown', '.battleship', function() {
        shipSelection = true;
        shipSize = 5;
        shipClass = "battleship";
        isHorizontal = thisIsHorizontal[0];
    });
    $(document).on('mousedown', '.cruiser', function() {
        shipSelection = true;
        shipSize = 4;
        shipClass = "cruiser";
        isHorizontal = thisIsHorizontal[1];
    });
    $(document).on('mousedown', '.destroyer1', function() {
        shipSelection = true;
        shipSize = 3;
        shipClass = "destroyer1";
        isHorizontal = thisIsHorizontal[2];
    });
    $(document).on('mousedown', '.destroyer2', function() {
        shipSelection = true;
        shipSize = 3;
        shipClass = "destroyer2";
        isHorizontal = thisIsHorizontal[3];
    });
    $(document).on('mousedown', '.submarine1', function() {
        shipSelection = true;
        shipSize = 2;
        shipClass = "submarine1";
        isHorizontal = thisIsHorizontal[4];
    });
    $(document).on('mousedown', '.submarine2', function() {
        shipSelection = true;
        shipSize = 2;
        shipClass = "submarine2";
        isHorizontal = thisIsHorizontal[5];
    });
    $(document).on('mousedown', '.submarine3', function() {
        shipSelection = true;
        shipSize = 2;
        shipClass = "submarine3";
        isHorizontal = thisIsHorizontal[6];
    });
    $(document).on('mousedown', '.dinghy1', function() {
        shipSelection = true;
        shipSize = 1;
        shipClass = "dinghy1";
        isHorizontal = thisIsHorizontal[7];
    });
    $(document).on('mousedown', '.dinghy2', function() {
        shipSelection = true;
        shipSize = 1;
        shipClass = "dinghy2";
        isHorizontal = thisIsHorizontal[8];
    });

    $(document).on('mousedown', '.dinghy3', function() {
        shipSelection = true;
        shipSize = 1;
        shipClass = "dinghy3";
        isHorizontal = thisIsHorizontal[9];
    });
    $(document).on('mousedown', '.dinghy4', function() {
        shipSelection = true;
        shipSize = 1;
        shipClass = "dinghy4";
        isHorizontal = thisIsHorizontal[10];
    });


    $(document).on('click', '.battleship', function() {
        if(thisIsHorizontal[0]===false){
            thisIsHorizontal[0]=true;
        }else{
            thisIsHorizontal[0] = false;
        }
        isHorizontal = thisIsHorizontal[0];
        shipSize = 5;
        shipClass = "battleship";
        setShipHorizontal($(this));
    });
    $(document).on('click', '.cruiser', function() {
        if(thisIsHorizontal[1]===false){
            thisIsHorizontal[1]=true;
        }else{
            thisIsHorizontal[1] = false;
        }
        isHorizontal = thisIsHorizontal[1];
        shipSize = 4;
        shipClass = "cruiser";
        setShipHorizontal($(this));
    });
    $(document).on('click', '.destroyer1', function() {
        if(thisIsHorizontal[2]===false){
            thisIsHorizontal[2]=true;
        }else{
            thisIsHorizontal[2] = false;
        }
        isHorizontal = thisIsHorizontal[2];
        shipSize = 3;
        shipClass = "destroyer1";
        setShipHorizontal($(this));
    });
    $(document).on('click', '.destroyer2', function() {
        if(thisIsHorizontal[3]===false){
            thisIsHorizontal[3]=true;
        }else{
            thisIsHorizontal[3] = false;
        }
        isHorizontal = thisIsHorizontal[3];
        shipSize = 3;
        shipClass = "destroyer2";
        setShipHorizontal($(this));
    });
    $(document).on('click', '.submarine1', function() {
        if(thisIsHorizontal[4]===false){
            thisIsHorizontal[4]=true;
        }else{
            thisIsHorizontal[4] = false;
        }
        isHorizontal = thisIsHorizontal[4];
        shipSize = 2;
        shipClass = "submarine1";
        setShipHorizontal($(this));
    });
    $(document).on('click', '.submarine2', function() {
        if(thisIsHorizontal[5]===false){
            thisIsHorizontal[5]=true;
        }else{
            thisIsHorizontal[5] = false;
        }
        isHorizontal = thisIsHorizontal[5];
        shipSize = 2;
        shipClass = "submarine2";
        setShipHorizontal($(this));
    });
    $(document).on('click', '.submarine3', function() {
        if(thisIsHorizontal[6]===false){
            thisIsHorizontal[6]=true;
        }else{
            thisIsHorizontal[6] = false;
        }
        isHorizontal = thisIsHorizontal[6];
        shipSize = 2;
        shipClass = "submarine3";
        setShipHorizontal($(this));
    });
    $(document).on('click', '.dinghy1', function() {
        if(thisIsHorizontal[7]===false){
            thisIsHorizontal[7]=true;
        }else{
            thisIsHorizontal[7] = false;
        }
        isHorizontal = thisIsHorizontal[7];
        shipSize = 1;
        shipClass = "dinghy1";
        setShipHorizontal($(this));
    });
    $(document).on('click', '.dinghy2', function() {
        if(thisIsHorizontal[8]===false){
            thisIsHorizontal[8]=true;
        }else{
            thisIsHorizontal[8] = false;
        }
        isHorizontal = thisIsHorizontal[8];
        shipSize = 1;
        shipClass = "dinghy2";
        setShipHorizontal($(this));
    });
    $(document).on('click', '.dinghy3', function() {
        if(thisIsHorizontal[9]===false){
            thisIsHorizontal[9]=true;
        }else{
            thisIsHorizontal[9] = false;
        }
        isHorizontal = thisIsHorizontal[9];
        shipSize = 1;
        shipClass = "dinghy3";
        setShipHorizontal($(this));
    });
    $(document).on('click', '.dinghy4', function() {
        if(thisIsHorizontal[10]===false){
            thisIsHorizontal[10]=true;
        }else{
            thisIsHorizontal[10] = false;
        }
        isHorizontal = thisIsHorizontal[10];
        shipSize = 1;
        shipClass = "dinghy4";
        setShipHorizontal($(this));
    });

    $(document).on('mouseenter', '.fieldPoint', function() {
        setShipVertical($(this))
    });
});

function resetShipCounter() {
    $(".battleshipCounter").html(1 - countBattleship + "x");
    $(".cruiserCounter").html(1 - countCruiser + "x");
    $(".destroyerCounter").html(2 - countDestroyer + "x");
    $(".submarineCounter").html(3 - countSubmarine + "x");
    $(".dinghyCounter").html(4 - countDinghy  + "x");
}
// function shipEvents(evt, shipClass, shipSize) {
//     $(document).on(evt,shipClass,function () {
//         if(evt !== 'click'){
//             shipSelection = true;
//         }
//         this.shipSize = shipSize;
//         this.shipClass = shipClass;
//     });
// }

function shipColission(cellNb, shipEnd, row, shipClass) {
    var countReturn = 0;
    for (var h = cellNb; h < shipEnd; h++) {

        if (h > 15) { h = 15; }

        var ifShip = row.children("#cell" + h).prop('className').substring(11);
        console.log(ifShip);
        if (ifShip !== shipClass && ifShip === "battleship" || ifShip !== shipClass && ifShip === "cruiser" || ifShip !==
            shipClass && ifShip === "destroyer1" || ifShip !== shipClass && ifShip === "destroyer2" || ifShip !==
            shipClass && ifShip === "submarine1" || ifShip !== shipClass && ifShip === "submarine2" || ifShip !==
            shipClass && ifShip === "submarine3" || ifShip !== shipClass && ifShip === "dinghy1" || ifShip !== shipClass &&
            ifShip === "dinghy2" || ifShip !== shipClass && ifShip === "dinghy3" || ifShip !== shipClass && ifShip ===
            "dinghy4") {
            return false;
        } else {
            countReturn++;
            if (countReturn === shipEnd - cellNb) { return true; }

        }
    }
}

function shipColissionHorizontal(fromRow, toRow, thisCellNb, shipClass, row) {
    var countReturn = 0;
    for (var h = fromRow; h < toRow; h++) {

        if (h > 15) { h = 15; }

        var ifShip = row.parent().children("#row" + h).children("#cell" + thisCellNb).prop('className').substring(11);
        console.log(ifShip);

        if (ifShip !== shipClass && ifShip === "battleship" || ifShip !== shipClass && ifShip === "cruiser" || ifShip !==
            shipClass && ifShip === "destroyer1" || ifShip !== shipClass && ifShip === "destroyer2" || ifShip !==
            shipClass && ifShip === "submarine1" || ifShip !== shipClass && ifShip === "submarine2" || ifShip !==
            shipClass && ifShip === "submarine3" || ifShip !== shipClass && ifShip === "dinghy1" || ifShip !== shipClass &&
            ifShip === "dinghy2" || ifShip !== shipClass && ifShip === "dinghy3" || ifShip !== shipClass && ifShip ===
            "dinghy4") {
            return false;
        } else {
            countReturn++;
            if (countReturn === toRow - fromRow) { return true; }

        }
    }
}

function cleanEach() {
    var shipCellsToSet = [];
    var counterShipCellsToSet = 0;
    var cell = [];
    var thisCellNb = 0;
    var parentRow = "";
}

function setShipHorizontal(tmp) {

    var cellName = tmp.prop('id');
    var cellNb = parseInt(cellName.substring(4, 6));
    var rowName = tmp.parent().prop('id');
    var rowNb = parseInt(rowName.substring(3, 5));
    var shipEnd = null;
    var shipCellsToSet = [];
    var counterShipCellsToSet = 0;
    var cell = [];
    row = tmp.parent();
    shipEnd = cellNb + shipSize;
    var shipCells = [];

    if (isHorizontal===false) {
        $(".fieldPoint").removeClass(shipClass);


        if (shipEnd < 17) {
            for (var i = cellNb; i < shipEnd; i++) {
                shipCells.push([rowNb, i]);
            }
        } else {
            for (var i = cellNb; i > cellNb - shipSize; i--) {
                shipCells.push([rowNb, i]);
            }
        }
    } else {
        $(".fieldPoint").removeClass(shipClass);
        shipEnd = rowNb + shipSize;

            if (shipEnd < 17) {
                for (var i = rowNb; i < shipEnd; i++) {
                    shipCells.push([i, cellNb]);
                }
            }
            if (shipEnd >= 17) {
                for (var i = rowNb; i > rowNb - shipSize; i--) {
                    shipCells.push([i, cellNb]);
                }
            }
    }

    $.each(shipCells, function(index, value) {

        shipCellsToSet[0] = value[0];
        var parentRow = $("#row" + value[0]);
        var cell = $(parentRow).children("#cell" + value[1]);
        thisCellNb = value[1];
        $(cell).addClass(shipClass);


        console.log(value);
        console.log("Übergebe ich: " + value[1]);
    });
}

function setShipVertical(tmp){
    var cellName = tmp.prop('id');
    var cellNb = parseInt(cellName.substring(4, 6));
    row = tmp.parent();


    if (isHorizontal === false) {
        if (shipSelection === true) {

            var shipEnd = cellNb + shipSize;


            if (shipColission(cellNb, shipEnd, row, shipClass) === true) {

                $(".fieldPoint").removeClass(shipClass);

                if (shipEnd <= 16) {
                    for (var i = cellNb; i < shipEnd; i++) {
                        //row = $(this).parent();
                        row.children("#cell" + i).addClass(shipClass);
                    }
                } else if (shipEnd > 16) {
                    for (var i = cellNb; i > cellNb - shipSize; i--) {
                        // row = $(this).parent();
                        row.children("#cell" + i).addClass(shipClass);
                    }
                }
            }
        }

    } else {
        if (shipSelection === true) {
            var rowName = tmp.parent().prop('id');
            var rowNb = parseInt(rowName.substring(3, 5));
            var shipEnd = null;
            var shipCells = [];
            var shipCellsToSet = [];
            var counterShipCellsToSet = 0;
            var cell = [];

            shipEnd = rowNb + shipSize;

            //$(".fieldPoint").removeClass(shipClass);

            if (shipEnd < 17) {
                for (var i = rowNb; i < shipEnd; i++) {
                    shipCells.push([i, cellNb]);
                }

            }
            if (shipEnd >= 17) {
                for (var i = rowNb; i > rowNb - shipSize; i--) {
                    shipCells.push([i, cellNb]);
                }
            }
            $.each(shipCells, function(index, value) {
                var parentRow = $("#row" + value[0]);
                cell[counterShipCellsToSet] = $(parentRow).children("#cell" + value[1]);
                console.log(value);
                console.log("Übergebe ich: " + value[1]);

                thisCellNb = value[1];

                shipCellsToSet[counterShipCellsToSet] = value[0];
                counterShipCellsToSet = counterShipCellsToSet + 1;

                console.log(shipCellsToSet);

                //     $(cell).addClass(shipClass);

            });

            if (shipColissionHorizontal(shipCellsToSet[0], shipEnd, thisCellNb, shipClass, row) === true) {
                $(".fieldPoint").removeClass(shipClass);

                for (var j = 0; j < counterShipCellsToSet; j++) {
                    $(cell[j]).addClass(shipClass);
                }
            }
        }
    }
}