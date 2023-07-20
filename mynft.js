// create a variable to hold your NFT's
const NFTs =[]
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
_name = "EYES"
function mintNFT (_name, _eyeColor, _Background, _Eyeball) {
    const Metadata = {
    "name": _name,
    "eyeColor": _eyeColor,
    "Background": _Background,
    "Eyeball": _Eyeball,
   }
   NFTs.push(Metadata);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    console.log("\n");
    console.log("Minted: " + _name + " " + "NFT");
    for(let i = 0; i < NFTs.length; i++){
        console.log("\n" + "ID: \t\t" + i);
        console.log("Name: \t\t" + NFTs[i].name);
        console.log("EyeColor: \t" + NFTs[i].eyeColor);
        console.log("Background: \t" + NFTs[i].Background);
        console.log("Eyeball: \t" + NFTs[i].Eyeball);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n" + "TOTAL SUPPLY: \t" + NFTs.length + "\n");
}

// call your functions below this line
mintNFT("EYES","YELLOW","BLACK","RED");
mintNFT("EYES","BLUE","BLACK","BLACK");
mintNFT("EYES","CYAN","BLACK","RED");
mintNFT("EYES","GREEN","BLACK","LIGHT BLUE");
mintNFT("EYES","PURPLE","BLACK","GOLDEN");
listNFTs();
getTotalSupply();
