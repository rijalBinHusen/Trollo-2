interface summaryInterface {
  [key: string] : { 
      lastId: string
      total: number
    }
}

let summary:summaryInterface = {}
let storeToUpdate:string[] = []
let timeOut:ReturnType<typeof setTimeout>;
import { write, getStoreWithKey } from './indexxeddb'

export const generateId = (store: string) => {
    // ambil last id dari summary  // kalau tidak ada bikin baru
    let lastId = summary[store]
      ? summary[store].lastId
      : store.slice(0, 3) + "22050000";
  
    let id = lastId.slice(0, 3);
    // masukkan increment
    // ambil 4 string e.g 0000 akan menjadi 0001
    let increment = Number(lastId.slice(-4)) + 1 + "";
    // 2022
    let fullYear = new Date().getFullYear() + "";
    // 5
    let weekNow:string = getWeekNumber().toString();
    // 22
    let year = lastId.slice(3, 5); //21
    // 05
    let week = lastId.slice(5, 7); //08
    //if the week same
    if (Number(weekNow) === Number(week)) {
      id += year + week;
    }
    //if the week not same
    else {
      // if the week 9 change to 09
      weekNow = Number(weekNow) < 9 ? "0" + weekNow : weekNow;
      id += fullYear.slice(2) + weekNow;
      increment = "0";
    }
    //0000
    let result = id + "0000".slice(increment.length) + increment;
  
    // Check is store exists before
    summary[store] ? false : (summary[store] = { lastId: '', total: 0 });
    // add new summary store
    summary[store] = {
      lastId: result,
      total: summary[store].total ? summary[store].total + 1 : 1,
    };
  
    // rekam store untuk diupdate
    storeToUpdate.includes(store) ? "" : storeToUpdate.push(store);
  
    // write("summary", store, summary[store]);
    updateSummary();
    // kembalikan
    return result;
  }
  
  
function getWeekNumber() {
  // get today
  let currentdate:any = new Date();
  // get the 1 january day
  var oneJan:any = new Date(currentdate.getFullYear(), 0, 1);
  // get the number of today (currentdate - oneJan) would be epoch number and divide 1 day epoch number
  var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
  // get the number of day + 1 + number of days and divide 1 week ( 170 / 7)
  return Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
}

function updateSummary() {
  // clear timeOut
  clearTimeout(timeOut);

  // wait 2000ms and update summary
  timeOut = setTimeout(async () => {
    for (let i = 0; i < storeToUpdate.length; i++) {
      await write("summary", storeToUpdate[i], summary[storeToUpdate[i]]);
    }

    // empty store to update
    storeToUpdate = [];
  }, 2000);
}

export function getSummary () {
  getStoreWithKey('summary').then((result:any) => {
    if(result) {
      result.forEach((val:any) => {
        summary[val.key] = val.data;
      });
    } else {
      summary['folder'] = { lastId: 'FOLD22050003', total: 2}
    }
  })
}