class Sorter {constructor() {
    // your implementation
  this.array = [];
    
  }

  add(element) {
      
      this.array.push(element);
  // done! sorter.add(5) , sorter.add('5') and save in array
  }

  at(index) {
  return this.array[index];
  }

  get length() {
   return this.array.length; 
      
      
  }

  toArray() {
    return this.array;
  }
       
sort(indices) {
  
//сделать новый массив и пихнуть в this.array
  

//var arr1 = [5,8,2,7]; //значения
//var arr2 = [1,2]; //индексы
    
var arr1 = this.array;
var arr2 = indices;
arr2.sort ((a,b) => a>b);
    
var arrSort = []; // сортировка


var arrNewValue = []; // переставленные значения


for (var i = 0; i < arr2.length; i++) {        
   
        //console.log("индекс:" + arr2[i]);
        //console.log("значение:" + arr1[arr2[i]]);
        arrSort.push(arr1[arr2[i]]);
     
      

       
}



arrSort.sort(compareNumeric);

for (var i = 0; i < arrSort.length; i++) {        
        //console.log("значение: " + arrSort[i]);
    
         arrNewValue.push(arrSort[i]);
}


///////////////////////////////////////////////////////////// функция cортиратор!
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}





////////////////////////////////////////////////////////////////функция кромсатор и перезаписатор

  /*  for (var i = 0; i < arrNewValue.length; i++)
      console.log(arrNewValue[i]);  
    
    
    for (var i2 = 0; i2 < arr2.length; i2++) 
      console.log(arr2[i2]);  
    */
    
    
    

function cuts (arrNewValue, arr2) {


for (var i = 0; i < arrNewValue.length; i++) {
     //console.log(arrNewValue[i]);
     //console.log(arr2[i]);
     var removed = arr1.splice(arr2[i], 1, arrNewValue[i]);
    
    
}
    
  return arr1;     

}
cuts(arrNewValue,arr2);
//console.log(arr1);
//console.log(arrNewValue);


//return this.array = [5, 6, 7];
    
  }

  setComparator(compareFunction) {
    // your implementation

      
  }
}

module.exports = Sorter;