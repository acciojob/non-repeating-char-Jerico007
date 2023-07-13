//your JS code here. If required.
  let a = prompt("Enter a string");

		

  let arr = a.split("");

      arr.sort();

      a = arr.join("");
      console.log(a);

      let ans = function NonReapeating(val) {

		  if(a === undefined || a === null)
		{
			return null;
		}
        let finalAns = null;
        
        let index = 0;
        while (index < val.length) {
         
          let j = index + 1;
          let cnt = 1;
          
          while (j < val.length) {
            if (val.charAt(j) === val.charAt(index)) {
              cnt++;
            } else {
              break;
            }
            j++;
          }

          if (cnt === 1) {
            finalAns = val.charAt(index);
            break;
          } else {
            index = j;
          }
        }
        return finalAns;
      };


     alert(ans(a));

