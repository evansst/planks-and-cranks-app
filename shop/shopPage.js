
import listingIndex from "./listingIndex.js";
import listingShowPage from "./listingShow.js";

export default function shopPage(listingID) {

  return listingID
    ? listingShowPage(listingID) 
    : listingIndex();
}