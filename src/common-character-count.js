 function getCommonCharacterCount(s1, s2) {
    const chars = {};
   let commonLettersAmount = 0; 
     for(const letterS1 of s1) { 
        chars[letterS1] = (chars[letterS1] ?? 0) + 1;
    }
     for(const letterS2 of s2) { 
      if (!chars[letterS2]) continue;
        chars[letterS2] -= 1;
         commonLettersAmount += 1;
   }
    return commonLettersAmount;
 }