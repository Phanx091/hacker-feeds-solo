import { API_ACTIONS } from '../actions/apiActions';


// let toSortByDate = (a,b) => {
//     if(a.date > b.date) {
//         return 1;   
//     } if(b.date > a.date) {
//         return -1;
//     } else {
//         return 0
//     }
//     return dateB - dateA;
// };

// const compare = (a, b) => {
//     let partsA = a.split("/");
//     let partsB = b.split("/");
//     if (partsA[2] > partsB[2]) {
//         return -1;
//     } else if (partsA[2] < partsB[2]) {
//         return 1;
//     } else {
//         if (partsA[1] > partsB[1]) {
//             return -1;
//         } else if (partsA[1] < partsB[1]) {
//             return 1;
//         } else {
//             if (partsA[0] > partsB[0]) {
//                 return -1;
//             } else if (partsA[0] < partsB[0]) {
//                 return 1;
//             } else {
//                 return 0;
//             }
//         }
//     }
// }





const api = (state = [], action) => {
    // let sortData = [...state, ...action.payload];
  
    switch (action.type) {
        case API_ACTIONS.SAVE_API:

            const compare = (a,b) => {
                if (a.level < b.level) {
                    return -1;
                }
                else if (a.level > b.level) {
                    return 1;
                }
                    return 0;
            }
              let sortData = [...state, ...action.payload];
              let dates = sortData.sort(compare)
            return dates;
        default:
            return state;
    }
}
export default api;