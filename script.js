//your JS code here. If required.
 let a = prompt("Enter a string");
      
      let ans = function NonReapeating(val) {
        let finalAns = val.charAt(0);
        for (let index = 0; index < val.length-1; index++ ) {
          let j = index+1;
          while(j < val.length)
          {
            if(val.charAt(j) === val.charAt(index))
            {
              j++;
            }
            else{
              finalAns = val.charAt(index);
              index = j;
              break;
            }
          }
        }
        return finalAns;
      };

     alert(ans(a));