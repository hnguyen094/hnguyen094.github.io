/**
 * A reader that makes it easy to get DOM elements from a Google Sheets html export.
 * @usage   simply include this script into the downloaded index.html and use by creating an instance
 *          of CellReader. Once created, cellReader.getCell("B33") will return the associated DOM element.
 * @note    currently limited to only single-letter columns
 * @note    this is part of a larger project, and was cut from
 *          its original place; I can't guarantee that it will work, and explains why there is no column support
 *          past Z (wasn't needed in original purpose.)
 */

class CellReader {
    constructor() {
        this.parseTable();
    }

    /**
     * Creates a row-first 2D class member array called 'rows.'
     * @note will work with cells bigger than 1x1 (will act like a hit-test)
     */
    parseTable() {
        const remainder = new Map(); // map from column index to its associated data
        const table = document.getElementsByTagName("tbody");

        /** Add any associated cells to row to the current given index. */
        const checkRemainders = function(row, remainder, curIndex) {
            while (remainder.has(curIndex)) {
                if (remainder.get(curIndex)[1] <= 0) {
                    throw new Error('A remainder should never be 0 or less!');
                }
                row.push(remainder.get(curIndex)[0]);
                remainder.get(curIndex)[1]--;
                if (remainder.get(curIndex)[1] === 0) {
                    remainder.delete(curIndex);
                }
                curIndex++;
            }
            return curIndex;
        };

        this.rows = Array.prototype.slice.call(
            table[0].childNodes).map(rows => {
            const rawRow = Array.prototype.slice.call(rows.getElementsByTagName("td"));
            let row = [];
            let curIndex = 0;
            for (cell of rawRow) {
                checkRemainders(row, remainder, curIndex);
                
                let rows = 1, cols = 1; // 1x1 if unspecified
                if ('colSpan' in cell) {
                    cols = parseInt(cell['colSpan'], 10); 
                }
                if ('rowSpan' in cell) {
                    rows = parseInt(cell['rowSpan'], 10);
                }
                for (let c = 0; c < cols; c++, curIndex++) { // if col/row > 1
                    const tempRows = rows - 1;
                    if (remainder.has(curIndex) && tempRows !== 0) {
                        throw new Error('Replacing a remainder that already exists!');
                    }
                    if (tempRows !== 0) {
                        remainder.set(curIndex, [cell, tempRows]);
                    }
                    row.push(cell);
                }
            }
            return row;
        });
    } 

    /**
     * A function that parses a string that represents a cell into a row index.
     * @param id a string in LETTER# format that represents the cell-- e.g. "B12"
     * @note assumes that the column only takes up 1 character
     */
    getRow(id) {
        return parseInt(id.slice(1), 10) - 1;
    }

    /**
     * A function that parses a string that represents a cell into a column index.
     * @param id a string in LETTER# format that represents the cell-- e.g. "B12"
     * @note the letter has to be capitalized, and limited to only one character (so only up to Z)
     */
    getCol(id) {
        return id.charCodeAt(0) - 65;
    }
    
    /** 
     * A function that returns the cell at a certain position.
     * @param id a string in LETTER# format that represents the cell-- e.g. "B12"
     * @returns the DOM element that represents that cell in the table
     * @note assumes the input is well-formatted, and the column is between A-Z (capitalized only)
     */
    getCell(id) {
        const col = this.getCol(id);
        const row = this.getRow(id);
        return this.rows[row][col];
    }
}