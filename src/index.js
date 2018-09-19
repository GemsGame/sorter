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
        //[0]
  sort(indices) {
    // your implementation
       //sorter.sort([0])
      return this.array[indices];
      
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;