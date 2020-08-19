
import listingIndex from "./index/listingIndex.js";
import listingShowPage from "./show/listingShow.js";

export default function shopPage(listingID) {

  return listingID
    ? listingShowPage(listingID) 
    : listingIndex();
}