//your JS code here. If required.
  // let a = prompt("Enter a string");

   let arr = [...a];

	arr.sort();

  a = arr.join();

      let ans = function NonReapeating(val) {
        let finalAns = val.charAt(0);
        let index = 1;
         while(index < val.length) {
          let j = index+1;
          let cnt = 1;
          while(j < val.length)
          {
            if(val.charAt(j) === val.charAt(index))
            {
               cnt++;
               j++;
            }
            else{
              break;
            }
          }

          if(cnt === 1)
          {
            finalAns = val.charAt(index);
			  break;
          }
          else{
            index = j;
          } 
        }
        return finalAns;
      };

     // alert(ans(a));