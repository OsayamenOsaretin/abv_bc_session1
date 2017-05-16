# abv_bc_session1
Day two - Tasks

                              Asymptotic Analysis
   The algorithm keeps track of the minimum and maximum values while iterating through the 
   the array elements. It checks the edge case where minimum and maximum values are the same which
   means that the elements of the array are all the same.
   
   - Instantiations : Take constant time a * O(1)
   - The for loop for keeping track of min and max values: 
                                                     - each if statement contained takes constant time, so b * O(1)
                                                     - the for loop runs in linear time with the length of the array O(n)
                                                                
   - Final assigments: Take constant time d * O(1)
  
  
                     Total asymptotic run time complexity: a * O(1) + (b * O(1) * O(n)) + d * O(1)
                                  complexity is dominated by linear component 
  
                                         O(N) is = O(n) (Linear time)
