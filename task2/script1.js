let labirint = [

	['#','#','#','#','#','#','#','#','#'],
  
	['#','+','+','+','#','+','+','+',''],
  
	['#','+','#','+','#','+','#','+','#'],
  
	['+','+','#','+','0','+','#','+','#'],
  
	['#','#','#','+','#','#','#','#','#'],
  
	['#','#','+','+','#','#','#','#','#'],
  
	['#','#','+','#','#','#','#','#','#'],
  
	['#','#','#','#','#','#','#','#','#'],
  
  ];

 let arrStart = []
 let arrEnter = []
  //find start point
  for(i=0;i<labirint.length;i++){	  
	  for(k=0;k<labirint[i].length;k++){
		if(labirint[i].includes('0')!= true){
			  continue;
		  }else{
			let posX = labirint[i].indexOf('0');
			let posY = this.i;
			arrStart.push({x:posX , y:posY})			
			break;
		  }
	  }
  }
 //find enter from right
  for(j=0;j<labirint.length;j++){	  
	if(labirint[j][labirint[j].length-1].includes('+')!= true){
		continue;
	}
			else{
	  let posXEnter = labirint[j].indexOf('+');
	  let posYEnter = this.j;
	  arrEnter.push({x:posXEnter,y:posYEnter})
	  	  break;
	}
} 
 //find enter from left
  for(j=0;j<labirint.length;j++){	  
		if(labirint[j][0].includes('+')!= true){
			continue;
		}else{
		  let posXEnter = labirint[j].indexOf('+');
		  let posYEnter = this.j;
		  arrEnter.push({x:posXEnter,y:posYEnter})
		 		  break;
		}
	}
//find enter from top
	for(j=0;j<labirint[0].length;j++){	  
		if(labirint[0].includes('+')!= true){
			continue;
		}else{
		  let posXEnter = labirint[j].indexOf('+');
		  let posYEnter = this.j;
		  arrEnter.push({x:posXEnter,y:posYEnter})
		  		  break;
		}
	}
	//finding enter from bottom
	for(j=0;j<labirint[labirint.length-1].length;j++){	  
		if(labirint[labirint.length-1].includes('+')!= true){
			continue;
		}
		else{
		  let posXEnter = labirint[j].indexOf('+');
		  let posYEnter = this.j;
		  arrEnter.push({x:posXEnter,y:posYEnter})
		  		  break;
		}
	}
let arrCoord = []
	
function checkWay(start, end) {
		labirint[start.y][start.x] = '5';//current position mark as passed
	  
		let neighbor = getValidneighbor(start);//find all avalible steps from current position
	  
		if (neighbor.length > 0) {//check all avalible steps
		  for (let i = 0; i < neighbor.length; i++) {
			const current = neighbor[i];
			
			
			const isDone = current.x === end.x && current.y === end.y;
			const notVisited = labirint[current.y][current.x] !== 5;
			
			arrCoord.push(current);
	  
			if (isDone || (notVisited && checkWay(current, end))) {
			  			  return true;
			  
			}
		  }
		}
		return false;
	  }
	  
	  function getValidneighbor(cord) {
		const { x, y } = cord; //current position
	  
		let cords = [];
	  
		if (labirint[y - 1] !== undefined) {
		  cords.push({ x: x, y: y - 1, val: labirint[y - 1][x] });//can we go to the top?
		}
		if (labirint[y + 1] !== undefined) {
		  cords.push({ x: x, y: y + 1, val: labirint[y + 1][x] });//can we go to the bottom?
		}
		if (labirint[y][x - 1] !== undefined) {
		  cords.push({ x: x - 1, y: y, val: labirint[y][x - 1] });//can we go to the left?
		}
		if (labirint[y][x + 1] !== undefined) {
		  cords.push({ x: x + 1, y: y, val: labirint[y][x + 1] });//can we go to the right?
		}
	  
		return cords.filter((crd) => crd.val === '+');
	  }
	  
	  console.log(checkWay({ x: arrStart[0].x, y: arrStart[0].y }, { x: arrEnter[0].x, y: arrEnter[0].y }));
	  console.log(labirint);
	  
	  arrCoord.unshift(arrStart[0])
	  console.log(arrCoord);

	  let arrCoordResalt = []
  for(k=1; k< arrCoord.length; k++){
    if(arrCoord[k-1].x > arrCoord[k].x && arrCoord[k-1].y == arrCoord[k].y ){
     arrCoordResalt.push('left');       
  }  
  else if(arrCoord[k-1].x == arrCoord[k].x && arrCoord[k-1].y > arrCoord[k].y ){
      arrCoordResalt.push('top');           
 } 
else if(arrCoord[k-1].x == arrCoord[k].x && arrCoord[k-1].y < arrCoord[k].y ){
     arrCoordResalt.push('bottom');         
 }  
  else if(arrCoord[k-1].x < arrCoord[k].x && arrCoord[k-1].y == arrCoord[k].y ){
     arrCoordResalt.push('right') ;        
  }

  }
  console.log(arrCoordResalt)
	
	



	




	



  

  