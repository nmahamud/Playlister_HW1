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
    constructor(initModel, initIndex, oldSongInfo, newSongTitle, newSongArtist, newSongID) {
        super();
        this.model = initModel;
        this.index = initIndex;
        this.oldSongTitle = oldSongInfo.title;
        this.oldSongArtist = oldSongInfo.artist;
        this.oldSongID = oldSongInfo.youTubeId;
        this.newSongTitle = newSongTitle;
        this.newSongArtist = newSongArtist;
        this.newSongID = newSongID;
    }

    doTransaction() {
        this.model.editSong(this.index,this.newSongTitle,this.newSongArtist,this.newSongID);
    }
    
    undoTransaction() {
        this.model.editSong(this.index, this.oldSongTitle,this.oldSongArtist,this.oldSongID);
    }
}