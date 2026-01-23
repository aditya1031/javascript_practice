function area(length,width){
     if(length<=0||width<=0)
     {
          throw new RangeError('length and width can not be less then zero');
        
     }
     const area=length * width;
     console.log(`the calculate are of rectangle is: ${area}`);
}


area(3,24);