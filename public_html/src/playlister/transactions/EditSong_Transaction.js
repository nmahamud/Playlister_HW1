import jsTPS_Transaction from "../../common/jsTPS.js"
/**
 * AddSong_Transaction
 * 
 * This class represents a transaction that works with removing 
 * a song. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author Nazif Mahamud
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, initIndex, oldSongInfo, newSongInfo) {
        super();
        this.model = initModel;
        this.index = initIndex;
        this.oldSongInfo = oldSongInfo;
        this.newSongInfo = newSongInfo;
    }

    doTransaction() {
        this.model.editSong(this.index,this.newSongInfo);
    }
    
    undoTransaction() {
        this.model.editSong(this.index, this.oldSongInfo);
    }
}