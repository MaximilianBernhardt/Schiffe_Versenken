// Vertical = von unten nach oben
function shipColissionVertical(fromRow, toRow, thisCellNb, shipClass, row) {
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

// Horizontal = von links nach Rechts
function shipColissionHorizontal(cellNb, shipEnd, row, shipClass) { //shipColission auf shipColissionVertical umbenennen
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
