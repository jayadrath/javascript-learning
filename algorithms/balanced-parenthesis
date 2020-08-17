function balancedParens(string){
	return !string.split("").reduce(function(previous, char){
  	if(char==='(') return ++previous;
    if(char===')') return --previous;
    return previous;
  },0);
}

balancedParens("((((");
