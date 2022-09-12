import jsTPS_Transaction from "../../common/jsTPS.js"
/**
 * AddSong_Transaction
 * 
 * This class represents a transaction that works with adding 
 * a song. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author Nazif Mahamud
 */
export default class RemoveSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, initIndex, songInfo) {
        super();
        this.model = initModel;
        this.index = initIndex;
        this.songInfo = songInfo;
    }

    doTransaction() {
        this.model.removeSong(this.index);
    }
    
    undoTransaction() {
        this.model.addSongAtIndex(this.index, this.songInfo);
    }
}